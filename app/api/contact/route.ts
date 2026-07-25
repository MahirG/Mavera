import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (name.length < 2 || !emailPattern.test(email) || message.length < 10) {
      return NextResponse.json(
        { message: "Please provide a valid name, email address, and a little more detail." },
        { status: 400 }
      );
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: typeof body.company === "string" ? body.company.trim() : "",
          inquiry: typeof body.inquiry === "string" ? body.inquiry.trim() : "",
          message,
          submittedAt: new Date().toISOString(),
          source: "mavera-website"
        }),
        cache: "no-store"
      });

      if (!response.ok) {
        return NextResponse.json({ message: "The inquiry service is temporarily unavailable. Please try again shortly." }, { status: 502 });
      }
    } else if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { message: "The contact channel is being configured. Please check back shortly." },
        { status: 503 }
      );
    }

    return NextResponse.json({ message: "Thank you. Your inquiry has been received by Mavera." }, { status: 202 });
  } catch {
    return NextResponse.json({ message: "We could not process this inquiry. Please review the form and try again." }, { status: 400 });
  }
}
