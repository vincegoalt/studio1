"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Thermometer, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const classes = [
  {
    name: "Barre",
    description:
      "Low-impact, high-intensity workout combining ballet-inspired movements, pilates, and light weights. Build long, lean muscle through small, controlled movements that target specific muscle groups.",
    whatToExpect:
      "Each class follows a structured format: warm-up, arm work at the barre, thigh and seat exercises, core work, and cool-down stretch. You'll use light weights, resistance bands, and the barre for support.",
    whoItsFor:
      "Perfect for anyone looking to build strength without high impact. No dance experience required — our instructors guide you through every movement.",
    level: "All Levels Welcome",
    temperature: "72-75°F",
    image: "/images/class-barre.jpg",
  },
  {
    name: "TRX",
    description:
      "Suspension training that uses your body weight for a full-body workout. Build strength, balance, and flexibility with exercises that engage your core with every movement.",
    whatToExpect:
      "Using TRX suspension straps anchored to the wall, you'll perform exercises that leverage gravity and your body weight. Classes include strength circuits, cardio bursts, and core-focused movements.",
    whoItsFor:
      "Great for all fitness levels. The beauty of TRX is that you control the intensity — simply adjust your body position to make exercises easier or more challenging.",
    level: "All Levels Welcome",
    temperature: "72-75°F",
    image: "/images/class-trx.jpg",
  },
  {
    name: "Pilates",
    description:
      "Core-focused movement practice emphasizing alignment, breath, and controlled movement. Strengthen and lengthen muscles while improving posture and body awareness.",
    whatToExpect:
      "Our mat-based Pilates classes use your body weight and small props like resistance bands and Pilates balls for a full-body workout.",
    whoItsFor:
      "Ideal for those seeking low-impact strength building, improved flexibility, and better posture. Excellent for injury prevention and rehabilitation.",
    level: "All Levels Welcome",
    temperature: "85-95°F (heated)",
    image: "/images/class-pilates.jpg",
  },
  {
    name: "Yoga",
    description:
      "From gentle flow to power vinyasa. Find your pace, build strength, and restore balance. Multiple class styles offered weekly to support every stage of your practice.",
    whatToExpect:
      "We offer various yoga styles: Gentle Flow (slow-paced, restorative), Vinyasa (dynamic, breath-linked movement), Power Yoga (strength-focused), and Yin (deep stretching). Each class includes breathwork and meditation.",
    whoItsFor:
      "Whether you're brand new to yoga or have years of experience, we have a class for you. Our instructors offer modifications for every pose.",
    level: "All Levels Welcome",
    temperature: "85-95°F (heated classes available)",
    image: "/images/class-yoga.jpg",
  },
];

export function ClassesContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <h1 className="mb-6">Find Your Practice</h1>
            <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto">
              Four disciplines. One community. Find what moves you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Class Sections */}
      <section className="bg-cream">
        {classes.map((classItem, index) => (
          <div
            key={classItem.name}
            className={`section-padding ${index % 2 === 1 ? "bg-sand" : "bg-cream"}`}
          >
            <div className="container-custom">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <FadeIn
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg relative aspect-[4/3]">
                    <Image
                      src={classItem.image}
                      alt={`${classItem.name} class at Studio 1`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeIn>
                <FadeIn
                  direction={index % 2 === 0 ? "right" : "left"}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <h2 className="mb-4">{classItem.name}</h2>
                  <p className="text-stone leading-relaxed mb-6">
                    {classItem.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">
                        What to Expect
                      </h4>
                      <p className="text-stone text-sm leading-relaxed">
                        {classItem.whatToExpect}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">
                        Who It&apos;s For
                      </h4>
                      <p className="text-stone text-sm leading-relaxed">
                        {classItem.whoItsFor}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-stone">
                      <Users className="w-4 h-4 text-sage" />
                      <span>{classItem.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone">
                      <Thermometer className="w-4 h-4 text-sage" />
                      <span>{classItem.temperature}</span>
                    </div>
                  </div>

                  <Link href="/schedule" className="btn-primary">
                    Book This Class
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="container-custom text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Try them all with our Intro Offer: $39 for 2 weeks of unlimited
              classes. Find the practice that speaks to you.
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
