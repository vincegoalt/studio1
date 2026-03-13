"use client";

import Link from "next/link";
import { CheckCircle, MapPin, Clock, Shirt, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const tips = [
  {
    icon: Clock,
    title: "Arrive Early",
    description:
      "Plan to arrive 10–15 minutes before class starts so you can settle in, meet your instructor, and find your spot.",
  },
  {
    icon: Shirt,
    title: "What to Wear",
    description:
      "Comfortable, form-fitting workout clothes work best. Grip socks are recommended for barre and pilates (we have some if you need them).",
  },
  {
    icon: MapPin,
    title: "Find Us",
    description:
      "We're located in the Center 1 Building, above Oren. Street parking and rear lot parking are both available.",
  },
];

export function ThankYouContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sage/10 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-sage" />
            </div>
            <h1 className="mb-6">You&apos;re All Set!</h1>
            <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto">
              Your class is booked. We can&apos;t wait to see you on the mat.
              Here&apos;s everything you need to know before your first visit.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="mb-4">Before You Arrive</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {tips.map((tip) => (
              <StaggerItem key={tip.title}>
                <div className="bg-warm-white rounded-2xl p-8 h-full text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sage/10 rounded-xl mb-4">
                    <tip.icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-center mb-8">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Check In
                    </h3>
                    <p className="text-stone text-sm leading-relaxed">
                      When you arrive, let the front desk know your name. We&apos;ll
                      get you checked in and show you around.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Set Up Your Space
                    </h3>
                    <p className="text-stone text-sm leading-relaxed">
                      Grab a mat and any props you need. Your instructor will help
                      you get set up if it&apos;s your first time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Move at Your Pace
                    </h3>
                    <p className="text-stone text-sm leading-relaxed">
                      Every class is all-levels. Your instructor offers
                      modifications throughout — go at your own pace and enjoy
                      the experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="container-custom text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Anything Else?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Explore our class types, check the full schedule, or get in touch
              if you have any questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage font-medium text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5"
              >
                View Full Schedule
              </Link>
              <Link
                href="/classes"
                className="inline-flex items-center gap-2 text-white font-medium hover:underline"
              >
                Explore Classes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
