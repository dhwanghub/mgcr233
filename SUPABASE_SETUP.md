# MGCR233 Practice Guestbook setup

This version is intentionally simple. There is no instructor login, email collection, admin tab, or notification system.

Students can leave:
- an optional name
- a short message up to 280 characters

The latest 20 notes appear publicly on the course practice page.

## One-time setup

1. Create a Supabase project.
2. Open the SQL editor and run:
   `supabase/migrations/20261020_practice_guestbook.sql`
3. In Supabase project settings, copy:
   - Project URL
   - Publishable/anon key
4. Put those two public values in `site-config.js`.

That is all that is required.

The public key is safe to use in the browser because Row Level Security controls what the website can do. Do not put a service-role key or any other secret in this repository.

## Public behavior

Visitors may:
- read guestbook notes
- add a new note

Visitors may not:
- edit existing notes
- delete notes through the website

If you ever want to remove an inappropriate note, you can delete it directly from the Supabase table dashboard.
