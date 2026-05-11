import type { Metadata } from "next";
import { getBookingUrl, siteConfig } from "../lib/site";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

export const metadata: Metadata = {
  title: "Book an Appointment | Bodyworks By Elony",
  description:
    "Book a massage appointment with Bodyworks By Elony in Cedar Park, TX. Online scheduling is available through the booking page.",
};

const bookingSteps = [
  {
    title: "Choose your service",
    description:
      "Pick the appointment type that sounds closest to what you need. If you are not sure, therapeutic massage is usually the most flexible place to start.",
  },
  {
    title: "Pick a time",
    description:
      "View current availability and choose a time that works for your schedule.",
  },
  {
    title: "Complete intake details",
    description:
      "The booking page will collect the details needed to reserve your appointment and help Elony prepare for your session.",
  },
];

const reminders = [
  "First-time appointments require prepayment when booking.",
  "Please plan to arrive 10 minutes early for intake and undressing to your comfort level.",
  "Cupping and manual lymphatic drainage add-ons are subject to medical review.",
  "If you are unsure what to book, therapeutic massage is usually the most flexible starting point.",
];

export default function BookingPage() {
  return (
    <main>
      <section className="bg-bwe-page">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Booking
            </p>

            <h1 className="mb-6 max-w-3xl text-4xl font-light leading-tight text-bwe-text sm:text-5xl">
              Book a massage appointment online.
            </h1>

            <p className="mb-8 text-lg leading-8 text-bwe-muted">
              Scheduling is handled through the booking page so you can see current
              availability, choose your service, select any available add-ons,
              and reserve your time online. No guessing, no pressure, and no
              membership fees.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={getBookingUrl("booking_hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-bwe-accent-dark px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <span>Continue to Online Booking</span>
                <ExternalLinkIcon />
              </a>

              <a
                href="/services"
                className="rounded-full border border-bwe-border bg-bwe-surface px-6 py-3 text-sm font-medium text-bwe-text transition hover:border-bwe-accent"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-bwe-soft p-6 shadow-sm">
            <div className="rounded-[1.5rem] bg-bwe-surface p-8">
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-bwe-accent-dark">
                Before You Book
              </p>

              <h2 className="mb-4 text-2xl font-light leading-snug text-bwe-text">
                Not sure which massage is right for you?
              </h2>

              <p className="mb-6 leading-7 text-bwe-muted">
                Therapeutic massage is a good fit for many people because it
                can be customized around what is going on that day. Prenatal
                massage and manual lymphatic drainage are more specialized
                options.
              </p>

              <a
                href="/pricing"
                className="text-sm font-medium text-bwe-accent-dark underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
              >
                Review pricing before booking
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bwe-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              How Booking Works
            </p>

            <h2 className="text-3xl font-light text-bwe-text">
              A simple way to save your spot.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {bookingSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-bwe-border bg-bwe-page p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-bwe-soft text-sm font-medium text-bwe-accent-dark">
                  {index + 1}
                </div>

                <h3 className="mb-3 text-xl font-medium text-bwe-text">
                  {step.title}
                </h3>

                <p className="leading-7 text-bwe-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bwe-page">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Helpful Reminders
            </p>

            <h2 className="text-3xl font-light leading-tight text-bwe-text">
              A few details before your appointment.
            </h2>
          </div>

          <div className="rounded-3xl border border-bwe-border bg-bwe-surface p-6 md:p-8">
            <ul className="space-y-4 text-bwe-muted">
              {reminders.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bwe-accent" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/policies"
                className="rounded-full border border-bwe-border bg-bwe-page px-6 py-3 text-sm font-medium text-bwe-text transition hover:border-bwe-accent"
              >
                View Policies
              </a>

              <a
                href="/contact"
                className="rounded-full border border-bwe-border bg-bwe-page px-6 py-3 text-sm font-medium text-bwe-text transition hover:border-bwe-accent"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bwe-soft">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Location
            </p>

            <h2 className="mb-4 text-3xl font-light leading-tight text-bwe-text">
              Massage appointments in Cedar Park, Texas.
            </h2>

            <p className="leading-8 text-bwe-muted">
              Bodyworks By Elony is located in {siteConfig.location.city},{" "}
              {siteConfig.location.zip}, near {siteConfig.location.landmark},
              convenient to northwest Cedar Park, Leander, and Liberty Hill.
            </p>
          </div>

          <div className="rounded-3xl border border-bwe-border bg-bwe-surface p-6 md:p-8">
            <h3 className="mb-3 text-xl font-medium text-bwe-text">
              Questions before booking?
            </h3>

            <p className="mb-6 leading-7 text-bwe-muted">
              Have a question before you choose? Call, text, or email before
              booking and Elony can help you sort through the options.
            </p>

            <div className="grid gap-3 text-bwe-text">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
              >
                {siteConfig.contact.email}
              </a>

              <a
                href={siteConfig.contact.phoneHref}
                className="underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
              >
                Call {siteConfig.contact.phone}
              </a>

              <a
                href={siteConfig.contact.textHref}
                className="underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
              >
                Text {siteConfig.contact.text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bwe-accent-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-soft">
              Ready to Schedule?
            </p>

            <h2 className="text-3xl font-light">
              Ready when you are.
            </h2>
          </div>

          <a
            href={getBookingUrl("booking_final_cta")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-bwe-surface px-6 py-3 text-sm font-medium text-bwe-text transition hover:bg-bwe-soft"
          >
            <span>Continue to Online Booking</span>
            <ExternalLinkIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
