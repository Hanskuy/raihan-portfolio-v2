import { Resend } from "resend";
import type { ContactInput } from "./validation";

export async function sendContactEmail(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    return { configured: false as const };
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: input.email,
    subject: `[Portfolio] ${input.subject}`,
    text: `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`,
  });

  if (error) throw new Error(error.message);
  return { configured: true as const };
}
