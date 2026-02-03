import express from "express";
import dotenv from "dotenv";

import todosRouter from "./routes/todos.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use("/todos", todosRouter);