"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(data.message || "Unable to submit your inquiry.");

      setStatus("success");
      setMessage(data.message || "Thank you. Your inquiry has been received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          <span>Full name</span>
          <input name="name" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" required placeholder="name@company.com" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Company</span>
          <input name="company" autoComplete="organization" placeholder="Company or organization" />
        </label>
        <label>
          <span>Inquiry type</span>
          <select name="inquiry" defaultValue="Partnership">
            <option>Partnership</option>
            <option>Business inquiry</option>
            <option>Mavera Coffee House</option>
            <option>Media</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label>
        <span>How can we help?</span>
        <textarea name="message" required rows={6} placeholder="Tell us about the opportunity, project, or question." />
      </label>
      <div className="contact-form__footer">
        <button className="button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send inquiry"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className={`form-status form-status--${status}`} aria-live="polite">{message}</p>
      </div>
    </form>
  );
}
