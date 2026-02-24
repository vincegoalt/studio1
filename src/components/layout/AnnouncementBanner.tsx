"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";

export function AnnouncementBanner() {
  const [isDismissed, setIsDismissed] = useLocalStorage("banner-dismissed", false);
  const [isVisible, setIsVisible] = useState(!isDismissed);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
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
  );
}
