import { z } from "zod";

export const ConsultationSchema = z
  .object({
    policy: z.boolean().default(false).optional(),
    telphoneNumber: z.string().min(8),
  })
  .refine((date) => date.policy === true && date.telphoneNumber.length, {
    message: "not true",
    path: ["policy"],
  });

export const taskSchema = z.object({});
