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
    image: "/images/studio/studio-barre-wall.jpg",
  },
{
    name: "Pilates",
    description:
      "Core-focused movement emphasizing alignment, breath, and controlled movement. Strengthen and lengthen with mat-based Pilates.",
    image: "/images/studio/studio-bridge-legs.jpg",
  },
  {
    name: "Yoga",
    description:
      "From gentle flow to power vinyasa. Find your pace, build strength, and restore balance. Multiple styles offered weekly.",
    image: "/images/studio/studio-warrior-group.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Walking into Studio 1 feels like coming home. I'm always surrounded by familiar faces, friends, and a community that truly supports each other. That sense of connection means everything to me and is what makes Studio 1 so special.",
    author: "Leslie W.",
  },
  {
    quote:
      "The teachers at Studio 1 truly care. They know your name, they know your abilities and how to modify, they know YOU! That's rare.",
    author: "Francie M.",
  },
  {
    quote:
      "I just had knee surgery, finished physical therapy and joined Studio 1. It has been a great way to get my strength back. The classes are incredible and I am seeing great results after just a few weeks! Highly recommend!",
    author: "Deedra Determan",
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
            src="/images/studio/studio-warrior-pose.jpg"
            alt="Warrior pose in Studio 1's bright Center 1 studio"
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
            Barre &middot; Pilates &middot; Yoga
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
            Independently owned boutique fitness in Tulsa&apos;s Center 1
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
              Three ways to move, strengthen, and restore. All levels welcome.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  src="/images/studio/studio-instructor-adjust.jpg"
                  alt="Instructor helping a student with their form at Studio 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" className="order-1 lg:order-2">
              <h2 className="mb-6">More Than a Studio</h2>
              <p className="text-stone leading-relaxed mb-6">
                Studio 1 is a locally owned space rooted in community,
                connection, and intentional movement. Same teachers. Same space.
                Same heart — just a renewed commitment to staying independent
                and community-driven.
              </p>
              <p className="text-stone leading-relaxed mb-8">
                We believe you deserve the freedom to choose how you move, in a
                place that values creativity, personal attention, and truly
                challenging classes. Studio 1 is built by the people who are
                here with you every day — creating an experience that feels
                supportive, focused, and uniquely yours.
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
            <h2 className="mb-4">What Our Community Says About Us</h2>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              Real stories from the people who make Studio 1 special.
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
            src="/images/studio/studio-space-plants.jpg"
            alt="Studio 1's beautiful bright studio space with plants"
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
              it all began — 3509 S Peoria Ave, the heart of Center 1. Same
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
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Your first class is free. Come as you are — we&apos;ll meet you on the mat.
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
