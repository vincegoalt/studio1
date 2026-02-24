import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-cream">
      <div className="container-custom text-center py-20">
        <h1 className="text-6xl md:text-8xl font-bold text-sage mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="text-stone text-lg max-w-md mx-auto mb-8">
          Looks like this page took a different path. Let&apos;s get you back on
          your mat.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/schedule" className="btn-secondary">
            View Schedule
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/classes" className="text-sage hover:underline">
            Classes
          </Link>
          <Link href="/pricing" className="text-sage hover:underline">
            Pricing
          </Link>
          <Link href="/about" className="text-sage hover:underline">
            About
          </Link>
          <Link href="/location" className="text-sage hover:underline">
            Location
          </Link>
          <Link href="/contact" className="text-sage hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
