"use client";

import { useEffect, useRef, useState } from "react";

export function MindbodyScheduleWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    // Check if widget script already exists (client-side nav scenario)
    const existingScript = document.querySelector(
      'script[src*="brandedweb.mindbodyonline.com/embed/widget.js"]'
    );

    if (existingScript) {
      // Script was loaded on a previous page — force reload for clean init
      existingScript.remove();
      window.location.reload();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://brandedweb.mindbodyonline.com/embed/widget.js";
    script.async = true;
    script.onload = () => {
      setStatus("ready");
    };
    script.onerror = () => {
      setStatus("error");
    };
    document.body.appendChild(script);

    // Fallback timeout
    timeoutId = setTimeout(() => {
      if (
        containerRef.current &&
        !containerRef.current.querySelector("iframe")
      ) {
        setStatus("error");
      }
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {status === "loading" && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-sage border-t-transparent" />
          <span className="ml-3 text-stone text-sm">Loading schedule...</span>
        </div>
      )}
      {status === "error" && (
        <div className="text-center py-8">
          <p className="text-stone text-sm mb-3">
            Schedule widget is temporarily unavailable.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="text-sage text-sm font-medium underline"
          >
            Refresh to try again
          </button>
        </div>
      )}
      <div
        className="mindbody-widget"
        data-widget-type="Schedules"
        data-widget-id="6c47347c984"
      />
    </div>
  );
}
