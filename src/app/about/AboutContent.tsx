"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Users, MapPin, Award } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const instructors = [
  {
    name: "Emma Richardson",
    specialty: "Yoga & Meditation",
    bio: "Emma has been teaching yoga for over 10 years, with a focus on vinyasa flow and mindfulness practices. She believes yoga is for every body.",
    image: "/images/instructors/instructor-1.jpg",
  },
  {
    name: "Michael Torres",
    specialty: "TRX & Strength",
    bio: "Michael brings 15 years of fitness experience to Studio 1. His TRX classes challenge you to find strength you didn't know you had.",
    image: "/images/instructors/instructor-2.jpg",
  },
  {
    name: "Sophie Anderson",
    specialty: "Barre",
    bio: "Sophie's barre classes are high-energy and empowering. A former dancer, she brings grace and precision to every movement.",
    image: "/images/instructors/instructor-3.jpg",
  },
  {
    name: "Rachel Kim",
    specialty: "Pilates",
    bio: "Rachel is a certified Pilates instructor with expertise in mat-based Pilates. She focuses on alignment, breath, and controlled movement.",
    image: "/images/instructors/instructor-4.jpg",
  },
  {
    name: "David Chen",
    specialty: "Yoga",
    bio: "David specializes in power yoga and gentle flow. His classes meet you where you are, whether you're a beginner or advanced practitioner.",
    image: "/images/instructors/instructor-5.jpg",
  },
  {
    name: "Amanda Foster",
    specialty: "TRX & HIIT",
    bio: "Amanda's classes are dynamic and fun. She believes fitness should be enjoyable, and her energy is contagious.",
    image: "/images/instructors/instructor-6.jpg",
  },
];

const values = [
  {
    icon: Award,
    title: "Independent",
    description:
      "Locally owned and operated. Not a franchise, not corporate — just a small business built by and for our community.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Relationships over transactions. We know your name, we know your practice, and we genuinely care about your journey.",
  },
  {
    icon: Users,
    title: "All Levels Welcome",
    description:
      "Beginners to advanced, everyone belongs here. Our instructors offer modifications for every body and every ability.",
  },
  {
    icon: MapPin,
    title: "Brookside Rooted",
    description:
      "Part of this neighborhood for over a decade. We're proud to call Tulsa's Brookside our home.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <h1 className="mb-6">Our Story</h1>
            <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto">
              Independently owned. Community driven. Brookside rooted.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Story Section */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden shadow-lg relative aspect-[4/3]">
                <Image
                  src="/images/welcome-home-hero.jpg"
                  alt="Studio 1 community members together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <h2 className="mb-6">From BYB to Studio 1</h2>
              <p className="text-stone leading-relaxed mb-6">
                Balance Yoga Barre built a community in Tulsa&apos;s Brookside
                neighborhood for over a decade. It was more than a studio — it
                was a second home for hundreds of people who found connection,
                strength, and belonging within its walls.
              </p>
              <p className="text-stone leading-relaxed mb-6">
                When BYB merged with the Power Life franchise in January 2026,
                that community was displaced. The teachers who had built
                relationships with their students for years were suddenly part of
                a corporate system. The personal touch that made BYB special was
                at risk of being lost.
              </p>
              <p className="text-stone leading-relaxed mb-8">
                Studio 1 is the answer: same teachers, same space, same
                community — independently owned, not a franchise. We&apos;re
                coming home to what made this place special in the first place.
              </p>
              <Link
                href="/welcome-home"
                className="inline-flex items-center gap-2 text-sage font-medium hover:gap-3 transition-all"
              >
                For Former BYB Members
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
            <h2 className="mb-4">Meet Your Teachers</h2>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              Experienced, passionate instructors who are here to support your
              journey.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {instructors.map((instructor) => (
              <StaggerItem key={instructor.name}>
                <div className="bg-warm-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={instructor.image}
                      alt={`${instructor.name}, ${instructor.specialty} instructor`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-sage text-sm font-medium mb-3">
                      {instructor.specialty}
                    </p>
                    <p className="text-stone text-sm leading-relaxed">
                      {instructor.bio}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <FadeIn className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">What We Believe</h2>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Studio 1.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-warm-white rounded-2xl p-8 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sage/10 rounded-xl mb-4">
                    <value.icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-stone leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="container-custom text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Experience the difference of a studio that puts community first.
              Your first two weeks are just $39.
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
