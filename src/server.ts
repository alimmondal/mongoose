import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;

//database connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ts-practice");
    console.log(` database connection successful`);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Fail to connect database`, error);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();
