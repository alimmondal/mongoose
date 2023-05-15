import cors from "cors";
import express, { Application } from "express";
import userRouter from "./app/modules/user/user.route";
const app: Application = express();

// using cors
app.use(cors());
//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// to insert a test data into mongodb,we have to do following steps:
/*
    step1: Interface
    step2:Schema
    step3:Model
    step4:Database Query on model
    2. Create a Schema corresponding to the document interface.
 */
app.use("/api/v1/user", userRouter);
export default app;

/*
Interface-> interface.ts
Schema, Model ->model.ts
Route:
route function -> controller.ts
Database query function -> Service
*/
