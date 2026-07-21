"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";

const PLACEHOLDER_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";
type Status = "idle" | "sending" | "success" | "error";

/**
 * Static-export-friendly lead form. When a Web3Forms access key is configured
 * in site.formAccessKey, submissions are POSTed to Web3Forms, which emails them
 * to the AccountsUp inbox. Until then it falls back to opening the email app, so
 * the form is never a dead end.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const address = String(data.get("address") || "");
    const message = String(data.get("message") || "");

    // Fallback: no form service configured yet → open the email client.
    if (!site.formAccessKey || site.formAccessKey === PLACEHOLDER_KEY) {
      const subject = encodeURIComponent(`New consultation request from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nWork email: ${email}\nCompany: ${company}\nAddress: ${address}\n\nHow can we help:\n${message}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.formAccessKey,
          subject: `New consultation request from ${name || "website"}`,
          from_name: name || "AccountsUp website",
          Name: name,
          "Work email": email,
          Company: company,
          Address: address,
          Message: message,
        }),
      });
      const json = await res.json();
      if (json.success) {
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
          Your request is on its way to our team. We&apos;ll get back to you within
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
        type="checkbox"
        name="botcheck"
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
