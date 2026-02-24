import type { Metadata } from "next";
import { ScheduleContent } from "./ScheduleContent";

export const metadata: Metadata = {
  title: "Schedule & Booking",
  description:
    "Browse upcoming classes and book your spot instantly at Studio 1. Barre, TRX, Pilates, and Yoga classes in Tulsa's Brookside. All levels welcome.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  return <ScheduleContent />;
}
