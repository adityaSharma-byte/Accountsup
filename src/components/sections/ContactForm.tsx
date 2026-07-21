"use client";

import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";

/**
 * Static-export lead form using FormSubmit's native POST (no account, no API
 * key, no client-side fetch/CORS). On submit the browser POSTs directly to
 * FormSubmit, which emails every lead to site.email (CC site.emailOps) and then
 * redirects back to this page with ?sent=1 so we can show a success message.
 * First submission triggers a one-time "Activate" email to site.email.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const nextRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") setSent(true);
    if (nextRef.current) {
      nextRef.current.value = `${window.location.origin}${window.location.pathname}?sent=1`;
    }
  }, []);

  if (sent) {
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
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
      className="rounded-3xl border border-line bg-cream p-6 sm:p-8"
    >
      {/* FormSubmit config */}
      <input type="hidden" name="_subject" value="New consultation request — AccountsUp" />
      <input type="hidden" name="_cc" value={site.emailOps} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input ref={nextRef} type="hidden" name="_next" value="" />
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
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:w-auto"
      >
        Send message <Send size={15} />
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
