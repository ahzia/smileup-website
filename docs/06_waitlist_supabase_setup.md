# Supabase Waitlist Setup (Website)

This file documents the current waitlist integration in `smileup-website`.

## 1) Environment variables

Create `.env.local` in `smileup-website/`:

```bash
# Option A — API URL (from Supabase Dashboard → Settings → API):
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Option B — same Postgres URL as smileup-impactchain (DATABASE_URL / pooler).
# The site resolves https://YOUR_REF.supabase.co from postgres.PROJECT_REF@… or db.PROJECT_REF.supabase.co.
SUPABASE_URL=postgresql://postgres.YOUR_PROJECT_REF:…@…pooler.supabase.com:6543/postgres?…
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Option C — reuse the variable name from impactchain only:
# DATABASE_URL=postgresql://…   (same string as in smileup-impactchain/.env)
# SUPABASE_SERVICE_ROLE_KEY=…
```

Use service role key only on the server.  
Do not expose it in `NEXT_PUBLIC_*` variables.

## 2) Required table

Run this SQL in Supabase:

```sql
create table if not exists public.waitlist_signups (
  id bigserial primary key,
  email text not null unique,
  name text,
  country text,
  role text,
  source text,
  created_at timestamptz not null default now()
);

create index if not exists idx_waitlist_created_at
  on public.waitlist_signups (created_at desc);
```

## 3) API route behavior

The website uses `POST /api/waitlist`:
- validates email
- ignores obvious bot submissions via honeypot field
- upserts by `email` to avoid duplicates

## 4) Where this is used

- Home page waitlist form
- Carbon calculator page waitlist form

