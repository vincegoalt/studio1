import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { placeSchema } from "@/lib/schemas";
import { LocationContent } from "./LocationContent";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Find Studio 1 in Tulsa's Brookside neighborhood. Current temporary location and our permanent home at 3509 S Peoria Ave. Parking info and neighborhood details.",
  alternates: { canonical: "/location" },
};

export default function LocationPage() {
  return (
    <>
      <JsonLd data={placeSchema} />
      <LocationContent />
    </>
  );
}
