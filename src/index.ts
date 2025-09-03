import express from "express";
import userRouter from "./routes/Todo";
import dotenv from "dotenv";

const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

const cors = require("cors");

dotenv.config();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "accesskey",
      "X-Requested-With",
    ],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes TO DO
app.use("/api/todo", userRouter);

app.get("/", (req, res) => {
  res.send("Sample API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
