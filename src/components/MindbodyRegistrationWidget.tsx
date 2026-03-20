"use client";

import Script from "next/script";
import { Component, type ReactNode } from "react";

class WidgetErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <p className="text-stone text-sm text-center py-4">
          Registration widget is temporarily unavailable. Please refresh or{" "}
          <a href="/contact" className="text-sage underline">contact us</a>.
        </p>
      );
    }
    return this.props.children;
  }
}

export function MindbodyRegistrationWidget() {
  return (
    <WidgetErrorBoundary>
      <Script
        src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
        strategy="afterInteractive"
      />
      {/* @ts-expect-error - healcode-widget is a custom element from Mindbody */}
      <healcode-widget
        data-type="registrations"
        data-widget-partner="object"
        data-widget-id="6c172080c984"
        data-widget-version="0"
      />
    </WidgetErrorBoundary>
  );
}
