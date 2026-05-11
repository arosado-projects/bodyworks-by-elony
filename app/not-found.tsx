import Link from "next/link";
import { getBookingUrl, siteConfig } from "./lib/site";
import ExternalLinkIcon from "./components/ExternalLinkIcon";

export default function NotFound() {
  return (
    <main className="bg-bwe-page">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
          Page Not Found
        </p>

        <h1 className="mb-6 text-4xl font-light leading-tight text-bwe-text sm:text-5xl">
          Oops — that page isn’t here.
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-bwe-muted">
          The page may have moved, or the link may have been typed incorrectly.
          Let’s get you back to the services or booking page.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex justify-center rounded-full border border-bwe-border bg-bwe-surface px-6 py-3 text-sm font-medium text-bwe-text transition hover:border-bwe-accent"
          >
            View Services
          </Link>

          <a
            href={getBookingUrl("404_page")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-bwe-accent-dark px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            <span>Book an Appointment</span>
            <ExternalLinkIcon />
          </a>
        </div>
      </section>
    </main>
  );
}