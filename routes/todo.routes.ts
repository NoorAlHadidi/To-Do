import { Router } from "express";
import {
    addTodo,
    getTodos,
    getTodo,
    updateTodo,
    markTodo,
    deleteTodo
} from "../controllers/todo.controller.ts";

const router = Router();

router.post("/", addTodo);
router.get("/", getTodos);
router.get("/:id", getTodo);
router.patch("/:id", updateTodo);
router.patch("/:id/mark", markTodo);
router.delete("/:id", deleteTodo);

export default router;
