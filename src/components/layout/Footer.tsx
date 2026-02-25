"use client";

import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "/classes" },
  { label: "Pricing", href: "/pricing" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

const classLinks = [
  { label: "Barre", href: "/classes" },
  { label: "TRX", href: "/classes" },
  { label: "Pilates", href: "/classes" },
  { label: "Yoga", href: "/classes" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo size="md" light />
            <p className="mt-4 text-pebble text-sm leading-relaxed">
              Your Teachers. Your Community. Your Studio.
              <br />
              Barre &middot; TRX &middot; Pilates &middot; Yoga
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/studio1tul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pebble hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/studio1tul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pebble hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-pebble hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Class Types */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Classes</h4>
            <ul className="space-y-3">
              {classLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-pebble hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-pebble text-sm">
                  3509 S Peoria Ave, 2nd Floor
                  <br />
                  Tulsa, OK 74105
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sage flex-shrink-0" />
                <a
                  href="tel:+19185550123"
                  className="text-pebble hover:text-white transition-colors text-sm"
                >
                  (918) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sage flex-shrink-0" />
                <a
                  href="mailto:hello@studio1tul.com"
                  className="text-pebble hover:text-white transition-colors text-sm"
                >
                  hello@studio1tul.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-pebble text-sm">
              &copy; {new Date().getFullYear()} Studio 1. All rights reserved.
            </p>
            <p className="text-pebble text-sm">
              Independently owned in Tulsa&apos;s Brookside neighborhood
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
