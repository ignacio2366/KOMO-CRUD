import { Router } from "express";

import {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/todorController";
import { validateAccessToken } from "./../middleware/validateAccessToken";

const userRouter = Router();

// api/todo/
userRouter.get("/getTask", validateAccessToken, getAllTask);
userRouter.post("/addTask", validateAccessToken, createTask);
userRouter.delete("/:todoId/deleteTask", validateAccessToken, deleteTask);
userRouter.put("/:todoId/updateTask", validateAccessToken, updateTask);

export default userRouter;
