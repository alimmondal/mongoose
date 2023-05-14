import { NextFunction, Request, Response } from "express";
import { createUserToDb } from "./user.service";
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUserToDb();
};
// Pattern:
// Route -> controller -> service
