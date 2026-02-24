import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schemas";
import { WelcomeHomeContent } from "./WelcomeHomeContent";

export const metadata: Metadata = {
  title: "Welcome Home, BYB Family",
  description:
    "Former Balance Yoga Barre members, welcome home to Studio 1. Same teachers, same community, independently owned. Your teachers are here. Your community is here.",
  alternates: { canonical: "/welcome-home" },
};

export default function WelcomeHomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WelcomeHomeContent />
    </>
  );
}
