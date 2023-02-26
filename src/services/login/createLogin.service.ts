import { ILoginRequest } from "../../interfaces/login.interfaces";

import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createLoginService = async (
  loginData: ILoginRequest
): Promise<string> => {
  const token = "";
  return token;
};

export default createLoginService;
