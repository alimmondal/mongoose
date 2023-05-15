import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload); // Use=>class user=>instance
  await user.save(); // builtin instance method
  // console.log(user);

  // console.log(user.fullName()); //custom instance method
  return user;
};

export const getUsersFromDb = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};
export const getUserByIdFromDb = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1 });
  return user;
};
export const getAdminUsersByFromDb = async () => {
  const admin = await User.getAdminUsers();
  return admin;
};
