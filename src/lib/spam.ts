import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const fallbackSecret = randomBytes(32).toString("hex");

function secret() {
  return process.env.CONTACT_FORM_SECRET ?? process.env.RESEND_API_KEY ?? fallbackSecret;
}

export function createAntiSpamToken() {
  const timestamp = Date.now().toString();
  const signature = createHmac("sha256", secret()).update(timestamp).digest("hex");
  return `${timestamp}.${signature}`;
}

export function validateAntiSpamToken(token: string) {
  const [timestamp, signature] = token.split(".");
  if (!timestamp || !signature) return false;

  const expected = createHmac("sha256", secret()).update(timestamp).digest("hex");
  const receivedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (receivedBuffer.length !== expectedBuffer.length) return false;
  if (!timingSafeEqual(receivedBuffer, expectedBuffer)) return false;

  const elapsed = Date.now() - Number(timestamp);
  return Number.isFinite(elapsed) && elapsed >= 2500 && elapsed <= 24 * 60 * 60 * 1000;
}
