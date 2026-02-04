import { Router } from "express";
import {
    addTodo,
    getTodo,
    getTodos,
    updateTodo,
    markTodo,
    deleteTodo
} from "../controllers/todo.controller.js";
import { validateId, validateText, validationHandler } from "../utils/validation.helper.js";

const router = Router();

router.post("/", validateText, addTodo);
router.get("/", getTodos);
router.get("/:id", validateId, getTodo);
router.patch("/:id", validateId, validateText, updateTodo);
router.patch("/:id/mark", validateId, markTodo);
router.delete("/:id", validateId, deleteTodo);

export default router;
