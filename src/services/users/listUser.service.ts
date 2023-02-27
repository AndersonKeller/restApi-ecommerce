import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUserReturn } from "../../interfaces/users.interfaces"
import { returnUserSchema } from "../../schemas/users.schemas"
import  jwt  from "jsonwebtoken";
import { AppError } from "../../errors"


const listUserService = async (authorization:string): Promise<IUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    
    const res = jwt.decode(authorization);
    let id: any;
    if(res?.sub){
        id = res.sub;
    }
    const findUser = await userRepository.findOneBy({
       
        id: parseInt(id)
       
    })
    if(!findUser){
        throw new AppError("User not found", 400);
    }
    const user = returnUserSchema.parse(findUser)
    return user
}

export {
    listUserService
}