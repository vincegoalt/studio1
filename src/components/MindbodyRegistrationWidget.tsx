"use client";

import { useEffect, useRef, useState } from "react";

export function MindbodyRegistrationWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    // Suppress healcode.js errors
    const errorHandler = (e: ErrorEvent) => {
      if (e.filename && e.filename.indexOf("healcode") !== -1) {
        e.preventDefault();
        return true;
      }
    };
    window.addEventListener("error", errorHandler);

    // Remove any existing healcode scripts so we get a fresh load
    document.querySelectorAll('script[src*="healcode"]').forEach((s) => s.remove());

    // Small delay to let DOM settle after navigation
    const loadDelay = setTimeout(() => {
      const script = document.createElement("script");
      script.src =
        "https://widgets.mindbodyonline.com/javascripts/healcode.js";
      script.async = true;
      script.onload = () => setStatus("ready");
      script.onerror = () => setStatus("error");
      document.body.appendChild(script);
    }, 200);

    // Fallback timeout
    timeoutId = setTimeout(() => {
      if (containerRef.current) {
        const hasContent =
          containerRef.current.querySelector("iframe") ||
          containerRef.current.querySelector("form") ||
          containerRef.current.querySelector(".hc-widget");
        if (!hasContent) {
          setStatus("error");
        }
      }
    }, 10000);

    return () => {
      clearTimeout(loadDelay);
      clearTimeout(timeoutId);
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {status === "loading" && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-sage border-t-transparent" />
          <span className="ml-3 text-stone text-sm">
            Loading registration...
          </span>
        </div>
      )}
      {status === "error" && (
        <div className="text-center py-8">
          <p className="text-stone text-sm mb-3">
            Registration widget is temporarily unavailable.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="text-sage text-sm font-medium underline"
          >
            Refresh to try again
          </button>
        </div>
      )}
      {/* @ts-expect-error - healcode-widget is a custom element from Mindbody */}
      <healcode-widget
        data-type="registrations"
        data-widget-partner="object"
        data-widget-id="6c172080c984"
        data-widget-version="0"
      />
    </div>
  );
}
