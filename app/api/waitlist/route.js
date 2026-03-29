import { getSupabaseAdmin } from "../../../lib/supabaseAdmin";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value, maxLen = 120) {
  if (!value || typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, maxLen);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const email = sanitize(body?.email, 180)?.toLowerCase();
    const name = sanitize(body?.name, 100);
    const country = sanitize(body?.country, 100);
    const role = sanitize(body?.role, 40);
    const source = sanitize(body?.source, 60) || "website";
    const hp = sanitize(body?.hp, 120);

    if (hp) {
      return Response.json({ ok: true }, { status: 200 });
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return Response.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const payload = {
      email,
      name,
      country,
      role,
      source,
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from("waitlist_signups")
      .upsert(payload, { onConflict: "email" });

    if (error) {
      return Response.json(
        { ok: false, error: "Failed to save your signup. Please retry." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    return Response.json(
      { ok: false, error: "Unexpected error while submitting form." },
      { status: 500 }
    );
  }
}

