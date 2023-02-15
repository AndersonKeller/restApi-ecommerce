import { z } from 'zod'

const createUserSchema = z.object({
    name: z.string().min(3).max(45),
	email: z.string().email(),
	password: z.string(),
	role: z.enum(['student', 'instructor'])
})

const returnUserSchema = createUserSchema.extend({
    id: z.number(),
    isActive: z.boolean()
})

const returnUserSchemaWithoutPassword = returnUserSchema.omit({password: true})

const allUsersSchema = z.array(returnUserSchemaWithoutPassword)

export {
    createUserSchema,
    returnUserSchema,
    returnUserSchemaWithoutPassword
}