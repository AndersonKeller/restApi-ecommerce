import { ILoginRequest } from "../../interfaces/login.interfaces";

import { AppError } from "../../errors";
import { compare, hashSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

const createLoginService = async (
  loginData: ILoginRequest
): Promise<string> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
  const findUser = await userRepository.findOne({
    where: {email: loginData.email}
})
  if(!findUser){
    throw new AppError("Wrogn email or password", 401);
  }
  const matchPass: boolean = await compare(
    loginData.password,
    findUser.password
  )
  if (!matchPass) {
    throw new AppError("Wrong email or password invalid", 401);
  }
  const token: string = jwt.sign(
    {
      active: true
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: findUser.id.toString(),
    }
  );
  return token;
};

export default createLoginService;
