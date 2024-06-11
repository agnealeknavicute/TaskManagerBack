import mongoose from "mongoose";

export enum TaskTypes {
  HighUrgency = "High Urgency",
  MediumUrgency = "Medium Urgency",
  LowUrgency = "Low urgency",
}
export enum TaskStatus {
  Done = "done",
  InProgress = "in progress",
  NotStarted = "not started",
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Task", todoSchema);
export { Todo };
