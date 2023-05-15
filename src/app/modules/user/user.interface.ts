import { Model } from "mongoose";

export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

// static method
export interface UserModel extends Model<IUser> {
  getAdminUsers(): IUser[];
}

// Put all user instance methods in this interface:
export interface IUserMethods {
  fullName(): string;
}
