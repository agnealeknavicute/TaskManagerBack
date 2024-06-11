import express, { Request, Response } from "express";
import { Todo } from "./models/todoModel";

const router = express.Router();

router.get("/api/todos", async (req: Request, res: Response) => {
  const tasks = await Todo.find({});
  return res.send(tasks);
});

router.get("/api/todo/:id", async (req: Request, res: Response) => {
  const task = await Todo.find({ id: req.params.id });
  return res.send(task);
});

router.get("/api/todoDelete/:id", async (req: Request, res: Response) => {
  await Todo.deleteOne({ id: req.params.id });
  const tasks = await Todo.find({});
  return res.send(tasks);
});

router.post("/api/todo", async (req: Request, res: Response) => {
  const { id, title, description, type, date, status } = req.body;
  const task = new Todo({
    id: id,
    title: title,
    description: description,
    type: type,
    date: date,
    status: status,
  });
  try {
    await task.save();
    res.send(task);
  } catch (e) {
    console.log(e);
  }
});

export { router as todoRouter };
