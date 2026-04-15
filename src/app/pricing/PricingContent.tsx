"use client";

import Link from "next/link";
import { Check, ArrowRight, UserPlus } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn"
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const MINDBODY_REGISTER_URL =
  "https://signin.mindbodyonline.com/signin?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DMindbody.BrandedWeb.Legacy%26scope%3Dopenid%2520profile%2520email%2520offline_access%2520Mindbody.Api.Connect%2520Mindbody.Api.Payments%2520Mindbody.Api.Rest%2520Mindbody.Identity.UserGateway%2520Identity.Legacy.Gateway%26response_type%3Dcode%26response_mode%3Dform_post%26subscriberId%3D5752206%26redirect_uri%3Dhttps%253A%252F%252Fcart.mindbodyonline.com%252Fidentity_callback";

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
  },
  {
    name: "Premier Couples Unlimited",
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
  },
  {
    name: "Student Membership",
    price: "$99",
    period: "per month",
    description: "Unlimited monthly access for students with a valid student ID.",
    features: [
      "Unlimited classes",
      "Auto-renews monthly",
      "All class types included",
      "Valid student ID required",
    ],
    cta: "Choose Student",
    note: "Create an account with payment info and email hello@studio1tul.com a photo of your Student ID. DO NOT process another membership as refunds will not be available after purchase.",
  },
  {
    name: "10-Class Pack",
    price: "$180",
    period: "10 classes",
    description: "Flexible option for regular practitioners.",
    features: [
      "10 classes to use anytime",
      "All class types included",
      "Flexible scheduling",
    ],
    cta: "Buy 10 Classes",
  },
  {
    name: "5-Class Pack",
    price: "$100",
    period: "5 classes",
    description: "Great way to get started or stay flexible.",
    features: [
      "5 classes to use anytime",
      "All class types included",
      "Flexible scheduling",
    ],
    cta: "Buy 5 Classes",
  },
  {
    name: "Drop-In",
    price: "$22",
    period: "per class",
    description: "No commitment. Just show up and move.",
    features: [
      "Single class access",
      "All class types included",
      "No membership required",
    ],
    cta: "Drop In",
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

      {/* Pricing Grid */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="mb-4">Membership Options</h2>
            <p className="text-stone max-w-2xl mx-auto">
              Choose the plan that fits your practice and lifestyle.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {pricingOptions.map((option, index) => (
              <StaggerItem key={option.name} className={pricingOptions.length % 2 !== 0 && index === pricingOptions.length - 1 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}>
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

                  {option.note && (
                    <p className="text-pebble text-xs leading-relaxed mb-6">
                      {option.note}
                    </p>
                  )}

                  <button
                    onClick={() =>
                      window.open(
                        MINDBODY_REGISTER_URL,
                        "mindbody-register",
                        "width=500,height=700,scrollbars=yes,resizable=yes"
                      )
                    }
                    className="btn-secondary w-full text-center"
                  >
                    {option.cta}
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Register CTA */}
      <section id="register" className="section-padding bg-cream scroll-mt-24">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mb-4">Create Your Account</h2>
              <p className="text-stone mb-8">
                Sign up to start booking classes at Studio 1.
              </p>
              <button
                onClick={() =>
                  window.open(
                    MINDBODY_REGISTER_URL,
                    "mindbody-register",
                    "width=500,height=700,scrollbars=yes,resizable=yes"
                  )
                }
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage text-white font-medium text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-sage/90 hover:-translate-y-0.5"
              >
                <UserPlus className="w-5 h-5" />
                Register Now
              </button>
              <p className="text-pebble text-sm mt-4">
                Already have an account?{" "}
                <button
                  onClick={() =>
                    window.open(
                      MINDBODY_REGISTER_URL,
                      "mindbody-login",
                      "width=500,height=700,scrollbars=yes,resizable=yes"
                    )
                  }
                  className="text-sage font-medium hover:underline"
                >
                  Log in
                </button>
              </p>
            </div>
          </FadeIn>
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
