import type { Metadata } from "next";
import { getBookingUrl, siteConfig } from "../lib/site";
import BookingLink from "../components/BookingLink";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

export const metadata: Metadata = {
  title: "Contact | Bodyworks By Elony",
  description:
    "Contact Bodyworks By Elony in Cedar Park, TX. Email, call, text, view business hours, or book a massage appointment online.",
};

const contactMethods = [
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "Good for details, questions, or anything easier to write out.",
  },
  {
    label: "Call",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
    description: "Best when you would rather talk through your question.",
  },
  {
    label: "Text",
    value: siteConfig.contact.text,
    href: siteConfig.contact.textHref,
    description: "Helpful for quick scheduling or service questions.",
  },
];

const visitNotes = [
  "Scheduling is handled online through the booking system.",
  "Please plan to arrive 10 minutes early to allow time for intake.",
  "First-time appointments require prepayment when booking.",
  "Cupping and manual lymphatic drainage are subject to medical review.",
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-bwe-page">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Contact
            </p>

            <h1 className="mb-6 max-w-3xl text-4xl font-light leading-tight text-bwe-text sm:text-5xl">
              Questions before booking?
            </h1>

            <p className="mb-8 text-lg leading-8 text-bwe-muted">
              Not sure what to book, or want to ask something before you get on
              the table? Reach out about services, scheduling, prenatal
              massage, manual lymphatic drainage, pediatric massage, or
              anything else you want to understand first.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="rounded-full bg-bwe-accent-dark px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Email Elony
              </a>

            </div>
          </div>

          <div className="rounded-[2rem] bg-bwe-soft p-6 shadow-sm">
            <div className="rounded-[1.5rem] bg-bwe-surface p-8">
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-bwe-accent-dark">
                Location
              </p>

              <h2 className="mb-4 text-2xl font-light leading-snug text-bwe-text">
                Located in Cedar Park, Texas.
              </h2>

              <p className="leading-7 text-bwe-muted">
                Bodyworks By Elony is located in {siteConfig.location.city},{" "}
                {siteConfig.location.zip}, near {siteConfig.location.landmark},
                convenient to Cedar Park, Leander, northwest Austin, and
                Liberty Hill.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bwe-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Contact Options
            </p>

            <h2 className="text-3xl font-light text-bwe-text">
              Call, text, or email in whatever way feels easiest.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactMethods.map((method) => (
              <article
                key={method.label}
                className="rounded-3xl border border-bwe-border bg-bwe-page p-6"
              >
                <h3 className="mb-3 text-xl font-medium text-bwe-text">
                  {method.label}
                </h3>

                <a
                  href={method.href}
                  className="mb-4 block text-bwe-accent-dark underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
                >
                  {method.value}
                </a>

                <p className="leading-7 text-bwe-muted">
                  {method.description}
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
              Business Hours
            </p>

            <h2 className="text-3xl font-light leading-tight text-bwe-text">
              When appointments are available.
            </h2>
          </div>

          <div className="rounded-3xl border border-bwe-border bg-bwe-surface p-6 md:p-8">
            <dl className="grid gap-4">
              {siteConfig.businessHours.display.map((item) => (
                <div
                  key={item.day}
                  className="grid gap-1 border-b border-bwe-border pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[0.4fr_0.6fr]"
                >
                  <dt className="font-medium text-bwe-text">{item.day}</dt>
                  <dd className="text-bwe-muted">{item.hours}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm leading-6 text-bwe-muted">
              {siteConfig.businessHours.note}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bwe-soft">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Before You Visit
            </p>

            <h2 className="text-3xl font-light leading-tight text-bwe-text">
              A few practical notes before you come in.
            </h2>
          </div>

          <div className="rounded-3xl border border-bwe-border bg-bwe-surface p-6 md:p-8">
            <ul className="space-y-4 text-bwe-muted">
              {visitNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bwe-accent" />
                  <span className="leading-7">{note}</span>
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
              Call, text, or book online when you’re ready.
            </h2>
          </div>

          <BookingLink
            href={getBookingUrl()}
            location="contact_cta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-bwe-surface px-6 py-3 text-sm font-medium text-bwe-text transition hover:bg-bwe-soft"
          >
            <span>Book an Appointment</span>
            <ExternalLinkIcon />
          </BookingLink>
        </div>
      </section>
    </main>
  );
}
