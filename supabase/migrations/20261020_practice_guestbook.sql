-- MGCR233 public practice guestbook
-- Run this in the Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.practice_guestbook (
  id uuid primary key default gen_random_uuid(),
  name text,
  message text not null,
  created_at timestamptz not null default now(),
  constraint practice_guestbook_name_length check (char_length(coalesce(name, '')) <= 60),
  constraint practice_guestbook_message_length check (char_length(message) between 1 and 280)
);

alter table public.practice_guestbook enable row level security;

drop policy if exists "Anyone can read guestbook" on public.practice_guestbook;
create policy "Anyone can read guestbook"
on public.practice_guestbook
for select
to anon, authenticated
using (true);

drop policy if exists "Anyone can add guestbook note" on public.practice_guestbook;
create policy "Anyone can add guestbook note"
on public.practice_guestbook
for insert
to anon, authenticated
with check (
  char_length(message) between 1 and 280
  and char_length(coalesce(name, '')) <= 60
);

-- No update or delete policy is created from the public website.
