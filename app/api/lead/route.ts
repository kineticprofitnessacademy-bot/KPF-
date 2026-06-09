console.log("🔥 LEAD API HIT - PRODUCTION VERSION");
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import LeadConfirmation from "../../../emails/LeadConfirmation";

const SHEET_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL || "";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const payload = {
      name:        body.name        || "",
      email:       body.email       || "",
      phone:       body.phone       || "",
      interest:    body.interest    || "",
      source:      body.source      || "website",
      goal:        body.goal        || "",
      timeline:    body.timeline    || "",
      seriousness: body.seriousness || "",
      timestamp:   body.timestamp   || new Date().toISOString(),
      program:     body.program     || body.course || "",
      format:      body.format      || "",
      city:        body.city        || "",
      message:     body.message     || "",
    };

    // ── GOOGLE SHEETS ─────────────────────────────────────────────
    // Google Apps Script URLs redirect (302) before hitting the real
    // endpoint. Node fetch does NOT follow redirects on POST by default
    // — the body gets dropped and the sheet never receives data.
    // Fix: send as URL-encoded form so GAS reads it via e.parameter,
    // OR follow the redirect manually. We do both for maximum compat.

    if (SHEET_URL) {
      try {
        // Step 1: hit the script URL, allow it to redirect
        const sheetRes = await fetch(SHEET_URL, {
          method:   "POST",
          redirect: "follow",          // ← THE KEY FIX
          headers: {
            // GAS handles application/json fine once redirect is followed
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!sheetRes.ok) {
          console.warn(
            "[KPF Lead] Sheet responded with status:",
            sheetRes.status,
            await sheetRes.text().catch(() => "")
          );
        } else {
          console.log("[KPF Lead] Sheet write OK:", sheetRes.status);
        }
      } catch (sheetErr) {
        console.warn("[KPF Lead] Sheet fetch threw:", sheetErr);
      }
    } else {
      console.warn("[KPF Lead] GOOGLE_SHEET_WEBHOOK_URL is not set");
    }

    // ── EMAIL ──────────────────────────────────────────────────────
    if (payload.email) {
      try {
        await resend.emails.send({
          from:    "KPF Academy <admin@kineticprofitness.com>",
          to:      payload.email,
          subject: "KPF Academy — Enquiry Received",
          react:   LeadConfirmation({ name: payload.name }),
        });
      } catch (emailErr) {
        console.warn("[KPF Lead] Email send failed:", emailErr);
      }
    }

    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (err) {
    console.error("[KPF Lead] Unhandled error:", err);
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}
