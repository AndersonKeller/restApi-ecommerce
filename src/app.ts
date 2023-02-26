import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";

const app: Application = express();
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", loginRoutes);

app.use(handleErrors);
export default app;
