import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const phone = process.env.CALLMEBOT_PHONE;
    const apiKey = process.env.CALLMEBOT_APIKEY;

    if (!phone || !apiKey) {
      return NextResponse.json(
        { ok: false, error: "WhatsApp notification is not configured." },
        { status: 500 }
      );
    }

    const message =
      data.source === "Calendly"
        ? "A visitor just booked a slot via Calendly. Check your Calendly dashboard for the date/time and contact details."
        : [
            "New Business Details Submitted",
            "",
            `Name: ${data.name || "-"}`,
            `Company: ${data.company || "-"}`,
            `Industry: ${data.industry || "-"}`,
            `Team size: ${data.teamSize || "-"}`,
            `Challenges: ${data.challenges || "-"}`,
            `Goals: ${data.goals || "-"}`,
          ].join("\n");

    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(
      message
    )}&apikey=${apiKey}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`CallMeBot responded with ${res.status}`);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("book-consultation notify error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send notification." },
      { status: 500 }
    );
  }
}