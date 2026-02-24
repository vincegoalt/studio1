"use client";

import { MapPin, Car, Clock, Badge } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function LocationContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <h1 className="mb-6">Find Us in Brookside</h1>
            <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto">
              Two locations. One community. In the heart of Tulsa&apos;s
              Brookside neighborhood.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Current Location */}
            <FadeIn direction="left">
              <div className="bg-warm-white rounded-2xl p-8 h-full border-2 border-warm-gray">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="w-5 h-5 text-terracotta" />
                  <span className="inline-flex items-center px-3 py-1 bg-terracotta/10 text-terracotta text-sm font-medium rounded-full">
                    Temporary
                  </span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">
                  Current Location
                </h2>
                <p className="text-stone mb-6">
                  Our home while we prepare the permanent studio.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-charcoal">
                        Center 1 Building
                      </p>
                      <p className="text-stone text-sm">
                        Above Oren, Brookside, Tulsa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-stone text-sm">
                        <span className="font-medium text-charcoal">
                          Mon-Fri:
                        </span>{" "}
                        6:00 AM - 8:00 PM
                      </p>
                      <p className="text-stone text-sm">
                        <span className="font-medium text-charcoal">
                          Sat-Sun:
                        </span>{" "}
                        8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Center+1+Building+Brookside+Tulsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center"
                >
                  Get Directions
                </a>
              </div>
            </FadeIn>

            {/* Permanent Location */}
            <FadeIn direction="right">
              <div className="bg-sage rounded-2xl p-8 h-full text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="w-5 h-5 text-white/80" />
                  <span className="inline-flex items-center px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                    Coming August 1, 2026
                  </span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">
                  Permanent Location
                </h2>
                <p className="text-white/80 mb-6">
                  Our forever home in the heart of Brookside.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">
                        3509 S Peoria Ave, 2nd Floor
                      </p>
                      <p className="text-white/80 text-sm">
                        Tulsa, OK 74105
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/80 text-sm">
                        <span className="font-medium">Mon-Fri:</span> 6:00 AM -
                        8:00 PM
                      </p>
                      <p className="text-white/80 text-sm">
                        <span className="font-medium">Sat-Sun:</span> 8:00 AM -
                        6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=3509+S+Peoria+Ave+Tulsa+OK+74105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-7 py-3.5 bg-white text-sage font-medium text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white/90"
                >
                  Preview Location
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="bg-warm-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-warm-gray flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-sage mx-auto mb-4" />
                    <p className="text-stone mb-2">Google Maps Integration</p>
                    <p className="text-pebble text-sm">
                      3509 S Peoria Ave, Tulsa, OK 74105
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Parking Info */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="mb-4">Parking Information</h2>
            <p className="text-stone max-w-2xl mx-auto">
              Getting to Studio 1 is easy. Here&apos;s what you need to know
              about parking.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-warm-white rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage/10 rounded-xl mb-4">
                  <Car className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-semibold mb-2">Street Parking</h3>
                <p className="text-stone text-sm">
                  Available on Peoria Avenue and surrounding streets.
                </p>
              </div>
              <div className="bg-warm-white rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage/10 rounded-xl mb-4">
                  <Car className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-semibold mb-2">Rear Parking</h3>
                <p className="text-stone text-sm">
                  Additional parking available in the lot behind the building.
                </p>
              </div>
              <div className="bg-warm-white rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage/10 rounded-xl mb-4">
                  <Car className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-semibold mb-2">Free 2-Hour Parking</h3>
                <p className="text-stone text-sm">
                  Available in nearby lots throughout Brookside.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Neighborhood Section */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="container-custom text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Brookside Neighborhood
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Located in the heart of Tulsa&apos;s most walkable neighborhood —
              steps from local shops, restaurants, and cafes. Make your workout
              part of a perfect Brookside day.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
              <span className="px-4 py-2 bg-white/10 rounded-full">
                Local Cafes
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full">
                Boutique Shops
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full">
                Restaurants
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full">
                Walkable Streets
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
