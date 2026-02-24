"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Check, HelpCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const instructors = [
  { name: "Emma Richardson", role: "Yoga" },
  { name: "Michael Torres", role: "TRX" },
  { name: "Sophie Anderson", role: "Barre" },
  { name: "Rachel Kim", role: "Pilates" },
  { name: "David Chen", role: "Yoga" },
  { name: "Amanda Foster", role: "TRX" },
];

const faqs = [
  {
    question: "Is Studio 1 related to Balance Yoga Barre?",
    answer:
      "Studio 1 is the independent continuation of the BYB community. We have the same teachers, many of the same members, and we're returning to the same location at 3509 S Peoria Ave. However, Studio 1 is independently owned and operated — not a franchise. We're committed to keeping our community locally owned and community-focused.",
  },
  {
    question: "Will my favorite instructor be at Studio 1?",
    answer:
      "Most of the BYB instructors have joined Studio 1! Our founding team includes many of the teachers you know and love. We're building a schedule that features familiar faces, and we're always looking to welcome more instructors who share our community-first values.",
  },
  {
    question: "Where is Studio 1 located?",
    answer:
      "We currently have a temporary location in the Center 1 Building above Oren in Brookside. Our permanent home at 3509 S Peoria Ave (the original BYB location) will open on August 1, 2026. Both locations are in the heart of Tulsa's Brookside neighborhood.",
  },
  {
    question: "Do I need to create a new account?",
    answer:
      "Yes, Studio 1 uses a new booking system, so you'll need to create a new account. We know it's an extra step, but it helps us start fresh as an independent studio. The good news? Our Intro Offer ($39 for 2 weeks unlimited) gives you a great way to try us out!",
  },
  {
    question: "What classes will Studio 1 offer?",
    answer:
      "We offer Barre, TRX, Pilates, and Yoga — the same disciplines you loved at BYB. Our class schedule includes a variety of levels and styles, from gentle flow yoga to power vinyasa, from beginner barre to advanced TRX.",
  },
  {
    question: "Will pricing be the same?",
    answer:
      "We've worked hard to keep pricing competitive and accessible. Our Intro Offer is $39 for 2 weeks unlimited — a great way to return to your practice. We offer monthly memberships, class packs, and drop-in options to fit different needs.",
  },
];

export function WelcomeHomeContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              For Former BYB Members
            </div>
            <h1 className="mb-6">Welcome Home, BYB Family</h1>
            <p className="text-lg md:text-xl text-stone max-w-3xl mx-auto">
              We know the BYB closure was tough. Your teachers are here. Your
              community is here. Studio 1 is your home.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Message Section */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden shadow-lg relative aspect-[4/3]">
                <Image
                  src="/images/welcome-home-hero.jpg"
                  alt="Studio 1 community members hugging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <h2 className="mb-6">The Same Heart, A New Name</h2>
              <p className="text-stone leading-relaxed mb-6">
                When Balance Yoga Barre closed its doors, we lost more than a
                studio — we lost our gathering place, our routine, our
                community. But the connections we built over the years
                didn&apos;t disappear. They just needed a new home.
              </p>
              <p className="text-stone leading-relaxed mb-6">
                Studio 1 is that home. Same teachers who know your name and your
                practice. Same members who became friends. Same commitment to
                creating a welcoming space where everyone belongs.
              </p>
              <p className="text-stone leading-relaxed mb-8">
                The only thing that&apos;s changed? We&apos;re now independently
                owned, free from franchise constraints, and fully focused on
                what matters most: our community.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sage font-medium hover:gap-3 transition-all"
              >
                Read Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Your Instructors Are Here</h2>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              The teachers you know and love are back at Studio 1.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto">
            {instructors.map((instructor) => (
              <StaggerItem key={instructor.name}>
                <div className="bg-warm-white rounded-xl p-4 text-center">
                  <p className="font-semibold text-charcoal text-sm">
                    {instructor.name}
                  </p>
                  <p className="text-sage text-xs">{instructor.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="section-padding bg-sage">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome Home Offer
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Come back to your practice with our special Intro Offer for new
                members.
              </p>
              <div className="bg-white/10 rounded-2xl p-8 mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2">
                  2 Weeks Unlimited
                </p>
                <p className="text-5xl md:text-6xl font-bold mb-4">$39</p>
                <ul className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    All class types
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    All instructors
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    No commitment
                  </li>
                </ul>
              </div>
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage font-medium text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5"
              >
                Come Home — Book Your First Class
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-sage/10 rounded-xl mb-4">
              <HelpCircle className="w-6 h-6 text-sage" />
            </div>
            <h2 className="mb-4">Questions?</h2>
            <p className="text-stone max-w-2xl mx-auto">
              Everything you need to know about coming home to Studio 1.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-warm-white rounded-xl px-6 border-none"
                  >
                    <AccordionTrigger className="text-left font-semibold text-charcoal hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-stone pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-sand">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
              Come Home
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto mb-8">
              Your mat is waiting. Your community is waiting. Your teachers are
              waiting. Welcome home.
            </p>
            <Link href="/schedule" className="btn-primary">
              Book Your First Class
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
