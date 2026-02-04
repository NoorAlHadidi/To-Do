import { z } from 'zod';

export const addTodoSchema = z.object({
    text: z.string().min(1, "Text cannot be empty.").max(200, "Text must be at most 200 characters.")
});

export type addTodo = z.infer<typeof addTodoSchema>;