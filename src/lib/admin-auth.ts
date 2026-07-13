export const ADMIN_COOKIE = "ec-admin-session";

function credentials(): { id: string; password: string } | null {
  const id = process.env.ADMIN_ID?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();
  if (!id || !password) return null;
  return { id, password };
}

export async function getSessionToken(id: string, password: string): Promise<string> {
  const data = new TextEncoder().encode(`ec-admin:${id}:${password}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifySession(cookieValue: string | undefined): Promise<boolean> {
  const creds = credentials();
  if (!creds || !cookieValue) return false;
  const expected = await getSessionToken(creds.id, creds.password);
  return cookieValue === expected;
}

export function isAdminConfigured(): boolean {
  return Boolean(credentials());
}

export function verifyAdminCredentials(id: string, password: string): boolean {
  const creds = credentials();
  if (!creds) return false;
  return id === creds.id && password === creds.password;
}
