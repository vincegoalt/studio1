"use client";

import { useEffect, useRef, useState } from "react";

export function MindbodyRegistrationWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    if (!containerRef.current) return;
    let timeoutId: ReturnType<typeof setTimeout>;

    // Suppress any healcode errors globally
    const errorHandler = (e: ErrorEvent) => {
      if (
        e.filename?.indexOf("healcode") !== -1 ||
        e.message?.indexOf("healcode") !== -1
      ) {
        e.preventDefault();
        return true;
      }
    };
    window.addEventListener("error", errorHandler);

    // Remove any leftover healcode scripts & globals from prior navigation
    document
      .querySelectorAll('script[src*="healcode"]')
      .forEach((s) => s.remove());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    delete w.HealcodeWidget;
    delete w.healcode;

    // Inject the widget element as raw HTML (NOT as a React element)
    // This prevents React from catching errors thrown by the custom element
    const widgetHost = containerRef.current.querySelector(".hc-host");
    if (widgetHost) {
      widgetHost.innerHTML =
        '<healcode-widget data-type="registrations" data-widget-partner="object" data-widget-id="6c172623c984" data-widget-version="0"></healcode-widget>';
    }

    // Load healcode.js after the element is in the DOM
    const loadTimer = setTimeout(() => {
      const script = document.createElement("script");
      script.src =
        "https://widgets.mindbodyonline.com/javascripts/healcode.js";
      script.async = true;
      script.onload = () => setStatus("ready");
      script.onerror = () => setStatus("error");
      document.body.appendChild(script);
    }, 300);

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
      clearTimeout(loadTimer);
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
      {/* Widget gets injected here via innerHTML, outside React's render tree */}
      <div className="hc-host" />
    </div>
  );
}
