import {
    userSchema,
    returnUserSchema,
    returnMultipleUserSchema,
    userUpdateSchema
} from '../schemas/users.schemas'
import { z } from 'zod'
import { DeepPartial } from 'typeorm'

type IUser = z.infer<typeof userSchema>
type IUserReturn = z.infer<typeof returnUserSchema>
type IUsersReturn = z.infer<typeof returnMultipleUserSchema>
type IUserUpdate = DeepPartial<IUser>

export {
    IUser,
    IUserReturn,
    IUsersReturn,
    IUserUpdate
}