import { z } from "zod";
import { hashSync } from "bcryptjs";

const userSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().min(10).max(45),
  password: z
    .string()
    .min(4)
    .max(20)
    .transform((pass) => {
      return hashSync(pass, 10);
    }),
  cpf: z.string(),
  sex: z.string(),
  cellphone: z.string(),
});

const userUpdateSchema = userSchema.partial();

const returnUserSchema = userSchema
  .extend({
    id: z.number(),
  })
  .omit({ password: true });

const returnMultipleUserSchema = returnUserSchema.array();

export {
  userSchema,
  returnUserSchema,
  returnMultipleUserSchema,
  userUpdateSchema,
};
