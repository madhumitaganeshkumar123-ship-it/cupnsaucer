import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { Resend } from "resend";
import { resources } from "@/data/resources";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { email?: string; slug?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = (body.email || "").trim();
  const slug = (body.slug || "").trim();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resource = resources.find((r) => r.slug === slug);
  if (!resource) {
    return NextResponse.json({ error: "Unknown resource." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email delivery is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const fromAddress =
    process.env.RESEND_FROM_EMAIL || "Cup N Saucer <resources@cupnsaucer.co.in>";

  let fileBuffer: Buffer;
  try {
    const filePath = path.join(process.cwd(), "public", "resources", resource.file);
    fileBuffer = await readFile(filePath);
  } catch (err) {
    console.error("Failed to read resource file", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  try {
    // Email the visitor with the PDF attached
    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: `Your ${resource.title} from Cup N Saucer`,
      html: `
        <div style="font-family: Georgia, 'Times New Roman', serif; color:#1C1A16; max-width:520px;">
          <p style="font-size:13px; letter-spacing:1px; text-transform:uppercase; color:#A6792E; margin:0 0 8px;">Cup N Saucer</p>
          <h2 style="margin:0 0 12px; font-weight:600;">${resource.title}</h2>
          <p style="font-size:14px; line-height:1.6; color:#6B6355;">${resource.description}</p>
          <p style="font-size:14px; line-height:1.6; color:#6B6355;">Your ${resource.title} is attached to this email as a PDF.</p>
          <p style="font-size:13px; line-height:1.6; color:#6B6355; margin-top:24px;">
            Want help putting this into practice? <a href="${site.url}/contact" style="color:#A6792E;">Book a strategy call</a>.
          </p>
          <p style="font-size:12px; color:#A69C8A; margin-top:32px;">Cup N Saucer — ${site.tagline}<br/>${site.url}</p>
        </div>
      `,
      attachments: [
        {
          filename: resource.file,
          content: fileBuffer,
        },
      ],
    });

    // Notify the business owner
    await resend.emails.send({
      from: fromAddress,
      to: site.email,
      subject: `Resource request: ${resource.title}`,
      html: `<p>${email} just requested <strong>${resource.title}</strong> from the Resources page.</p>`,
    });
  } catch (err) {
    console.error("Resend send failed", err);
    return NextResponse.json(
      { error: "Something went wrong sending the email. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
