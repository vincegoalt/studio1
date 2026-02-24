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
    name: "Intro Offer",
    price: "$39",
    period: "2 Weeks Unlimited",
    description:
      "The perfect way to explore Studio 1 and find your favorite classes.",
    features: [
      "Unlimited classes for 14 days",
      "All class types included",
      "Perfect for beginners",
      "No commitment required",
    ],
    cta: "Get Started",
    featured: true,
    note: "All new members start with our Intro Offer",
  },
  {
    name: "Monthly Unlimited",
    price: "$XX",
    period: "per month",
    description: "Unlimited access to everything Studio 1 offers.",
    features: [
      "Unlimited classes",
      "Auto-renews monthly",
      "10% off retail",
      "Priority booking",
    ],
    cta: "Choose Monthly",
    featured: false,
  },
  {
    name: "10-Class Pack",
    price: "$XX",
    period: "10 classes",
    description: "Flexible option for regular practitioners.",
    features: [
      "10 classes to use anytime",
      "6-month expiration",
      "Shareable with friends",
      "All class types included",
    ],
    cta: "Buy 10 Classes",
    featured: false,
  },
  {
    name: "5-Class Pack",
    price: "$XX",
    period: "5 classes",
    description: "Great for occasional visitors.",
    features: [
      "5 classes to use anytime",
      "3-month expiration",
      "All class types included",
      "Flexible scheduling",
    ],
    cta: "Buy 5 Classes",
    featured: false,
  },
  {
    name: "Drop-In",
    price: "$XX",
    period: "per class",
    description: "Single class for visitors or occasional practice.",
    features: [
      "Single class access",
      "7-day expiration",
      "Any class type",
      "Book anytime",
    ],
    cta: "Book Drop-In",
    featured: false,
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

      {/* Featured Offer */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-sage rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-white/60" />
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-4">
                  New Members
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Intro Offer
                </h2>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl md:text-6xl font-bold">$39</span>
                </div>
                <p className="text-xl text-white/90 mb-4">
                  2 Weeks Unlimited
                </p>
                <p className="text-white/80 max-w-lg mx-auto mb-8">
                  The perfect way to explore Studio 1 and find your favorite
                  classes. Unlimited access to Barre, TRX, Pilates, and Yoga for
                  14 days.
                </p>
                <ul className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    All class types
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    No commitment
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Perfect for beginners
                  </li>
                </ul>
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage font-medium text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <p className="text-white/60 text-sm mt-4">
                  All new members start with our Intro Offer
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

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {pricingOptions.slice(1).map((option) => (
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
