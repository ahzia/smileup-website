import { createClient } from "@supabase/supabase-js";

let adminClient;

/**
 * Supabase JS needs the HTTPS API URL. Impactchain-style env often only sets a
 * Postgres URL (SUPABASE_URL or DATABASE_URL with postgres://…pooler… or db.*.supabase.co).
 */
function resolveSupabaseHttpUrl() {
  const candidates = [process.env.SUPABASE_URL, process.env.DATABASE_URL].filter(
    Boolean
  );

  for (const raw of candidates) {
    const trimmed = raw.trim();
    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed.replace(/\/$/, "");
    }
    try {
      const normalized = trimmed.replace(/^postgres(ql)?:\/\//i, "postgresql://");
      const u = new URL(normalized);
      const hostMatch = u.hostname.match(/^db\.([a-z0-9]+)\.supabase\.co$/i);
      if (hostMatch) {
        return `https://${hostMatch[1]}.supabase.co`;
      }
      const user = decodeURIComponent(u.username || "");
      const userMatch = user.match(/^postgres\.([a-z0-9]+)$/i);
      if (userMatch) {
        return `https://${userMatch[1]}.supabase.co`;
      }
    } catch {
      /* ignore invalid URL */
    }
  }

  return null;
}

export function getSupabaseAdmin() {
  if (adminClient) {
    return adminClient;
  }

  const url = resolveSupabaseHttpUrl();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!url || !key) {
    throw new Error(
      "Missing Supabase server credentials. Set SUPABASE_SERVICE_ROLE_KEY and either SUPABASE_URL (https://…supabase.co or the same Postgres URL as DATABASE_URL) or DATABASE_URL."
    );
  }

  adminClient = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return adminClient;
}

