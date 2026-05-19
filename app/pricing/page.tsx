import type { Metadata } from "next";
import { getBookingUrl } from "../lib/site";
import BookingLink from "../components/BookingLink";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

export const metadata: Metadata = {
  title: "Massage Pricing | Bodyworks By Elony",
  description:
    "View therapeutic massage pricing, prenatal massage pricing, manual lymphatic drainage pricing, packages, and add-ons at Bodyworks By Elony in Cedar Park, TX.",
};

const massagePricing = [
  {
    duration: "1 Hour",
    singleSession: "$100",
    fourPack: "$360",
  },
  {
    duration: "1.5 Hours",
    singleSession: "$150",
    fourPack: "$540",
  },
  {
    duration: "2 Hours",
    singleSession: "$200",
    fourPack: "$720",
  },
];

const mldPricing = [
  {
    duration: "30 Minutes",
    price: "$75",
  },
  {
    duration: "1 Hour",
    price: "$150",
  },
  {
    duration: "1.5 Hours",
    price: "$225",
  },
];

const addOns = [
  {
    name: "Complimentary Cupping",
    price: "$0",
    time: "+0 minutes",
    description: "Integrated into your scheduled massage time when appropriate.",
  },
  {
    name: "Manual Lymphatic Drainage — Integrated",
    price: "$25",
    time: "+0 minutes",
    description:
      "Focused lymphatic work incorporated within your current massage session time.",
  },
  {
    name: "Manual Lymphatic Drainage — Extension",
    price: "$75",
    time: "+30 minutes",
    description:
      "Adds a dedicated half-hour of manual lymphatic drainage to your appointment.",
  },
  {
    name: "30-Minute Time Extension",
    price: "$50",
    time: "+30 minutes",
    description:
      "Bought a 1-hour package, but want to book a 90-minute session? Add extra hands-on time for additional focus during a therapeutic massage session.",
  },
];

const enhancements = [
  "Aromatherapy",
  "Gua Sha",
  "Orbital Buffing",
  "Hypervolt",
  "Table Warmer",
  "Hot Towels",
];

export default function PricingPage() {
  return (
    <main>
      <section className="bg-bwe-page">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Pricing
            </p>

            <h1 className="mb-6 text-4xl font-light leading-tight text-bwe-text sm:text-5xl">
              Massage pricing that is simple and transparent.
            </h1>

            <p className="text-lg leading-8 text-bwe-muted">
              Bodyworks By Elony offers personalized massage sessions with clear
              pricing, no membership fees, and gratuity already included.
              First-time appointments require prepayment when booking.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bwe-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Therapeutic Massage
            </p>

            <h2 className="text-3xl font-light text-bwe-text">
              Customized therapeutic massage sessions
            </h2>
          </div>

          <div className="grid gap-4 sm:hidden">
            {massagePricing.map((item) => (
              <article
                key={item.duration}
                className="rounded-3xl border border-bwe-border bg-bwe-page p-5"
              >
                <div className="border-b border-bwe-border pb-3">
                  <h3 className="text-lg font-medium text-bwe-text">
                    {item.duration}
                  </h3>
                </div>

                <dl className="mt-4 grid gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-sm text-bwe-muted">Single Session</dt>
                    <dd className="font-medium text-bwe-text">
                      {item.singleSession}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-sm text-bwe-muted">4 Pack</dt>
                    <dd className="font-medium text-bwe-text">{item.fourPack}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-3xl border border-bwe-border bg-bwe-page sm:block">
            <div className="grid grid-cols-3 border-b border-bwe-border bg-bwe-soft px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-bwe-accent-dark">
              <span>Duration</span>
              <span>Single Session</span>
              <span>4 Pack</span>
            </div>

            {massagePricing.map((item) => (
              <div
                key={item.duration}
                className="grid grid-cols-3 border-b border-bwe-border px-6 py-5 last:border-b-0"
              >
                <span className="font-medium text-bwe-text">{item.duration}</span>
                <span className="text-bwe-muted">{item.singleSession}</span>
                <span className="text-bwe-muted">{item.fourPack}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-bwe-border bg-bwe-page p-6">
            <h3 className="mb-3 text-lg font-medium text-bwe-text">
              Package notes
            </h3>

            <p className="leading-7 text-bwe-muted">
              Consistent bodywork shouldn't be complicated. Our four-session therapeutic massage packages are perfect for regular care, fully shareable with friends and family, and valid for three months after first use. If life gets in the way and your package expires, you can reactivate it for a small fee. (Package sales are final)
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bwe-page">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 lg:grid-cols-2">
          <article className="rounded-3xl border border-bwe-border bg-bwe-surface p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Prenatal Massage
            </p>

            <h2 className="mb-4 text-3xl font-light text-bwe-text">
              75 Minutes
            </h2>

            <p className="mb-6 text-4xl font-light text-bwe-text">$160</p>

            <p className="leading-7 text-bwe-muted">
              Certified prenatal massage is offered with supportive side-lying
              positioning, careful pacing, and room to adjust for comfort.
              Prenatal massage is priced separately from therapeutic massage
              packages.
            </p>
          </article>

          <article className="rounded-3xl border border-bwe-border bg-bwe-surface p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Manual Lymphatic Drainage
            </p>

            <h2 className="mb-4 text-3xl font-light text-bwe-text">
              Gentle, focused MLD sessions
            </h2>

            <div className="mb-6 space-y-4">
              {mldPricing.map((item) => (
                <div
                  key={item.duration}
                  className="flex items-center justify-between border-b border-bwe-border pb-3 last:border-b-0"
                >
                  <span className="font-medium text-bwe-text">
                    {item.duration}
                  </span>
                  <span className="text-bwe-muted">{item.price}</span>
                </div>
              ))}
            </div>

            <p className="leading-7 text-bwe-muted">
              Manual lymphatic drainage may be booked as a focused session or,
              when appropriate, incorporated into a therapeutic massage as a
              focused add-on.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-bwe-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Add-Ons
            </p>

            <h2 className="mb-4 text-3xl font-light text-bwe-text">
              Add focused support when it makes sense for your session.
            </h2>

            <p className="leading-8 text-bwe-muted">
              Select add-ons may be available at checkout. Cupping and manual
              lymphatic drainage are subject to medical review.
            </p>
          </div>

<div className="grid gap-5 md:grid-cols-2">
  {addOns.map((addOn) => (
    <article
      key={addOn.name}
      className="rounded-3xl border border-bwe-border bg-bwe-page p-6"
    >
      <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-bwe-border pb-5">
        <h3 className="text-xl font-medium leading-snug text-bwe-text">
          {addOn.name}
        </h3>

        <div className="shrink-0 text-right">
          <p className="whitespace-nowrap text-lg font-medium text-bwe-text">
            {addOn.price}
          </p>

          <p className="mt-1 whitespace-nowrap text-sm text-bwe-accent-dark">
            {addOn.time}
          </p>
        </div>
      </div>

      <p className="leading-7 text-bwe-muted">{addOn.description}</p>
    </article>
  ))}
</div>
        </div>
      </section>

      <section className="bg-bwe-soft">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Complimentary Enhancements
            </p>

            <h2 className="text-3xl font-light leading-tight text-bwe-text">
              Comfort-focused enhancements can be part of the plan.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {enhancements.map((enhancement) => (
              <div
                key={enhancement}
                className="rounded-2xl border border-bwe-border bg-bwe-surface px-5 py-4 text-bwe-muted"
              >
                {enhancement}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bwe-page">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 lg:grid-cols-3">
          <article className="rounded-3xl border border-bwe-border bg-bwe-surface p-6">
            <h2 className="mb-3 text-xl font-medium text-bwe-text">
              Payment
            </h2>

            <p className="leading-7 text-bwe-muted">
              Major credit cards are accepted and preferred. Cash may be
              accepted for returning clients, but exact payment is required
              because change is not available. First-time appointments require
              prepayment when booking.
            </p>
          </article>

          <article className="rounded-3xl border border-bwe-border bg-bwe-surface p-6">
            <h2 className="mb-3 text-xl font-medium text-bwe-text">
              Arrival time
            </h2>

            <p className="leading-7 text-bwe-muted">
              Please plan to arrive 10 minutes early to allow time for intake
              and undressing to your comfort level, so you can receive your full
              session time.
            </p>
          </article>

          <article className="rounded-3xl border border-bwe-border bg-bwe-surface p-6">
            <h2 className="mb-3 text-xl font-medium text-bwe-text">
              Policies
            </h2>

            <p className="leading-7 text-bwe-muted">
              Review cancellation, confirmation, tardiness, and health-related
              policies before booking.
            </p>

            <a
              href="/policies"
              className="mt-4 inline-flex text-sm font-medium text-bwe-accent-dark underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
            >
              View policies
            </a>
          </article>
        </div>
      </section>

      <section className="bg-bwe-accent-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-soft">
              Ready to Book?
            </p>

            <h2 className="text-3xl font-light">
              Simple pricing, online booking, no membership pressure.
            </h2>
          </div>

          <BookingLink
            href={getBookingUrl()}
            location="pricing_cta"
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
