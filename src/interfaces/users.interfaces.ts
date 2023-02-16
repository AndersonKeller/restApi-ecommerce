import { QueryResult } from "pg"
import { createUserSchema, returnUserSchema, returnUserSchemaWithoutPassword, allUsersSchema } from "../schemas/users.schemas"
import { z } from 'zod'

type IUserRequest = z.infer<typeof createUserSchema>
type IUser = z.infer<typeof returnUserSchema>

type IUserWithoutPassword = Omit<IUser, 'password'>
type IUserResult = QueryResult<IUserWithoutPassword>
type IUserResultWithPassword = QueryResult<IUser>
type IAllUsersReturn = z.infer<typeof allUsersSchema>

export {
    IUserRequest,
    IUser,
    IUserWithoutPassword,
    IUserResult,
    IAllUsersReturn,
    IUserResultWithPassword
}