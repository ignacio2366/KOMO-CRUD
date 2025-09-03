import path from "path";
import fs from "fs";
import { TodoModel } from "@/models/ToDo.type";
import { title } from "process";

const JSON_PATH = path.join(__dirname, "./../contants.json");

export const readJsonFile = () => {
  try {
    if (!fs.existsSync(JSON_PATH)) {
      fs.writeFileSync(JSON_PATH, JSON.stringify([], null, 2));
      return [];
    }
    const fileData = fs.readFileSync(JSON_PATH, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return [];
  }
};

export const insertJsonFile = (todo: TodoModel[]) => {
  try {
    const read = readJsonFile();
    fs.writeFileSync(JSON_PATH, JSON.stringify(todo, null, 2));
    read.pu;
  } catch (error) {
    console.log(error);
  }
};
