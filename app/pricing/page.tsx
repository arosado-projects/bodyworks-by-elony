import type { Metadata } from "next";
import { siteConfig } from "../lib/site";

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
      "Extra hands-on time for additional focus during a therapeutic massage session.",
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
      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-500">
              Pricing
            </p>

            <h1 className="mb-6 text-4xl font-light leading-tight text-stone-950 sm:text-5xl">
              Massage pricing that is simple and transparent.
            </h1>

            <p className="text-lg leading-8 text-stone-600">
              Bodyworks By Elony offers personalized massage sessions with clear
              pricing and no membership fees. First-time appointments require
              prepayment when booking.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
              Therapeutic Massage
            </p>

            <h2 className="text-3xl font-light text-stone-950">
              Standard massage sessions
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50">
            <div className="grid grid-cols-3 border-b border-stone-200 bg-stone-100 px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
              <span>Duration</span>
              <span>Single Session</span>
              <span>4 Pack</span>
            </div>

            {massagePricing.map((item) => (
              <div
                key={item.duration}
                className="grid grid-cols-3 border-b border-stone-200 px-6 py-5 last:border-b-0"
              >
                <span className="font-medium text-stone-900">
                  {item.duration}
                </span>
                <span className="text-stone-700">{item.singleSession}</span>
                <span className="text-stone-700">{item.fourPack}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-stone-100 p-6">
            <h3 className="mb-3 text-lg font-medium text-stone-900">
              Package notes
            </h3>

            <p className="leading-7 text-stone-600">
              Four-packs are available for therapeutic massage sessions only.
              Packages expire three months after first use, are shareable, and
              all package sales are final.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 lg:grid-cols-2">
          <article className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
              Prenatal Massage
            </p>

            <h2 className="mb-4 text-3xl font-light text-stone-950">
              75 Minutes
            </h2>

            <p className="mb-6 text-4xl font-light text-stone-900">$160</p>

            <p className="leading-7 text-stone-600">
              Supportive massage for pregnancy, offered with comfort,
              positioning, and care in mind. Prenatal massage is priced
              separately from therapeutic massage packages.
            </p>
          </article>

          <article className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
              Manual Lymphatic Drainage
            </p>

            <h2 className="mb-4 text-3xl font-light text-stone-950">
              Focused MLD sessions
            </h2>

            <div className="mb-6 space-y-4">
              {mldPricing.map((item) => (
                <div
                  key={item.duration}
                  className="flex items-center justify-between border-b border-stone-200 pb-3 last:border-b-0"
                >
                  <span className="font-medium text-stone-900">
                    {item.duration}
                  </span>
                  <span className="text-stone-700">{item.price}</span>
                </div>
              ))}
            </div>

            <p className="leading-7 text-stone-600">
              Manual lymphatic drainage may be booked as a focused session or,
              when appropriate, incorporated into a therapeutic massage as an
              add-on.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
              Add-Ons
            </p>

            <h2 className="mb-4 text-3xl font-light text-stone-950">
              Add focused support to your massage session.
            </h2>

            <p className="leading-8 text-stone-600">
              Select add-ons may be available at checkout. Cupping and manual
              lymphatic drainage are subject to medical review.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {addOns.map((addOn) => (
              <article
                key={addOn.name}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-6"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-medium text-stone-900">
                    {addOn.name}
                  </h3>

                  <div className="text-right">
                    <p className="text-lg font-medium text-stone-900">
                      {addOn.price}
                    </p>
                    <p className="text-sm text-stone-500">{addOn.time}</p>
                  </div>
                </div>

                <p className="leading-7 text-stone-600">
                  {addOn.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
              Complimentary Enhancements
            </p>

            <h2 className="text-3xl font-light leading-tight text-stone-950">
              Comfort-focused enhancements may be included when appropriate.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {enhancements.map((enhancement) => (
              <div
                key={enhancement}
                className="rounded-2xl border border-stone-200 bg-white px-5 py-4 text-stone-700"
              >
                {enhancement}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 lg:grid-cols-3">
          <article className="rounded-3xl bg-white p-6">
            <h2 className="mb-3 text-xl font-medium text-stone-900">
              Payment
            </h2>

            <p className="leading-7 text-stone-600">
              Major credit cards are accepted and preferred. Cash may be accepted for
              returning clients — exact change required. New client appointments 
              require prepayment when booking.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-6">
            <h2 className="mb-3 text-xl font-medium text-stone-900">
              Arrival time
            </h2>

            <p className="leading-7 text-stone-600">
              Please plan to arrive 10 minutes early to allow time for intake
              and undressing to your comfort level, so you can receive your full
              session time.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-6">
            <h2 className="mb-3 text-xl font-medium text-stone-900">
              Policies
            </h2>

            <p className="leading-7 text-stone-600">
              Review cancellation, confirmation, tardiness, and health-related
              policies before booking.
            </p>

            <a
              href="/policies"
              className="mt-4 inline-flex text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700"
            >
              View policies
            </a>
          </article>
        </div>
      </section>

      <section className="bg-stone-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-300">
              Ready to Book?
            </p>

            <h2 className="text-3xl font-light">
              View availability and schedule online through Acuity.
            </h2>
          </div>

          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-200"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </main>
  );
}