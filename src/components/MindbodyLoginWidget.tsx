"use client";

import Script from "next/script";

export function MindbodyLoginWidget() {
  return (
    <>
      <Script
        src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
        strategy="afterInteractive"
      />
      {/* @ts-expect-error - healcode-widget is a custom element from Mindbody */}
      <healcode-widget
        data-version="0.2"
        data-link-class="healcode-login-register-text-link"
        data-site-id="133438"
        data-mb-site-id="5752206"
        data-bw-identity-site="true"
        data-type="account-link"
        data-inner-html="Login | Register"
      />
    </>
  );
}
