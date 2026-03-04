import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { offerSchemas } from "@/lib/schemas";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing at Studio 1. Monthly Unlimited $129/mo, Couples $189/mo, Student $99/mo. 10-class packs available. Join by April 1 for reduced launch rates. Brookside, Tulsa.",
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
