# Supabase Waitlist Setup (Website)

This file documents the current waitlist integration in `smileup-website`.

## 1) Environment variables

Create `.env.local` in `smileup-website/`:

```bash
SUPABASE_URL=your-project-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
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

