import type { Metadata } from "next";
import { getBookingUrl, siteConfig } from "./lib/site";
import BookingLink from "./components/BookingLink";
import ExternalLinkIcon from "./components/ExternalLinkIcon";
import Testimonials from "./components/Testimonials";

export const metadata: Metadata = {
  title: "Bodyworks By Elony | Massage & Bodywork in Cedar Park, TX",
  description:
    "Calm, personalized massage and bodywork in northwest Cedar Park, TX, near Whitestone & Lakeline, Leander, northwest Austin, and Liberty Hill.",
};

const featuredServices = [
  {
    title: "Therapeutic Massage",
    description:
      "A customized massage built around what your body needs that day, whether that means quiet relaxation, deeper pressure, focused work, or a mix of techniques.",
  },
  {
    title: "Prenatal Massage",
    description:
      "Specialized training in safe, supportive side-lying techniques.",
  },
  {
    title: "Manual Lymphatic Drainage",
    description:
      "Focused lymphatic work using light, intentional techniques. Elony is trained in the Klose/Vodder Technique.",
  },
  {
    title: "Pediatric Massage",
    description:
      "Gentle, age-appropriate massage for children, with parent or guardian involvement every step of the way.",
  },
];

const trustItems = [
  {
    title: "Texas Licensed",
    description: `TDLR Massage Therapy License #${siteConfig.credentials.tdlrLicense}.`,
  },
  {
    title: "MLD Training",
    description: `${siteConfig.credentials.mldTechnique} · ${siteConfig.credentials.mldCertification}.`,
  },
  {
    title: "Certified Prenatal Massage",
    description:
      "Certified prenatal massage using supportive side-lying techniques.",
    note: "For high-risk pregnancies, physician clearance will be requested before prenatal massage.",
  },
];

export default function HomePage() {
  return (
    <main>
<section className="relative overflow-hidden bg-bwe-page">
  <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
    
    {/* --- LEFT COLUMN: Text & Buttons --- */}
    <div>
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
        {siteConfig.name}
      </p>

      <h1 className="mb-6 max-w-3xl text-4xl font-light leading-tight text-bwe-text sm:text-5xl lg:text-6xl">
        Your friendly neighborhood massage therapist in Cedar Park, Texas!
      </h1>

      <div className="mb-8 max-w-2xl">
  <p className="text-lg leading-8 text-bwe-muted">
    Massage and bodywork tailored specifically to your needs. Bodyworks By
    Elony is a safe, inclusive environment for all people, body types,
    abilities, and gender expressions. There are no hidden membership fees, gratuity is always included, and you get your full scheduled session time.
  </p>

  <div className="my-7">
    <p className="text-2xl font-light italic leading-snug text-bwe-text">
      Pain is not a lifestyle.
    </p>
  </div>

  <p className="text-lg leading-8 text-bwe-muted">
    Call, text, or book online when you’re ready to schedule.
  </p>
</div>

      <div className="flex flex-wrap gap-4">
        <BookingLink
          href={getBookingUrl()}
          location="homepage_hero"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-bwe-accent-dark px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          <span>Book an Appointment</span>
          <ExternalLinkIcon />
        </BookingLink>

        <a
          href="/services"
          className="rounded-full border border-bwe-border bg-bwe-surface px-6 py-3 text-sm font-medium text-bwe-text transition hover:border-bwe-accent"
        >
          View Services
        </a>
      </div>
    </div>

    {/* --- RIGHT COLUMN: Hours Card (Hidden on mobile, block on lg screens) --- */}
    <div className="hidden lg:block rounded-[2rem] bg-bwe-soft p-6 shadow-sm">
      <div className="rounded-[1.5rem] bg-bwe-surface p-8">
        <p className="mb-4 text-sm uppercase tracking-[0.18em] text-bwe-accent-dark">
          Service Hours
        </p>

        <h2 className="mb-6 text-2xl font-light leading-snug text-bwe-text">
          Weekly availability.
        </h2>

        <dl className="grid gap-3 text-sm">
          {siteConfig.businessHours.display.map((item) => (
            <div
              key={item.day}
              className="flex items-start justify-between gap-4 border-b border-bwe-border pb-2 last:border-0 last:pb-0"
            >
              <dt className="font-medium text-bwe-text">{item.day}</dt>
              <dd className="text-right text-bwe-muted">{item.hours}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-[11px] leading-5 text-bwe-muted">
          {siteConfig.businessHours.note}
        </p>
      </div>
    </div>

  </div>
</section>

      <section className="bg-bwe-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Services
            </p>

            <h2 className="text-3xl font-light text-bwe-text sm:text-4xl">
              Customized massage for what your body needs.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-bwe-border bg-bwe-page p-6"
              >
                <h3 className="mb-3 text-xl font-medium text-bwe-text">
                  {service.title}
                </h3>

                <p className="leading-7 text-bwe-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/services"
              className="text-sm font-medium text-bwe-accent-dark underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
            >
              Explore all services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-bwe-soft">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              What to Expect
            </p>

            <h2 className="text-3xl font-light text-bwe-text">
              A highly customized experience, tailored to your needs.
            </h2>
          </div>

          <div className="rounded-3xl border border-bwe-border bg-bwe-surface p-6">
            <h3 className="mb-3 text-lg font-medium text-bwe-text">
              Thoughtful intake
            </h3>

            <p className="leading-7 text-bwe-muted">
              Each session starts with a quick check-in about what is going on,
              what areas need attention, and what kind of pressure feels right
              for you that day.
            </p>
          </div>

          <div className="rounded-3xl border border-bwe-border bg-bwe-surface p-6">
            <h3 className="mb-3 text-lg font-medium text-bwe-text">
              Personalized sessions
            </h3>

            <p className="leading-7 text-bwe-muted">
              Pressure, positioning, focus areas, and pace can all be adjusted.
              Your massage should feel like it belongs to you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bwe-page">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
                Training & Care
              </p>

              <h2 className="text-3xl font-light leading-tight text-bwe-text">
                Trained, licensed, and always learning.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {trustItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-bwe-border bg-bwe-surface p-6"
                >
                  <h3 className="mb-3 text-lg font-medium text-bwe-text">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-bwe-muted">
                    {item.description}
                  </p>

                  {item.note ? (
                    <p className="mt-4 border-t border-bwe-border pt-4 text-xs leading-5 text-bwe-muted">
                      {item.note}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

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
            location="homepage_final_cta"
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
