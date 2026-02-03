import express from "express";
import dotenv from "dotenv";

import router from "./routes/todo.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use("/todos", router);