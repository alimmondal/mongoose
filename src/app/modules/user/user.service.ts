import User from "./user.model";

export const createUserToDb = async () => {
  const user = await new User({
    id: 222,
    role: "student",
    password: 1111111,
    name: {
      firstName: "alims",
      middleName: "abdul",
      lastName: "Mondal",
    },
    dateOfBirth: "121212",
    gender: "male",
    email: "asm@gmail.com",
    contactNo: "2222222222",
    emergencyContactNo: "3333333333",
    presentAddress: "abc, joypurhat",
    permanentAddress: "Joypurhat",
  });
  await user.save();
  console.log(user);
};
