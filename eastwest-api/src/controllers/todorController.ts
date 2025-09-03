import { TodoModel } from "@/models/ToDo.type";
import { insertJsonFile, readJsonFile } from "./../services/syncJsonfile";
import { Request, Response } from "express";

// (GET) Select All Task
export const getAllTask = async (req: Request, res: Response) => {
  const task = readJsonFile() as TodoModel[];
  return res.status(200).json({
    status: true,
    data: task,
  });
};

// (POST) Add Task
export const createTask = async (req: Request, res: Response) => {
  const data = readJsonFile() as TodoModel[];
  const lastNumber = Object.keys(readJsonFile()).length + 1;
  const { title, description } = req.body;

  data.push({
    id: lastNumber,
    title: title,
    description: description,
  });
  const response = insertJsonFile(data);
  return res.status(200).json({
    status: true,
    message: "Task created successfully added",
    data: response,
  });
};

// (PUT) Update  Selected Task
export const updateTask = (req: Request, res: Response) => {
  const { title, description } = req.body;
  const { todoId } = req.params;
  const data = readJsonFile() as TodoModel[];
  const selectTask = data.findIndex((task) => Number(todoId) === task.id);

  if (selectTask === -1) {
    return res.status(404).json({
      message: "Task not Found",
    });
  }
  if (title !== undefined) {
    data[selectTask].title = title;
  }
  if (description !== undefined) {
    data[selectTask].description = description;
  }
  const response = insertJsonFile(data);
  return res.status(200).json({
    status: true,
    message: "Todo updated successfully",
    data: response,
  });
};

// (DELETE) Delete Selected  Task
export const deleteTask = async (req: Request, res: Response) => {
  const { todoId } = req.params;
  const data = readJsonFile() as TodoModel[];
  const deleteRespones = data.filter((item) => Number(todoId) !== item.id);
  const response = insertJsonFile(deleteRespones);

  return res.status(200).json({
    status: true,
    message: "Task deleted successfully",
    data: response,
  });
};
