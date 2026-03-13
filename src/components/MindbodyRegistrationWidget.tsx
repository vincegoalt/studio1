"use client";

import Script from "next/script";

export function MindbodyRegistrationWidget() {
  return (
    <>
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
    </>
  );
}
