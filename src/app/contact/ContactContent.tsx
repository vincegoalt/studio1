"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Send,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with Formspree or Resend integration
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cream">
        <div className="container-custom text-center">
          <FadeIn>
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto">
              Questions? We&apos;d love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <FadeIn direction="left">
              <div className="bg-warm-white rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-sage/10 rounded-full mb-4">
                      <Send className="w-8 h-8 text-sage" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-stone">
                      Thank you for reaching out. We&apos;ll get back to you
                      soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-charcoal">
                        Name <span className="text-terracotta">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 bg-white border-warm-gray focus:border-sage focus:ring-sage"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-charcoal">
                        Email <span className="text-terracotta">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 bg-white border-warm-gray focus:border-sage focus:ring-sage"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-charcoal">
                        Phone <span className="text-pebble">(optional)</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 bg-white border-warm-gray focus:border-sage focus:ring-sage"
                        placeholder="(918) 555-0123"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-charcoal">
                        Message <span className="text-terracotta">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 bg-white border-warm-gray focus:border-sage focus:ring-sage min-h-[120px]"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-sage/10 rounded-lg flex-shrink-0">
                        <MapPin className="w-5 h-5 text-sage" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Address</p>
                        <p className="text-stone">
                          3509 S Peoria Ave, 2nd Floor
                          <br />
                          Tulsa, OK 74105
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-sage/10 rounded-lg flex-shrink-0">
                        <Phone className="w-5 h-5 text-sage" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Phone</p>
                        <a
                          href="tel:+19185550123"
                          className="text-stone hover:text-sage transition-colors"
                        >
                          (918) 555-0123
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-sage/10 rounded-lg flex-shrink-0">
                        <Mail className="w-5 h-5 text-sage" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Email</p>
                        <a
                          href="mailto:hello@studio1tul.com"
                          className="text-stone hover:text-sage transition-colors"
                        >
                          hello@studio1tul.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-sage/10 rounded-lg flex-shrink-0">
                        <Clock className="w-5 h-5 text-sage" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">
                          Studio Hours
                        </p>
                        <p className="text-stone">
                          Monday - Friday: 6:00 AM - 8:00 PM
                          <br />
                          Saturday - Sunday: 8:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-charcoal mb-4">Follow Us</p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://instagram.com/studio1tul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-sage/10 rounded-lg text-sage hover:bg-sage hover:text-white transition-all"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com/studio1tul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-sage/10 rounded-lg text-sage hover:bg-sage hover:text-white transition-all"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quick Response */}
      <section className="py-16 bg-sand">
        <div className="container-custom text-center">
          <FadeIn>
            <p className="text-stone">
              We typically respond within 24 hours. For immediate assistance,
              please call us at{" "}
              <a
                href="tel:+19185550123"
                className="text-sage font-medium"
              >
                (918) 555-0123
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
