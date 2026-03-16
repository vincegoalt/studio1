import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { offerSchemas } from "@/lib/schemas";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing at Studio 1. Monthly Unlimited $129/mo, Premier Couples $189/mo. 10-class packs, 5-class packs, and drop-ins available. Join by April 1 for reduced launch rates. Center 1, Tulsa.",
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
