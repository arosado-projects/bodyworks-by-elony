import Link from "next/link";
import { getBookingUrl, siteConfig } from "./lib/site";
import ExternalLinkIcon from "./components/ExternalLinkIcon";

export default function NotFound() {
  return (
    <main className="bg-[#faf7f2]">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
          Page Not Found
        </p>

        <h1 className="mb-6 text-4xl font-light leading-tight text-[#292524] sm:text-5xl">
          Oops — that page isn’t here.
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-[#6b625c]">
          The page may have moved, or the link may have been typed incorrectly.
          Let’s get you back to the services or booking page.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex justify-center rounded-full border border-[#eadfda] bg-[#fffdfc] px-6 py-3 text-sm font-medium text-[#292524] transition hover:border-[#d98c9b]"
          >
            View Services
          </Link>

          <a
            href={getBookingUrl("404_page")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8f3f50] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            <span>Book an Appointment</span>
            <ExternalLinkIcon />
          </a>
        </div>
      </section>
    </main>
  );
}