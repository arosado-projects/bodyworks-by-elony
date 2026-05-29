import type { Metadata } from "next";
import { getBookingUrl, siteConfig } from "../lib/site";
import BookingLink from "../components/BookingLink";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

export const metadata: Metadata = {
  title: "Massage Services | Bodyworks By Elony",
  description:
    "Explore therapeutic massage, prenatal massage, manual lymphatic drainage, pediatric massage, and massage enhancements at Bodyworks By Elony in Cedar Park, TX.",
};

const services = [
  {
    title: "Therapeutic Massage",
    eyebrow: "Customized massage sessions",
    description:
      "A therapeutic massage session is built around what is going on with your body that day. It may include quiet relaxation, deeper pressure, trigger point work, stretching, or focused bodywork, depending on your goals and comfort.",
    goodFor: [
      "General tension and stress",
      "Chronic pain",
      "Relaxation",
      "Focused bodywork",
    ],
  },
  {
    title: "Prenatal Massage",
    eyebrow: "Supportive pregnancy massage",
    description:
      "Certified prenatal massage is offered with supportive side-lying positioning and room to adjust for comfort. The session stays centered on what your body can comfortably receive that day.",
    goodFor: [
      "Relief from pregnancy discomfort",
      "Safe side-lying positioning",
      "Customized pressure",
      "Relaxation",
    ],
  },
  {
    title: "Manual Lymphatic Drainage",
    eyebrow: `${siteConfig.credentials.mldTechnique} · ${siteConfig.credentials.mldCertification}`,
    description:
      "Manual lymphatic drainage is a gentle, focused technique that uses light, intentional stretching movements to stimulate lymph flow. Elony is trained in the Klose/Vodder Technique and is a Certified Manual Lymphatic Drainage Therapist. Clients often seek MLD for post-op support when medically cleared, general swelling, and facial puffiness or swelling related to allergies. Focused MLD may also be incorporated into a standard massage session, such as using part of a 60-minute appointment for lymphatic work.",
    goodFor: [
      "Expedite post-surgery recovery",
      "Improve auto-immune conditions",
      "Improve pregnancy edema",
      "Reducing sinus congestion",
      "Accelerate recovery of swollen tissue from injury/sprain",
      "Focused MLD within a longer massage session",
    ],
  },
  {
    title: "Massage Enhancements",
    eyebrow: "Optional session support",
    description:
      "Enhancements may be included when they make sense for your session. Options include aromatherapy, cupping, gua sha, warm towels, table warmer, Hypervolt, or other supportive techniques. These enhancements are free of charge.",
  },
];

const alsoAvailable = [
  {
    title: "Pediatric Massage",
    description:
      "Gentle, age-appropriate massage may be available for children with parent or guardian involvement.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-bwe-page">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Services
            </p>

            <h1 className="mb-6 text-4xl font-light leading-tight text-bwe-text sm:text-5xl">
              Massage and bodywork services in Cedar Park, Texas.
            </h1>

            <p className="text-lg leading-8 text-bwe-muted">
              Bodyworks By Elony offers customized Cedar Park massage for real
              life, real stress, and real bodies. Whether you are booking
              therapeutic massage, prenatal massage, or manual lymphatic
              drainage, each appointment starts with a real conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bwe-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className={`grid gap-8 rounded-3xl border border-bwe-border bg-bwe-page p-6 md:p-8 ${
                  service.goodFor ? "md:grid-cols-[1fr_0.8fr]" : ""
                }`}
              >
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-bwe-accent-dark">
                    {service.eyebrow}
                  </p>

                  <h2 className="mb-4 text-2xl font-light text-bwe-text">
                    {service.title}
                  </h2>

                  <p className="leading-8 text-bwe-muted">
                    {service.description}
                  </p>
                </div>

                {service.goodFor ? (
                  <div className="rounded-2xl border border-bwe-border bg-bwe-surface p-5">
                    <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-bwe-accent-dark">
                      Many clients seek this for
                    </h3>

                    <ul className="space-y-3 text-bwe-muted">
                      {service.goodFor.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bwe-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bwe-page">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Also Available
            </p>

            <h2 className="text-3xl font-light text-bwe-text">
              More options when they are the right fit.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {alsoAvailable.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-bwe-border bg-bwe-surface p-6"
              >
                <h3 className="mb-3 text-xl font-medium text-bwe-text">
                  {item.title}
                </h3>

                <p className="leading-7 text-bwe-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bwe-soft">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Choosing a Service
            </p>

            <h2 className="text-3xl font-light leading-tight text-bwe-text">
              Not sure which massage to book?
            </h2>
          </div>

          <div className="rounded-3xl border border-bwe-border bg-bwe-surface p-6 md:p-8">
            <p className="mb-6 leading-8 text-bwe-muted">
              If you are unsure, therapeutic massage is usually the most
              flexible starting point. Prenatal massage and manual lymphatic
              drainage are more specialized options. No guessing, no pressure:
              your session can be adjusted based on your intake conversation,
              preferences, and comfort level.
            </p>

            <div className="flex flex-wrap gap-4">
              <BookingLink
                href={getBookingUrl()}
                location="services_cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-bwe-accent-dark px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <span>Book an Appointment</span>
                <ExternalLinkIcon />
              </BookingLink>

              <a
                href="/pricing"
                className="rounded-full border border-bwe-border bg-bwe-page px-6 py-3 text-sm font-medium text-bwe-text transition hover:border-bwe-accent"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bwe-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-bwe-border bg-bwe-page p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Training & Credentials
            </p>

            <h2 className="mb-4 text-3xl font-light text-bwe-text">
              Trained, licensed, and always learning.
            </h2>

            <div className="grid gap-6 text-bwe-muted md:grid-cols-2">
              <p className="leading-8">
                Elony is licensed by the Texas Department of Licensing and
                Regulation. TDLR Massage Therapy License #
                {siteConfig.credentials.tdlrLicense}.
              </p>

              <p className="leading-8">
                Manual Lymphatic Drainage training:{" "}
                {siteConfig.credentials.mldTechnique},{" "}
                {siteConfig.credentials.mldCertification}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
