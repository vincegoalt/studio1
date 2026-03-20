"use client";

import { useEffect } from "react";

export default function PricingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Pricing page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <h1 className="text-2xl font-bold text-charcoal mb-4">
          Something went wrong
        </h1>
        <p className="text-stone mb-6">
          This page had trouble loading. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="btn-primary mr-3"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="btn-secondary"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}
