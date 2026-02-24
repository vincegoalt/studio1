import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { personSchemas } from "@/lib/schemas";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Studio 1's story. Independently owned boutique fitness studio in Tulsa's Brookside. Same teachers, same community, new name. Barre, TRX, Pilates & Yoga.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchemas} />
      <AboutContent />
    </>
  );
}
