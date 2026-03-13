"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MindbodyScheduleWidget } from "@/components/MindbodyScheduleWidget";

type ClassEntry = {
  type: "Barre" | "Pilates" | "Yoga";
  instructor: string;
  /** Override time displayed (for Sat/Sun classes at non-standard times) */
  displayTime?: string;
};

type ScheduleSlot = ClassEntry | null;

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const TIME_SLOTS = [
  "5:30 AM",
  "7:00 AM",
  "9:00 AM",
  "12:00 PM",
  "4:30 PM",
  "5:30 PM",
] as const;

// Schedule data derived from the provided image
const schedule: Record<string, Record<string, ScheduleSlot>> = {
  "5:30 AM": {
    Mon: { type: "Barre", instructor: "Angie" },
    Tue: { type: "Barre", instructor: "Brooklyn" },
    Wed: { type: "Pilates", instructor: "Paige" },
    Thu: { type: "Barre", instructor: "Brooklyn" },
    Fri: { type: "Pilates", instructor: "Baillie" },
    Sat: { type: "Barre", instructor: "Ashley D", displayTime: "8:30 AM" },
    Sun: null,
  },
  "7:00 AM": {
    Mon: { type: "Yoga", instructor: "Karina" },
    Tue: { type: "Yoga", instructor: "Brynna" },
    Wed: null,
    Thu: { type: "Yoga", instructor: "Brynna" },
    Fri: null,
    Sat: { type: "Pilates", instructor: "Paige", displayTime: "10:00 AM" },
    Sun: null,
  },
  "9:00 AM": {
    Mon: { type: "Barre", instructor: "Lindsey" },
    Tue: null,
    Wed: { type: "Barre", instructor: "Morgan" },
    Thu: null,
    Fri: { type: "Barre", instructor: "Lila" },
    Sat: null,
    Sun: { type: "Barre", instructor: "Ashley D", displayTime: "9:30 AM" },
  },
  "12:00 PM": {
    Mon: null,
    Tue: { type: "Barre", instructor: "Lila" },
    Wed: null,
    Thu: { type: "Barre", instructor: "Melissa" },
    Fri: null,
    Sat: null,
    Sun: null,
  },
  "4:30 PM": {
    Mon: { type: "Barre", instructor: "Izzy" },
    Tue: { type: "Pilates", instructor: "Maddi" },
    Wed: { type: "Barre", instructor: "Izzy" },
    Thu: { type: "Pilates", instructor: "Maddi" },
    Fri: null,
    Sat: {
      type: "Pilates",
      instructor: "Brooklyn / Angie",
      displayTime: "4:00 PM",
    },
    Sun: null,
  },
  "5:30 PM": {
    Mon: { type: "Barre", instructor: "Angela" },
    Tue: { type: "Barre", instructor: "Angela / Angie" },
    Wed: { type: "Barre", instructor: "Izzy" },
    Thu: { type: "Barre", instructor: "Angela" },
    Fri: null,
    Sat: { type: "Yoga", instructor: "Brynna", displayTime: "5:00 PM" },
    Sun: null,
  },
};

const classColors: Record<ClassEntry["type"], { bg: string; text: string; border: string }> = {
  Barre: { bg: "bg-terracotta/10", text: "text-charcoal", border: "border-terracotta/30" },
  Pilates: { bg: "bg-sage/10", text: "text-charcoal", border: "border-sage/30" },
  Yoga: { bg: "bg-[#D4C5A9]/20", text: "text-charcoal", border: "border-clay/30" },
};

const classDot: Record<ClassEntry["type"], string> = {
  Barre: "bg-terracotta",
  Pilates: "bg-sage",
  Yoga: "bg-clay",
};

function ClassCell({ entry }: { entry: ClassEntry }) {
  const colors = classColors[entry.type];
  return (
    <div
      className={`${colors.bg} ${colors.border} border rounded-lg p-2 text-center h-full flex flex-col justify-center min-h-[60px]`}
    >
      <span className={`text-xs font-semibold uppercase tracking-wide ${colors.text}`}>
        {entry.type}
      </span>
      {entry.displayTime && (
        <span className="text-[11px] text-pebble">{entry.displayTime}</span>
      )}
      {entry.instructor && (
        <span className="text-xs text-stone mt-0.5">{entry.instructor}</span>
      )}
    </div>
  );
}

function MobileClassCard({
  time,
  entry,
}: {
  time: string;
  entry: ClassEntry;
}) {
  const colors = classColors[entry.type];
  const displayedTime = entry.displayTime || time;
  return (
    <div
      className={`${colors.bg} ${colors.border} border rounded-xl p-4 flex items-center gap-4`}
    >
      <div className="text-sm font-medium text-stone w-16 shrink-0">
        {displayedTime}
      </div>
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${classDot[entry.type]}`} />
        <span className="font-semibold text-charcoal text-sm">
          {entry.type}
        </span>
      </div>
      {entry.instructor && (
        <span className="text-sm text-stone ml-auto">{entry.instructor}</span>
      )}
    </div>
  );
}

export function ScheduleContent() {
  return (
    <>
      {/* Mindbody Booking Widget */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sand">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-2xl font-semibold mb-4 text-center">Book a Class</h2>
            <p className="text-stone mb-8 max-w-xl mx-auto text-center">
              Pick a class below to reserve your spot. New to Studio 1?{" "}
              <Link href="/pricing" className="text-sage font-medium hover:underline">
                View our pricing
              </Link>{" "}
              first.
            </p>
            <div className="max-w-4xl mx-auto bg-warm-white rounded-2xl p-4 md:p-8 shadow-sm">
              <MindbodyScheduleWidget />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Class Types Preview */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="mb-4">Not Sure Which Class to Try?</h2>
            <p className="text-stone">
              Learn more about each class type and find the perfect fit for you.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
              {["Barre", "Pilates", "Yoga"].map((className) => (
                <Link
                  key={className}
                  href="/classes"
                  className="bg-warm-white rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="font-semibold text-charcoal">
                    {className}
                  </span>
                </Link>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="text-center mt-8">
            <Link
              href="/classes"
              className="inline-flex items-center gap-2 text-sage font-medium hover:gap-3 transition-all"
            >
              Explore All Classes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Static Schedule Overview */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <FadeIn className="text-center mb-8">
            <h2 className="mb-4">Weekly Schedule at a Glance</h2>
          </FadeIn>

          {/* Legend */}
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-8">
              {(["Barre", "Pilates", "Yoga"] as const).map((type) => (
                <div key={type} className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${classDot[type]}`}
                  />
                  <span className="text-charcoal font-medium">{type}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Desktop Schedule Table */}
          <FadeIn>
            <div className="max-w-6xl mx-auto overflow-x-auto hidden lg:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 text-xs font-semibold uppercase tracking-wider text-pebble text-left w-[100px]">
                      Time
                    </th>
                    {DAYS.map((day) => (
                      <th
                        key={day}
                        className="p-3 text-xs font-semibold uppercase tracking-wider text-pebble text-center"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TIME_SLOTS.map((time) => (
                    <tr key={time} className="border-t border-warm-gray/50">
                      <td className="p-3 text-sm font-medium text-stone whitespace-nowrap align-middle">
                        {time}
                      </td>
                      {DAYS.map((day) => {
                        const entry = schedule[time]?.[day];
                        return (
                          <td key={day} className="p-1.5 align-middle">
                            {entry ? (
                              <ClassCell entry={entry} />
                            ) : (
                              <div className="min-h-[60px]" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Mobile Schedule (day-by-day) */}
          <FadeIn>
            <div className="lg:hidden space-y-8">
              {DAYS.map((day) => {
                const dayClasses = TIME_SLOTS.map((time) => ({
                  time,
                  entry: schedule[time]?.[day] ?? null,
                })).filter(
                  (slot): slot is { time: (typeof TIME_SLOTS)[number]; entry: ClassEntry } =>
                    slot.entry !== null
                );
                if (dayClasses.length === 0) return null;
                return (
                  <div key={day}>
                    <h3 className="text-lg font-semibold text-charcoal mb-3 pb-2 border-b border-warm-gray/50">
                      {
                        {
                          Mon: "Monday",
                          Tue: "Tuesday",
                          Wed: "Wednesday",
                          Thu: "Thursday",
                          Fri: "Friday",
                          Sat: "Saturday",
                          Sun: "Sunday",
                        }[day]
                      }
                    </h3>
                    <div className="space-y-2">
                      {dayClasses.map(({ time, entry }) => (
                        <MobileClassCard
                          key={time}
                          time={time}
                          entry={entry}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
