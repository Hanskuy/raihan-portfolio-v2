import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter at least 2 characters.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(160),
  subject: z.string().trim().min(3, "Enter at least 3 characters.").max(120),
  message: z.string().trim().min(20, "Enter at least 20 characters.").max(2000),
  website: z.string().max(0, "Automated submission rejected.").optional().default(""),
  antiSpamToken: z.string().min(1, "Refresh the page and try again."),
});

export type ContactInput = z.infer<typeof contactSchema>;
