"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/content/site";

/**
 * Static-export-friendly contact form: composes a mailto: to the site inbox.
 * To capture submissions server-side instead, swap the onSubmit body for a POST
 * to a form service (Formspree, Web3Forms, Basin) or a serverless endpoint.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`New enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-cream p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
      </div>
      <div className="mt-5">
        <Field label="Company" name="company" />
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">
          How can we help?
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
          placeholder="Tell us about your entities, systems, and what you need…"
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:w-auto"
      >
        Send message <Send size={15} />
      </button>
      {sent && (
        <p className="mt-4 text-sm text-body">
          Opening your email client to send the message…
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
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
      />
    </div>
  );
}
