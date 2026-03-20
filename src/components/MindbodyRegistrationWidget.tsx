"use client";

import { useEffect, useRef, useState } from "react";

export function MindbodyRegistrationWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    function loadWidget() {
      // If the script is already on the page, remove it so it re-initializes
      const existingScript = document.querySelector(
        'script[src="https://widgets.mindbodyonline.com/javascripts/healcode.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js";
      script.async = true;
      script.onload = () => {
        setStatus("ready");
      };
      script.onerror = () => {
        setStatus("error");
      };
      document.body.appendChild(script);

      // Fallback: if widget hasn't rendered after 10s, show error
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
    }

    loadWidget();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {status === "loading" && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-sage border-t-transparent" />
          <span className="ml-3 text-stone text-sm">Loading registration...</span>
        </div>
      )}
      {status === "error" && (
        <div className="text-center py-8">
          <p className="text-stone text-sm mb-3">
            Registration widget is temporarily unavailable.
          </p>
          <button
            onClick={() => {
              setStatus("loading");
              window.location.reload();
            }}
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
