import { z } from 'zod';

const updateTodoSchema = z.object({
    params: z.object({
        id: z.coerce.number().int("ID must be an integer.")
    }),
    body: z.object({
        text: z.string().min(1, "Text cannot be empty.").min(50, "Text must be at least 50 characters.").max(200, "Text must be at most 200 characters.")
    })
});

const getTodoSchema = z.object({
    params: z.object({
        id: z.coerce.number().int("ID must be an integer.")
    })
});

export { updateTodoSchema, getTodoSchema };

export type updateTodo = z.infer<typeof updateTodoSchema>;
export type getTodo = z.infer<typeof getTodoSchema>;