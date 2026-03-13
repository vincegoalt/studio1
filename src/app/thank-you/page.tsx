import type { Metadata } from "next";
import { ThankYouContent } from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for booking at Studio 1! Here's everything you need to know before your first class at Center 1 in Tulsa.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
