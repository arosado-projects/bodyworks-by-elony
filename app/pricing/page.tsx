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
      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Pricing
            </p>

            <h1 className="mb-6 text-4xl font-light leading-tight text-[#292524] sm:text-5xl">
              Massage pricing that is simple and transparent.
            </h1>

            <p className="text-lg leading-8 text-[#6b625c]">
              Bodyworks By Elony offers personalized massage sessions with clear
              pricing and no membership fees. First-time appointments require
              prepayment when booking.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Therapeutic Massage
            </p>

            <h2 className="text-3xl font-light text-[#292524]">
              Standard massage sessions
            </h2>
          </div>

          <div className="grid gap-4 sm:hidden">
            {massagePricing.map((item) => (
              <article
                key={item.duration}
                className="rounded-3xl border border-[#eadfda] bg-[#faf7f2] p-5"
              >
                <div className="border-b border-[#eadfda] pb-3">
                  <h3 className="text-lg font-medium text-[#292524]">
                    {item.duration}
                  </h3>
                </div>

                <dl className="mt-4 grid gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-sm text-[#6b625c]">Single Session</dt>
                    <dd className="font-medium text-[#292524]">
                      {item.singleSession}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-sm text-[#6b625c]">4 Pack</dt>
                    <dd className="font-medium text-[#292524]">{item.fourPack}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-3xl border border-[#eadfda] bg-[#faf7f2] sm:block">
            <div className="grid grid-cols-3 border-b border-[#eadfda] bg-[#f7e8e8] px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-[#8f3f50]">
              <span>Duration</span>
              <span>Single Session</span>
              <span>4 Pack</span>
            </div>

            {massagePricing.map((item) => (
              <div
                key={item.duration}
                className="grid grid-cols-3 border-b border-[#eadfda] px-6 py-5 last:border-b-0"
              >
                <span className="font-medium text-[#292524]">{item.duration}</span>
                <span className="text-[#6b625c]">{item.singleSession}</span>
                <span className="text-[#6b625c]">{item.fourPack}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-[#eadfda] bg-[#faf7f2] p-6">
            <h3 className="mb-3 text-lg font-medium text-[#292524]">
              Package notes
            </h3>

            <p className="leading-7 text-[#6b625c]">
              Four-packs are available for therapeutic massage sessions only. Packages
              expire three months after first use, are shareable, and all package sales are
              final. Expired packages may be reactivated for $10 per hour of remaining
              session time the client wants to use.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Prenatal Massage
            </p>

            <h2 className="mb-4 text-3xl font-light text-[#292524]">
              75 Minutes
            </h2>

            <p className="mb-6 text-4xl font-light text-[#292524]">$160</p>

            <p className="leading-7 text-[#6b625c]">
              Supportive massage for pregnancy, offered with comfort,
              positioning, and care in mind. Prenatal massage is priced
              separately from therapeutic massage packages.
            </p>
          </article>

          <article className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Manual Lymphatic Drainage
            </p>

            <h2 className="mb-4 text-3xl font-light text-[#292524]">
              Focused MLD sessions
            </h2>

            <div className="mb-6 space-y-4">
              {mldPricing.map((item) => (
                <div
                  key={item.duration}
                  className="flex items-center justify-between border-b border-[#eadfda] pb-3 last:border-b-0"
                >
                  <span className="font-medium text-[#292524]">
                    {item.duration}
                  </span>
                  <span className="text-[#6b625c]">{item.price}</span>
                </div>
              ))}
            </div>

            <p className="leading-7 text-[#6b625c]">
              Manual lymphatic drainage may be booked as a focused session or,
              when appropriate, incorporated into a therapeutic massage as an
              add-on.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Add-Ons
            </p>

            <h2 className="mb-4 text-3xl font-light text-[#292524]">
              Add focused support to your massage session.
            </h2>

            <p className="leading-8 text-[#6b625c]">
              Select add-ons may be available at checkout. Cupping and manual
              lymphatic drainage are subject to medical review.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {addOns.map((addOn) => (
              <article
                key={addOn.name}
                className="rounded-3xl border border-[#eadfda] bg-[#faf7f2] p-6"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-medium text-[#292524]">
                    {addOn.name}
                  </h3>

                  <div className="text-right">
                    <p className="text-lg font-medium text-[#292524]">
                      {addOn.price}
                    </p>
                    <p className="text-sm text-[#8f3f50]">{addOn.time}</p>
                  </div>
                </div>

                <p className="leading-7 text-[#6b625c]">
                  {addOn.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7e8e8]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Complimentary Enhancements
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              Comfort-focused enhancements may be included when appropriate.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {enhancements.map((enhancement) => (
              <div
                key={enhancement}
                className="rounded-2xl border border-[#eadfda] bg-[#fffdfc] px-5 py-4 text-[#6b625c]"
              >
                {enhancement}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 lg:grid-cols-3">
          <article className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6">
            <h2 className="mb-3 text-xl font-medium text-[#292524]">
              Payment
            </h2>

            <p className="leading-7 text-[#6b625c]">
              Major credit cards are accepted and preferred. Cash may be
              accepted for returning clients, but exact payment is required
              because change is not available. First-time appointments require
              prepayment when booking.
            </p>
          </article>

          <article className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6">
            <h2 className="mb-3 text-xl font-medium text-[#292524]">
              Arrival time
            </h2>

            <p className="leading-7 text-[#6b625c]">
              Please plan to arrive 10 minutes early to allow time for intake
              and undressing to your comfort level, so you can receive your full
              session time.
            </p>
          </article>

          <article className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6">
            <h2 className="mb-3 text-xl font-medium text-[#292524]">
              Policies
            </h2>

            <p className="leading-7 text-[#6b625c]">
              Review cancellation, confirmation, tardiness, and health-related
              policies before booking.
            </p>

            <a
              href="/policies"
              className="mt-4 inline-flex text-sm font-medium text-[#8f3f50] underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
            >
              View policies
            </a>
          </article>
        </div>
      </section>

      <section className="bg-[#292524] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#f7e8e8]">
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
            className="inline-flex rounded-full bg-[#fffdfc] px-6 py-3 text-sm font-medium text-[#292524] transition hover:bg-[#f7e8e8]"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </main>
  );
}