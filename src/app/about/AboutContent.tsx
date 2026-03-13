"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Users, MapPin, Award } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const instructors = [
  {
    name: "Angela Strode",
    specialty: "Barre",
    image: "/images/instructors/angela-strode.jpg",
  },
  {
    name: "Angie Schniers",
    specialty: "Barre & Pilates",
    image: "/images/instructors/angie-schniers.jpg",
  },
  {
    name: "Ashley Dawkins",
    specialty: "Barre",
    image: "/images/instructors/ashley-dawkins.jpg",
  },
  {
    name: "Baillie Moeller",
    specialty: "Pilates",
    image: "/images/instructors/baillie-moeller.jpg",
  },
  {
    name: "Brooklyn Mason",
    specialty: "Barre & Pilates",
    image: "/images/instructors/brooklyn-mason.jpg",
  },
  {
    name: "Brynna Tunnell",
    specialty: "Yoga",
    image: "/images/instructors/brynna-tunnell.jpg",
  },
  {
    name: "Izzy Aston",
    specialty: "Barre",
    image: "/images/instructors/izzy-aston.jpg",
  },
  {
    name: "Lila Halliwell",
    specialty: "Barre",
    image: "/images/instructors/lila-halliwell.jpg",
  },
  {
    name: "Melissa Cedja",
    specialty: "Barre",
    image: "/images/instructors/melissa-cedja.jpg",
  },
  {
    name: "Paige Patrzykont",
    specialty: "Pilates",
    image: "/images/instructors/paige-patrzykont.jpg",
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
    title: "Center 1 Rooted",
    description:
      "Part of this neighborhood for over a decade. We're proud to call Tulsa's Center 1 our home.",
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
              Independently owned. Community driven. Center 1 rooted.
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
                  src="/images/studio/studio-group-hug.jpg"
                  alt="Studio 1 community members together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <h2 className="mb-6">The Beginning of Studio 1</h2>
              <p className="text-stone leading-relaxed mb-6">
                Studio 1 began with a simple idea: create a space where
                movement feels personal, welcoming, and real.
              </p>
              <p className="text-stone leading-relaxed mb-6">
                We are a locally owned studio built by a group of experienced
                instructors who love to teach and believe every class should
                feel thoughtful, creative, and energizing. Our approach is
                rooted in expertise, but it&apos;s also shaped by
                connection&mdash;because the best workouts happen when people
                feel comfortable, supported, and inspired.
              </p>
              <p className="text-stone leading-relaxed mb-6">
                At Studio 1, no two classes are exactly the same. Our
                instructors bring their own style, training, and personality
                to every session, creating a dynamic experience that keeps you
                challenged and engaged.
              </p>
              <p className="text-stone leading-relaxed mb-6">
                More than anything, Studio 1 is about community. It&apos;s a
                place where people show up for themselves and for each other.
                Friendships form, encouragement is shared, and movement becomes
                something you look forward to.
              </p>
              <p className="text-stone leading-relaxed mb-2 font-medium text-charcoal">
                This is more than a workout.
              </p>
              <p className="text-stone leading-relaxed mb-4 font-medium text-charcoal">
                It&apos;s a space to move, connect, and belong.
              </p>
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

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {instructors.map((instructor) => (
              <StaggerItem key={instructor.name}>
                <div className="bg-warm-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <Image
                      src={instructor.image}
                      alt={`${instructor.name}, ${instructor.specialty} instructor at Studio 1`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-semibold mb-0.5">
                      {instructor.name}
                    </h3>
                    <p className="text-sage text-xs font-medium">
                      {instructor.specialty}
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
              Join by April 1 for reduced rates on your first 3 months.
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
