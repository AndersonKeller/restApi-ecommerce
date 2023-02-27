import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUsersReturn } from "../../interfaces/users.interfaces"
import { returnMultipleUserSchema } from "../../schemas/users.schemas"


const listUsersService = async (authorization:string): Promise<IUsersReturn> => {


    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find()

    const users = returnMultipleUserSchema.parse(findUsers)

    console.log(authorization);
    return users

}

export {
    listUsersService
}