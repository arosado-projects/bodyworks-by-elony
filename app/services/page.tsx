import type { Metadata } from "next";
import { siteConfig } from "../lib/site";

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
      "A personalized massage session tailored to your goals, comfort level, and areas that may need focused attention. Therapeutic massage may include relaxation-focused work, deeper pressure, trigger point work, stretching, or other bodywork techniques based on what is appropriate for your session.",
    goodFor: [
      "General tension",
      "Relaxation and recovery",
      "Focused bodywork",
      "Clients who want a customized massage session",
    ],
  },
  {
    title: "Prenatal Massage",
    eyebrow: "Supportive pregnancy massage",
    description:
      "Supportive massage for pregnancy, offered with comfort, positioning, and care in mind. Sessions are designed to help you feel more settled, supported, and at ease in your body.",
    goodFor: [
      "Pregnancy comfort",
      "Gentle supportive work",
      "Relaxation",
      "Clients seeking careful positioning and a slower pace",
    ],
  },
  {
    title: "Manual Lymphatic Drainage",
    eyebrow: `${siteConfig.credentials.mldTechnique} · ${siteConfig.credentials.mldCertification}`,
    description:
      "Manual lymphatic drainage is a gentle, specialized massage technique using light, intentional movements. Elony is trained in the Klose/Vodder Technique and is a Certified Manual Lymphatic Drainage Therapist. Clients often seek MLD for post-op support when medically cleared, general swelling, and facial puffiness or swelling related to allergies. Focused MLD may also be incorporated into a standard massage session, such as using part of a 60-minute appointment for lymphatic work.",
    goodFor: [
      "Post-op support with medical clearance",
      "General swelling",
      "Facial puffiness or allergy-related swelling",
      "Focused MLD within a longer massage session",
    ],
  },
  {
    title: "Massage Enhancements",
    eyebrow: "Optional session support",
    description:
      "Enhancements may be included when appropriate to support the goals of your session. Options may include aromatherapy, cupping, gua sha, warm towels, table warmer, Hypervolt, or other supportive techniques.",
    goodFor: [
      "Added comfort",
      "Session customization",
      "Focused areas of tension",
      "Clients who want extra support during their massage",
    ],
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
      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Services
            </p>

            <h1 className="mb-6 text-4xl font-light leading-tight text-[#292524] sm:text-5xl">
              Massage and bodywork services in Cedar Park, Texas.
            </h1>

            <p className="text-lg leading-8 text-[#6b625c]">
              Bodyworks By Elony offers calm, personalized massage sessions
              designed around your needs, preferences, and comfort level.
              Whether you are seeking a therapeutic session, prenatal support,
              manual lymphatic drainage, or simple relaxation, each appointment
              begins with thoughtful intake and clear communication.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="grid gap-8 rounded-3xl border border-[#eadfda] bg-[#faf7f2] p-6 md:grid-cols-[1fr_0.8fr] md:p-8"
              >
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-[#8f3f50]">
                    {service.eyebrow}
                  </p>

                  <h2 className="mb-4 text-2xl font-light text-[#292524]">
                    {service.title}
                  </h2>

                  <p className="leading-8 text-[#6b625c]">
                    {service.description}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#eadfda] bg-[#fffdfc] p-5">
                  <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[#8f3f50]">
                    Many clients seek this for
                  </h3>

                  <ul className="space-y-3 text-[#6b625c]">
                    {service.goodFor.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d98c9b]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Also Available
            </p>

            <h2 className="text-3xl font-light text-[#292524]">
              Additional massage options for specific client needs.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {alsoAvailable.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6"
              >
                <h3 className="mb-3 text-xl font-medium text-[#292524]">
                  {item.title}
                </h3>

                <p className="leading-7 text-[#6b625c]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7e8e8]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Choosing a Service
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              Not sure which massage to book?
            </h2>
          </div>

          <div className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6 md:p-8">
            <p className="mb-6 leading-8 text-[#6b625c]">
              If you are unsure, therapeutic massage is usually the most
              flexible starting point. Prenatal massage and manual lymphatic
              drainage are more specialized options. Your session can be
              adjusted based on your intake conversation, preferences, and
              comfort level.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#8f3f50] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Book an Appointment
              </a>

              <a
                href="/pricing"
                className="rounded-full border border-[#eadfda] bg-[#faf7f2] px-6 py-3 text-sm font-medium text-[#292524] transition hover:border-[#d98c9b]"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-[#eadfda] bg-[#faf7f2] p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Training & Credentials
            </p>

            <h2 className="mb-4 text-3xl font-light text-[#292524]">
              Licensed massage therapy with specialized MLD training.
            </h2>

            <div className="grid gap-6 text-[#6b625c] md:grid-cols-2">
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

      <section className="bg-[#292524] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#f7e8e8]">
              Ready to Schedule?
            </p>

            <h2 className="text-3xl font-light">
              Book a massage appointment online through Acuity.
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