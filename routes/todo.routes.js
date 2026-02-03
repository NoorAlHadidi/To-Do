import { Router } from "express";
import {
    addTodo,
    getTodo,
    getTodos,
    updateTodo,
    deleteTodo
} from "../controllers/todos.controller.js";

const router = Router();

router.post("/", addTodo);
router.get("/", getTodos);
router.get("/:id", getTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
