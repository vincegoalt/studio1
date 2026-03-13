import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";

export const metadata: Metadata = {
  title: {
    absolute: "Studio 1 — Barre, Pilates & Yoga in Tulsa's Center 1",
  },
  description:
    "Studio 1 — Your Teachers. Your Community. Your Studio. Boutique fitness in Tulsa's Center 1 offering Barre, Pilates & Yoga. Independently owned, not a franchise.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
