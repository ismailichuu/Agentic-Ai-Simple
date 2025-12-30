import z from "zod";

export const agentSchema = z.object({
    userInput: z.string(),
    requirments: z.any().nullable(),
    jobPost: z.string().nullable(),
    budget: z.any().nullable(),
    feedback: z.string().nullable(),
    status: z.enum(['drafting', 'accepted']),
})