# MGCR233 Supabase setup

The website code is ready for database-backed student practice check-ins and an instructor-only admin tab. The live site will keep using the email-draft fallback until the Supabase project is connected.

## What the finished setup does

- A student enters an email and clicks **Send check-in**.
- The site sends the email, current Week, and timestamp to Supabase.
- The student sees a real check-in count, such as "This is your 3rd practice check-in."
- Only an authenticated account whose email is `dugmee.hwang@mcgill.ca` can read the check-in table.
- After instructor sign-in, a private **Instructor Admin** tab appears with each student's email, check-in count, most recent check-in, and Weeks.
- Student emails are not stored in GitHub or browser code.

## 1. Create or connect the Supabase project

Create one Supabase project for MGCR233.

You need only these two browser-safe project values:

- Project URL
- Publishable/anon key

Never place a Supabase service-role key in this repository or in `index.html`.

## 2. Run the database migration

Run:

`supabase/migrations/20261020_practice_checkins.sql`

in the Supabase SQL editor.

The table has Row Level Security enabled. There is no anonymous SELECT policy. The only SELECT policy requires the signed-in user's email to equal:

`dugmee.hwang@mcgill.ca`

## 3. Configure instructor authentication

In Supabase Auth, enable Email authentication / magic-link sign-in.

Add this redirect URL:

`https://dhwanghub.github.io/mgcr233/`

The site's instructor sign-in always requests a link for:

`dugmee.hwang@mcgill.ca`

## 4. Deploy the Edge Function

Deploy the function in:

`supabase/functions/practice-checkin/index.ts`

as a function named:

`practice-checkin`

The function uses the Supabase-provided server environment variables `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`. The service-role key remains on the server and is never exposed to students.

## 5. Connect the public site

Edit `site-config.js` and replace:

`YOUR_SUPABASE_URL`

and:

`YOUR_SUPABASE_PUBLISHABLE_KEY`

with the project's public browser values.

It is normal and safe for the publishable/anon key to be present in client-side code when Row Level Security is configured correctly. Never use the service-role key here.

## 6. Optional email notification to the instructor

Database storage and the Admin tab do not require a separate email provider.

If you also want an email sent to `dugmee.hwang@mcgill.ca` every time a student checks in, configure these Edge Function secrets:

- `RESEND_API_KEY`
- `CHECKIN_FROM_EMAIL`

`CHECKIN_FROM_EMAIL` must be an address/domain authorized by your Resend account.

If these secrets are absent, check-ins are still stored normally; only the notification email is skipped.

## Privacy note

The student-facing form explicitly states that the email and check-in time are stored for course practice follow-up and that only the instructor can view the check-in list.

The implementation stores only:

- email
- Week number, when available
- page path
- server timestamp

It does not store quiz answers or quiz scores.
