import { json } from "body-parser";
import express from "express";
import { todoRouter } from "./routes";
import mongoose from "mongoose";
const cors = require("cors");
const app = express();

const corsOption = {
  origin: ["http://localhost:4200"],
};
app.use(cors(corsOption));

app.use(json());
app.use(todoRouter);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://derttor:2roXjT6MTAMyEyUc@cluster-task-manager.xobp0bj.mongodb.net/?retryWrites=true&w=majority&appName=cluster-task-manager",
      {
        dbName: "task-manager",
      }
    );
    console.log("mongoDB");
  } catch (e) {
    console.log(e);
  }
};

connectDB();

app.listen(3001, () => {});
