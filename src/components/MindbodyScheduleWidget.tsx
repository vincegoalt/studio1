"use client";

import Script from "next/script";

export function MindbodyScheduleWidget() {
  return (
    <>
      <div
        className="mindbody-widget"
        data-widget-type="Schedules"
        data-widget-id="6c47347c984"
      />
      <Script
        src="https://brandedweb.mindbodyonline.com/embed/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
