-- MGCR233 practice check-ins
-- Run this in the Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.practice_checkins (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  week integer,
  page_path text,
  created_at timestamptz not null default now()
);

alter table public.practice_checkins enable row level security;

-- No anonymous/select policy is created.
-- Students submit through the Edge Function only.
-- The instructor reads through an authenticated account and this policy.

drop policy if exists "Instructor can read practice checkins" on public.practice_checkins;
create policy "Instructor can read practice checkins"
on public.practice_checkins
for select
to authenticated
using (
  lower(coalesce(auth.jwt() ->> 'email', '')) = 'dugmee.hwang@mcgill.ca'
);
