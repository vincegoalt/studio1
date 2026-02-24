import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { offerSchemas } from "@/lib/schemas";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing at Studio 1. Intro Offer: $39 for 2 weeks unlimited. Monthly memberships and class packs available. No hidden fees.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={offerSchemas} />
      <PricingContent />
    </>
  );
}
