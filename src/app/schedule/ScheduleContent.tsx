"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function ScheduleContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <h1 className="mb-6">Class Schedule & Booking</h1>
            <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto">
              Browse upcoming classes and book your spot instantly. All levels
              welcome.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-5xl mx-auto">
              {/* Momence Widget Placeholder */}
              <div className="bg-warm-white border-2 border-dashed border-warm-gray rounded-2xl p-12 md:p-16 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage/10 rounded-full mb-4">
                    <Calendar className="w-8 h-8 text-sage" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Booking System
                  </h2>
                  <p className="text-stone max-w-md mx-auto">
                    Our online booking system is coming soon. For now, please
                    contact us to reserve your spot in class.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <a href="tel:+19185550123" className="btn-primary">
                    Call to Book
                  </a>
                  <Link href="/contact" className="btn-secondary">
                    Contact Us
                  </Link>
                </div>

                <div className="border-t border-warm-gray pt-8">
                  <div className="flex items-center justify-center gap-2 text-stone mb-4">
                    <Clock className="w-5 h-5 text-sage" />
                    <span className="font-medium">Studio Hours</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto text-sm">
                    <div className="flex justify-between">
                      <span className="text-stone">Monday - Friday</span>
                      <span className="text-charcoal font-medium">
                        6:00 AM - 8:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone">Saturday - Sunday</span>
                      <span className="text-charcoal font-medium">
                        8:00 AM - 6:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note about Momence */}
              <div className="mt-8 text-center">
                <p className="text-pebble text-sm">
                  We&apos;re integrating with Momence for seamless online
                  booking. Check back soon for live class scheduling!
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <FadeIn className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Questions About Classes?
            </h2>
            <p className="text-stone mb-6 max-w-xl mx-auto">
              Not sure which class is right for you? Want to know what to bring?
              We&apos;re here to help.
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

      {/* Class Types Preview */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="mb-4">Our Classes</h2>
            <p className="text-stone">
              Something for every body and every level.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
              {["Barre", "TRX", "Pilates", "Yoga"].map((className) => (
                <Link
                  key={className}
                  href="/classes"
                  className="bg-warm-white rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="font-semibold text-charcoal">
                    {className}
                  </span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
