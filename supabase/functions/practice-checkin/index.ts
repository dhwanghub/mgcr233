import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ ok: false, error: "Method not allowed." }, 405);

  try {
    const body = await req.json();
    const email = String(body?.email || "").trim().toLowerCase();
    const weekRaw = Number(body?.week);
    const week = Number.isInteger(weekRaw) && weekRaw >= 1 && weekRaw <= 30 ? weekRaw : null;
    const pagePath = String(body?.pagePath || "").slice(0, 300);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return json({ ok: false, error: "Please enter a valid email address." }, 400);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      return json({ ok: false, error: "Server configuration is incomplete." }, 500);
    }

    const admin = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error: insertError } = await admin
      .from("practice_checkins")
      .insert({ email, week, page_path: pagePath });

    if (insertError) throw insertError;

    const { count, error: countError } = await admin
      .from("practice_checkins")
      .select("id", { count: "exact", head: true })
      .eq("email", email);

    if (countError) throw countError;

    // Optional email notification.
    // If RESEND_API_KEY and CHECKIN_FROM_EMAIL are configured, send a message to the instructor.
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const fromEmail = Deno.env.get("CHECKIN_FROM_EMAIL");
    if (resendApiKey && fromEmail) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: ["dugmee.hwang@mcgill.ca"],
            subject: "MGCR233 practice check-in",
            text: [
              "A student submitted a practice check-in.",
              `Email: ${email}`,
              `Week: ${week ?? "not recorded"}`,
              `Total check-ins from this email: ${count ?? 1}`,
            ].join("\n"),
          }),
        });
      } catch (notificationError) {
        console.error("Notification email failed:", notificationError);
      }
    }

    return json({ ok: true, checkinCount: count ?? 1 });
  } catch (error) {
    console.error(error);
    return json({ ok: false, error: "Could not save the check-in." }, 500);
  }
});
