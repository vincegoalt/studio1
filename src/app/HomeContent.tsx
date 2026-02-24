"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const classTypes = [
  {
    name: "Barre",
    description:
      "Low-impact, high-intensity workout combining ballet-inspired movements with pilates and light weights. Build long, lean muscle.",
    image: "/images/class-barre.jpg",
  },
  {
    name: "TRX",
    description:
      "Suspension training using your body weight for a full-body workout. Build strength, balance, and flexibility with modifications for every level.",
    image: "/images/class-trx.jpg",
  },
  {
    name: "Pilates",
    description:
      "Core-focused movement emphasizing alignment, breath, and controlled movement. Strengthen and lengthen with mat and reformer options.",
    image: "/images/class-pilates.jpg",
  },
  {
    name: "Yoga",
    description:
      "From gentle flow to power vinyasa. Find your pace, build strength, and restore balance. Multiple styles offered weekly.",
    image: "/images/class-yoga.jpg",
  },
];

const testimonials = [
  {
    quote:
      "After BYB closed, I thought I'd lost my community. Studio 1 brought us all back together. It feels like coming home.",
    author: "Sarah M.",
    detail: "Member since 2019",
  },
  {
    quote:
      "The teachers here truly care. They know your name, they know your practice, they know you. That's rare.",
    author: "Jennifer K.",
    detail: "Member since 2021",
  },
  {
    quote:
      "Finally, a boutique studio in Brookside that isn't a franchise. The energy here is completely different — warm, welcoming, real.",
    author: "Michelle T.",
    detail: "Member since 2024",
  },
];

export function HomeContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero-yoga.jpg"
            alt="Yoga class in a warm, inviting studio with natural light"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 container-custom text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="text-sm uppercase tracking-[0.2em] mb-4 text-white/80"
          >
            Barre &middot; TRX &middot; Pilates &middot; Yoga
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
          >
            Your Teachers.
            <br />
            Your Community.
            <br />
            Your Studio.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Independently owned boutique fitness in Tulsa&apos;s Brookside
            neighborhood.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/schedule"
              className="btn-primary bg-white text-sage hover:bg-white/90"
            >
              Book Your First Class
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 text-white font-medium hover:underline"
            >
              View Schedule
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Class Types Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Find Your Practice</h2>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              Four ways to move, strengthen, and restore. All levels welcome.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {classTypes.map((classType) => (
              <StaggerItem key={classType.name}>
                <div className="group bg-warm-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={classType.image}
                      alt={`${classType.name} class at Studio 1`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {classType.name}
                    </h3>
                    <p className="text-stone text-sm leading-relaxed mb-4">
                      {classType.description}
                    </p>
                    <Link
                      href="/classes"
                      className="inline-flex items-center gap-1 text-sage font-medium text-sm hover:gap-2 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg relative aspect-[4/3]">
                <Image
                  src="/images/about-studio.jpg"
                  alt="Instructor helping a student with yoga pose"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" className="order-1 lg:order-2">
              <h2 className="mb-6">More Than a Studio</h2>
              <p className="text-stone leading-relaxed mb-6">
                Studio 1 is the independent continuation of Tulsa&apos;s beloved
                yoga community. Same teachers. Same space. Same heart — just a
                new name and a commitment to keeping our community locally owned,
                not franchise-operated.
              </p>
              <p className="text-stone leading-relaxed mb-8">
                When Balance Yoga Barre merged with a national franchise, our
                community was displaced. Studio 1 is the answer: a return to
                what made BYB special, independently run by the people who built
                it.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sage font-medium hover:gap-3 transition-all"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">What Our Community Says</h2>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              Real stories from real members who found their home at Studio 1.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.author}>
                <div className="bg-sand rounded-xl p-8 h-full">
                  <Quote className="w-8 h-8 text-sage mb-4" />
                  <p className="text-charcoal leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-charcoal">
                      {testimonial.author}
                    </p>
                    <p className="text-pebble text-sm">{testimonial.detail}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Coming Home Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/coming-home.jpg"
            alt="Brookside neighborhood building"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.2em] mb-4 text-white/80">
              August 1, 2026
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We&apos;re Coming Home
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              After months in our temporary space, we&apos;re returning to where
              it all began — 3509 S Peoria Ave, the heart of Brookside. Same
              address, same community, same love. Just coming home.
            </p>
            <Link
              href="/location"
              className="inline-flex items-center gap-2 text-white font-medium hover:underline"
            >
              Learn About Our Move
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="container-custom text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Roll Out Your Mat?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-4">
              Start with our Intro Offer:{" "}
              <span className="font-semibold">$39 for 2 weeks</span> of
              unlimited classes.
            </p>
            <p className="text-white/70 mb-10">
              No commitment, just movement. New members only.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage font-medium text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
