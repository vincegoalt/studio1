import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Studio 1. Questions about classes, pricing, or memberships? We'd love to hear from you. Call, email, or visit us in Tulsa's Brookside.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
