import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { courseSchemas } from "@/lib/schemas";
import { ClassesContent } from "./ClassesContent";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Find your practice at Studio 1. Barre, Pilates, and Yoga classes in Tulsa's Center 1. All levels welcome. Book your first class today.",
  alternates: { canonical: "/classes" },
};

export default function ClassesPage() {
  return (
    <>
      <JsonLd data={courseSchemas} />
      <ClassesContent />
    </>
  );
}
