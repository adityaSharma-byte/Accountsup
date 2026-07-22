"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "@/content/site";

const PLACEHOLDER_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";
type Status = "idle" | "sending" | "success" | "error";

/**
 * Contact form → Web3Forms → emails to site.email (CC ops/sales requires
 * Web3Forms Pro). It only shows "success" when Web3Forms actually confirms the
 * send; any failure surfaces the real message and a direct mailto so we never
 * pretend a lead went through when it didn't.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

    const key = site.formAccessKey as string;
    if (!key || key === PLACEHOLDER_KEY) {
      setErrorMsg("The form isn't connected yet.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `New consultation request from ${d.name || "website"}`,
          from_name: "AccountsUp Website",
          name: d.name,
          email: d.email,
          company: d.company,
          address: d.address,
          message: d.message,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(json?.message || json?.body?.message || "The form service didn't accept the submission.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Couldn't reach the form service. Please email us directly.");
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
        <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>
            {errorMsg} You can also email us directly at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold underline">
              {site.email}
            </a>
            .
          </span>
        </div>
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
