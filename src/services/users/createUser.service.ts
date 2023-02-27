import { IUser, IUserReturn } from '../../interfaces/users.interfaces'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { Repository } from 'typeorm'
import { returnUserSchema } from '../../schemas/users.schemas'
import { AppError } from '../../errors'

const createUserService = async (userData: IUser): Promise<IUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where: {email: userData.email}
    })

    if(findUser){
        throw new AppError("Email already exists",409);
    }
    const user: User = userRepository.create(userData)

    await userRepository.save(user)
    
    const newUser = returnUserSchema.parse(user)
    
    return newUser

}

export default createUserService