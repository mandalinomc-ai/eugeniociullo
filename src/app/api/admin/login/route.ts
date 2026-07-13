import { NextResponse } from "next/server";
import { ADMIN_COOKIE, getSessionToken, isAdminConfigured, verifyAdminCredentials } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Area admin non configurata. Imposta ADMIN_ID e ADMIN_PASSWORD su Vercel." },
      { status: 503 }
    );
  }

  let id = "";
  let password = "";
  try {
    const body = (await request.json()) as { id?: string; password?: string };
    id = body.id?.trim() ?? "";
    password = body.password?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "Richiesta non valida" }, { status: 400 });
  }

  if (!id || !password || !verifyAdminCredentials(id, password)) {
    return NextResponse.json({ error: "ID o password errati" }, { status: 401 });
  }

  const token = await getSessionToken(id, password);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
