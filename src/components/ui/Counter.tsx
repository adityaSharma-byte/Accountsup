"use client";

import { useEffect, useRef, useState } from "react";

function fmt(n: number, decimals: number) {
  const fixed = n.toFixed(decimals);
  const [int, dec] = fixed.split(".");
  const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dec ? `${withSep}.${dec}` : withSep;
}

/**
 * Animated count-up that triggers when scrolled into view.
 * SSR renders the final value (so no-JS / SEO sees real numbers); the client
 * replays 0 -> value on first view. A setTimeout guarantees the final value is
 * shown even if requestAnimationFrame is throttled (e.g. a background tab), so
 * the number can never get stuck mid-count. Pass `display` for a static stat.
 */
export default function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  display,
  className = "",
}: {
  value?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(
    display ?? (value !== undefined ? fmt(value, decimals) : "")
  );
  const done = useRef(false);

  useEffect(() => {
    if (display !== undefined || value === undefined) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;
    const finalText = fmt(value, decimals);

    const run = () => {
      if (done.current) return;
      done.current = true;
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setText(fmt(value * eased, decimals));
        if (p < 1) raf = requestAnimationFrame(tick);
        else setText(finalText);
      };
      raf = requestAnimationFrame(tick);
      timer = setTimeout(() => setText(finalText), duration + 800);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [value, decimals, display]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
