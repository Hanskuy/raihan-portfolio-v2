import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { contactSchema } from "@/lib/validation";
import { createAntiSpamToken, validateAntiSpamToken } from "@/lib/spam";

export const runtime = "nodejs";

export function GET() {
  return NextResponse.json({ token: createAntiSpamToken() });
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Send valid form data." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Check the highlighted fields and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  if (!validateAntiSpamToken(parsed.data.antiSpamToken)) {
    return NextResponse.json(
      { message: "Please refresh the page and submit the form again." },
      { status: 400 },
    );
  }

  try {
    const result = await sendContactEmail(parsed.data);
    if (!result.configured) {
      return NextResponse.json(
        {
          message:
            "Email delivery is not configured yet. Please use the direct email link instead.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ message: "Thanks. Your message has been sent." });
  } catch {
    return NextResponse.json(
      { message: "The message could not be sent. Please email Raihan directly." },
      { status: 502 },
    );
  }
}
