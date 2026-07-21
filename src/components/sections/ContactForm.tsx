"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Static-export lead form. Submissions POST to FormSubmit (no account / no API
 * key), which emails every lead to site.email and CCs site.emailOps.
 * The first submission triggers a one-time "Activate" email to site.email;
 * after it's confirmed once, all future leads are delivered automatically.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields — silently drop them.
    if (data.get("_honey")) {
      setStatus("success");
      return;
    }

    const name = String(data.get("name") || "");
    setStatus("sending");
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: `New consultation request from ${name || "website"}`,
            _template: "table",
            _captcha: "false",
            _cc: site.emailOps,
            Name: name,
            "Work email": String(data.get("email") || ""),
            Company: String(data.get("company") || ""),
            Address: String(data.get("address") || ""),
            "How can we help": String(data.get("message") || ""),
          }),
        }
      );
      const json = await res.json();
      if (res.ok && (json.success === "true" || json.success === true)) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-line bg-cream p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/15 text-brand">
          <CheckCircle2 size={30} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink">Thanks — we&apos;ve got it</h3>
        <p className="mt-2 max-w-sm leading-relaxed text-body">
          Your message is on its way to our team. We&apos;ll get back to you within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-cream p-6 sm:p-8"
    >
      {/* honeypot */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" />
        <Field label="Address" name="address" />
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">
          How can we help? <span className="text-brand">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          placeholder="Tell us about your entities, systems, and what you need…"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <Send size={15} />
      </button>
      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please email us directly at {site.email}.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
