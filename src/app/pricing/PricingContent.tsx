"use client";

import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const pricingOptions = [
  {
    name: "Monthly Unlimited",
    price: "$129",
    period: "per month",
    description: "Unlimited access to everything Studio 1 offers.",
    features: [
      "Unlimited classes",
      "Auto-renews monthly",
      "All class types included",
      "Priority booking",
    ],
    cta: "Choose Monthly",
    promo: "Join by April 1 — first 3 months $99/mo",
  },
  {
    name: "Couples Unlimited",
    price: "$189",
    period: "per month",
    description: "Unlimited access for two people in the same household.",
    features: [
      "Two memberships, one price",
      "Unlimited classes for both",
      "Auto-renews monthly",
      "Same household required",
    ],
    cta: "Choose Couples",
    promo: "Join by April 1 — first 3 months $159/mo",
  },
  {
    name: "Student",
    price: "$99",
    period: "per month",
    description: "Unlimited classes at a student-friendly price.",
    features: [
      "Unlimited classes",
      "Auto-renews monthly",
      "All class types included",
      "Valid student ID required",
    ],
    cta: "Choose Student",
    promo: "Join by April 1 — first 3 months $79/mo",
  },
  {
    name: "10-Class Pack",
    price: "$180",
    period: "10 classes",
    description: "Flexible option for regular practitioners.",
    features: [
      "10 classes to use anytime",
      "90-day expiration",
      "All class types included",
      "Flexible scheduling",
    ],
    cta: "Buy 10 Classes",
  },
];

export function PricingContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <h1 className="mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto">
              No hidden fees. No surprises. Just movement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Launch Promo */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-sage rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-white/60" />
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-4">
                  Grand Opening Special
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join by April 1
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  Lock in reduced rates for your first 3 months
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
                  <div>
                    <p className="text-2xl font-bold">$99<span className="text-base font-normal">/mo</span></p>
                    <p className="text-white/70 text-sm">Monthly Unlimited</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">$159<span className="text-base font-normal">/mo</span></p>
                    <p className="text-white/70 text-sm">Couples Unlimited</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">$79<span className="text-base font-normal">/mo</span></p>
                    <p className="text-white/70 text-sm">Student</p>
                  </div>
                </div>
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage font-medium text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <p className="text-white/60 text-sm mt-4">
                  Promo rates apply to your first 3 months of membership
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="mb-4">Membership Options</h2>
            <p className="text-stone max-w-2xl mx-auto">
              Choose the plan that fits your practice and lifestyle.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {pricingOptions.map((option) => (
              <StaggerItem key={option.name}>
                <div className="bg-warm-white rounded-2xl p-8 h-full flex flex-col border-2 border-transparent hover:border-sage/20 transition-all duration-300">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {option.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-bold text-charcoal">
                        {option.price}
                      </span>
                      <span className="text-stone">{option.period}</span>
                    </div>
                    <p className="text-stone text-sm">{option.description}</p>
                    {option.promo && (
                      <p className="text-sage text-sm font-medium mt-2">
                        {option.promo}
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                        <span className="text-stone">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/schedule"
                    className="btn-secondary w-full text-center"
                  >
                    {option.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Note */}
      <section className="py-16 bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <p className="text-stone mb-4">
              Have questions about our pricing or memberships?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sage font-medium hover:gap-3 transition-all"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
