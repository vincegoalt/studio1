"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Classes", href: "/classes" },
  { label: "Pricing", href: "/pricing" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useLocalStorage("banner-dismissed", false);
  const [bannerVisible, setBannerVisible] = useState(!isDismissed);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const { isScrolled } = useScrollPosition();
  const pathname = usePathname();


  // Measure banner height
  useEffect(() => {
    if (bannerRef.current && bannerVisible) {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setBannerHeight(entry.contentRect.height);
        }
      });
      observer.observe(bannerRef.current);
      return () => observer.disconnect();
    } else {
      setBannerHeight(0);
    }
  }, [bannerVisible]);

  const handleDismiss = () => {
    setBannerVisible(false);
    setIsDismissed(true);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const totalHeaderHeight = 120 + bannerHeight;

  return (
    <>
      {/* Fixed header container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement Banner */}
        <AnimatePresence>
          {bannerVisible && (
            <motion.div
              ref={bannerRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-sage overflow-hidden"
            >
              <div className="container-custom py-3 flex items-center justify-center relative">
                <Link
                  href="/schedule"
                  className="flex items-center gap-2 text-white text-sm font-medium hover:underline"
                >
                  <span>Now Open in Brookside! Free classes through March 16</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={handleDismiss}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                  aria-label="Dismiss announcement"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navbar */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`transition-all duration-300 bg-cream/95 backdrop-blur-sm ${
            isScrolled ? "shadow-sm" : ""
          }`}
        >
          <nav className="container-custom h-[120px] flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Studio 1 — Barre, TRX, Pilates, Yoga in Tulsa"
                width={120}
                height={120}
                className="h-[120px] w-[120px] rounded-full"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-sage text-charcoal ${
                    pathname === link.href ? "text-sage" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/schedule"
                className="btn-primary"
              >
                Book Now
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 transition-colors text-charcoal"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </motion.header>
      </div>

      {/* Spacer to push content below fixed header */}
      <div style={{ height: totalHeaderHeight }} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div className="absolute right-0 top-0 h-full w-[280px] bg-cream shadow-xl pt-20 px-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 text-lg font-medium border-b border-warm-gray transition-colors hover:text-sage ${
                        pathname === link.href ? "text-sage" : "text-charcoal"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    href="/schedule"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full text-center"
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
