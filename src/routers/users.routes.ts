import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import { userSchema, userUpdateSchema } from "../schemas/users.schemas";

const userRoutes: Router = Router();

userRoutes.post(
  "/cadastro",
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);
userRoutes.get("/users", listUserController);
userRoutes.delete("/:id", ensureUserExistsMiddleware, deleteUserController);
userRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(userUpdateSchema),
  ensureUserExistsMiddleware,
  updateUserController
);

export default userRoutes;
