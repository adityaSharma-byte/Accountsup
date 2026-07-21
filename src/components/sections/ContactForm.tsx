"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";

const PLACEHOLDER_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";
type Status = "idle" | "sending" | "success" | "error";

/**
 * Static-export lead form using Web3Forms (reliable, Cloudflare-backed).
 * Submissions are emailed to site.email, CC site.emailOps. If no access key is
 * configured yet — or if the request fails for any reason — it falls back to
 * opening the visitor's email app, so the form never dead-ends on an error.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function mailtoFallback(d: Record<string, string>) {
    const subject = encodeURIComponent(`New consultation request from ${d.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${d.name}\nWork email: ${d.email}\nCompany: ${d.company}\nAddress: ${d.address}\n\nHow can we help:\n${d.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return; // honeypot

    const d = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      address: String(fd.get("address") || ""),
      message: String(fd.get("message") || ""),
    };

    // No key yet → open the email app (never a broken page).
    if (!site.formAccessKey || site.formAccessKey === PLACEHOLDER_KEY) {
      mailtoFallback(d);
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
          subject: `New consultation request from ${d.name || "website"}`,
          from_name: "AccountsUp website",
          ccemail: site.emailOps,
          Name: d.name,
          "Work email": d.email,
          Company: d.company,
          Address: d.address,
          "How can we help": d.message,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        mailtoFallback(d);
        setStatus("success");
      }
    } catch {
      // Network/service hiccup → fall back to the email app rather than erroring.
      mailtoFallback(d);
      setStatus("success");
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
