export const ADMIN_COOKIE = "ec-admin-session";

export async function getSessionToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`ec-admin:${password}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifySession(cookieValue: string | undefined): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password || !cookieValue) return false;
  const expected = await getSessionToken(password);
  return cookieValue === expected;
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD?.trim());
}
