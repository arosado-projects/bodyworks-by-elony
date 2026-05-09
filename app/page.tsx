import type { Metadata } from "next";
import { siteConfig } from "./lib/site";

export const metadata: Metadata = {
  title: "Bodyworks By Elony | Massage & Bodywork in Cedar Park, TX",
  description:
    "Calm, personalized massage and bodywork in Cedar Park, TX. Therapeutic massage, prenatal massage, manual lymphatic drainage, and pediatric massage available.",
};

const featuredServices = [
  {
    title: "Therapeutic Massage",
    description:
      "Customized massage that may include relaxation-focused work, deeper pressure, trigger point work, or other techniques based on your goals and comfort.",
  },
  {
    title: "Prenatal Massage",
    description:
      "Supportive massage for pregnancy, offered with comfort, positioning, and care in mind.",
  },
  {
    title: "Manual Lymphatic Drainage",
    description:
      "Gentle, specialized massage using light, intentional techniques. Elony is trained in the Klose/Vodder Technique.",
  },
  {
    title: "Pediatric Massage",
    description:
      "Gentle, age-appropriate massage may be available for children with parent or guardian involvement.",
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
    title: "Client-Centered Care",
    description:
      "Sessions are adapted to your comfort level, goals, pressure preferences, and needs for the day.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              {siteConfig.name}
            </p>

            <h1 className="mb-6 max-w-3xl text-4xl font-light leading-tight text-[#292524] sm:text-5xl lg:text-6xl">
              Calm, personalized massage and bodywork in Cedar Park, Texas.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-[#6b625c]">
              Bodyworks By Elony offers thoughtful, client-centered massage
              sessions designed to support relaxation, comfort, recovery, and a
              deeper sense of ease in your body.
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
                href="/services"
                className="rounded-full border border-[#eadfda] bg-[#fffdfc] px-6 py-3 text-sm font-medium text-[#292524] transition hover:border-[#d98c9b]"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#f7e8e8] p-6 shadow-sm">
            <div className="rounded-[1.5rem] bg-[#fffdfc] p-8">
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#8f3f50]">
                Serving Cedar Park & Austin
              </p>

              <h2 className="mb-4 text-2xl font-light leading-snug text-[#292524]">
                A grounded space for massage, recovery, and supportive
                bodywork.
              </h2>

              <p className="mb-6 leading-7 text-[#6b625c]">
                Whether you are seeking relaxation, tension relief, focused
                manual lymphatic drainage, or a more customized massage session,
                appointments are tailored to your needs and comfort.
              </p>

              <div className="rounded-2xl border border-[#eadfda] bg-[#faf7f2] p-5">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-[#8f3f50]">
                  Specialized Training
                </p>

                <p className="leading-7 text-[#6b625c]">
                  Manual Lymphatic Drainage:{" "}
                  {siteConfig.credentials.mldTechnique} ·{" "}
                  {siteConfig.credentials.mldCertification}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Services
            </p>

            <h2 className="text-3xl font-light text-[#292524] sm:text-4xl">
              Massage and bodywork for relaxation, comfort, and recovery.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-[#eadfda] bg-[#faf7f2] p-6"
              >
                <h3 className="mb-3 text-xl font-medium text-[#292524]">
                  {service.title}
                </h3>

                <p className="leading-7 text-[#6b625c]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/services"
              className="text-sm font-medium text-[#8f3f50] underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
            >
              Explore all services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f7e8e8]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              What to Expect
            </p>

            <h2 className="text-3xl font-light text-[#292524]">
              Clear, comfortable, and client-centered.
            </h2>
          </div>

          <div className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6">
            <h3 className="mb-3 text-lg font-medium text-[#292524]">
              Thoughtful intake
            </h3>

            <p className="leading-7 text-[#6b625c]">
              Sessions begin with a conversation about your goals, preferences,
              comfort level, and areas that may need extra attention.
            </p>
          </div>

          <div className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6">
            <h3 className="mb-3 text-lg font-medium text-[#292524]">
              Personalized sessions
            </h3>

            <p className="leading-7 text-[#6b625c]">
              Pressure, pacing, positioning, and focus areas can be adjusted so
              the session stays aligned with what you need that day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
                Training & Care
              </p>

              <h2 className="text-3xl font-light leading-tight text-[#292524]">
                Licensed massage therapy with specialized training.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {trustItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6"
                >
                  <h3 className="mb-3 text-lg font-medium text-[#292524]">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-[#6b625c]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#f7e8e8] p-6">
            <div className="rounded-[1.5rem] bg-[#fffdfc] p-8">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
                Manual Lymphatic Drainage
              </p>

              <h2 className="mb-4 text-3xl font-light text-[#292524]">
                Gentle, focused lymphatic work.
              </h2>

              <p className="leading-8 text-[#6b625c]">
                Clients often seek manual lymphatic drainage for post-op support
                when medically cleared, general swelling, and facial puffiness
                or swelling related to allergies. Focused MLD may also be
                incorporated into a standard massage session when appropriate.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Booking
            </p>

            <h2 className="mb-4 text-3xl font-light leading-tight text-[#292524]">
              Schedule online through Acuity.
            </h2>

            <p className="mb-8 leading-8 text-[#6b625c]">
              Online booking lets you view current availability, choose a
              service, and reserve your appointment securely.
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

      <section className="bg-[#292524] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#f7e8e8]">
              Ready to Schedule?
            </p>

            <h2 className="text-3xl font-light">
              Book a massage appointment with Bodyworks By Elony.
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