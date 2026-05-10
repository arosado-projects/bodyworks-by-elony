import type { Metadata } from "next";
import { getBookingUrl, siteConfig } from "../lib/site";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

export const metadata: Metadata = {
  title: "About Elony | Bodyworks By Elony",
  description:
    "Meet Elony, licensed massage therapist and owner of Bodyworks By Elony in Cedar Park, TX. Personalized therapeutic massage, prenatal massage, manual lymphatic drainage, and bodywork.",
};

const credentials = [
  {
    title: "Licensed Massage Therapist",
    description: `Texas Department of Licensing and Regulation Massage Therapy License #${siteConfig.credentials.tdlrLicense}.`,
  },
  {
    title: "Practicing Since 2013",
    description:
      "Elony has been practicing massage therapy since 2013, bringing years of hands-on experience to her client-centered work.",
  },
  {
    title: "Manual Lymphatic Drainage",
    description: `${siteConfig.credentials.mldTechnique} · ${siteConfig.credentials.mldCertification}.`,
  },
  {
    title: "Additional Training",
    description:
      "Elony is also certified in prenatal massage and cupping, with sessions adapted to each client’s comfort and goals.",
  },
];

const clientFit = [
  "Working adults seeking relief from everyday tension and stress",
  "Clients who prefer calm, attentive, personalized massage",
  "Prenatal clients looking for supportive, carefully positioned bodywork",
  "Clients seeking focused manual lymphatic drainage when appropriate",
  "Families asking about gentle pediatric massage with parent or guardian involvement",
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-28">
          <div className="rounded-[2rem] bg-[#f7e8e8] p-6 shadow-sm">
            <figure className="overflow-hidden rounded-[1.5rem] bg-[#fffdfc]">
              <img
                src="/images/elony-about.jpg"
                alt="Elony, licensed massage therapist and owner of Bodyworks By Elony"
                className="aspect-[4/5] w-full object-cover object-top"
              />

              <figcaption className="px-5 py-4 text-sm text-[#6b625c]">
                Photo by Stephanie Copner
              </figcaption>
            </figure>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              About Elony
            </p>

            <h1 className="mb-6 max-w-3xl text-4xl font-light leading-tight text-[#292524] sm:text-5xl">
              Licensed massage therapist and owner of Bodyworks By Elony.
            </h1>

            <p className="mb-6 text-lg leading-8 text-[#6b625c]">
              Elony offers calm, personalized massage and bodywork for clients
              in Cedar Park and the greater Austin area. Her work is grounded in
              clear communication, thoughtful intake, and sessions adapted to
              each client’s comfort, pressure preferences, and goals.
            </p>

            <p className="leading-8 text-[#6b625c]">
              Born and raised in El Paso, Texas, Elony now calls the Austin area
              home with her family. Her interest in massage grew from a lasting
              curiosity about how the body works and how supportive bodywork can
              help people feel more comfortable, relaxed, and at ease.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={getBookingUrl("about_hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8f3f50] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <span>Book an Appointment</span>
                <ExternalLinkIcon />
              </a>

              <a
                href="/services"
                className="rounded-full border border-[#eadfda] bg-[#fffdfc] px-6 py-3 text-sm font-medium text-[#292524] transition hover:border-[#d98c9b]"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Her Approach
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              Massage that feels grounded, respectful, and specific to you.
            </h2>
          </div>

          <div className="space-y-6 text-[#6b625c]">
            <p className="leading-8">
              Elony’s sessions are designed to feel collaborative. Whether you
              are booking therapeutic massage, prenatal massage, manual
              lymphatic drainage, or pediatric massage, the work begins with a
              conversation about what you need that day.
            </p>

            <p className="leading-8">
              Pressure, pacing, positioning, and focus areas can be adjusted
              throughout the appointment. The goal is not a one-size-fits-all
              massage, but a session that supports your comfort, your schedule,
              and your body.
            </p>

            <p className="leading-8">
              Many clients come to Bodyworks By Elony from Cedar Park and nearby
              communities looking for a calm, reliable place to reset from work,
              family life, stress, and everyday tension.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Training & Credentials
            </p>

            <h2 className="text-3xl font-light text-[#292524]">
              Professional training with specialized massage certifications.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {credentials.map((item) => (
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

          <div className="mt-6 rounded-3xl border border-[#eadfda] bg-[#f7e8e8] p-6 md:p-8">
            <h3 className="mb-3 text-xl font-medium text-[#292524]">
              Massage education
            </h3>

            <p className="leading-8 text-[#6b625c]">
              Elony is a graduate of the Southern California Health Institute,
              where she trained as a Certified Massage Therapist before building
              her practice around therapeutic, client-centered bodywork.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Client Fit
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              A good fit for clients who want attentive, personalized massage.
            </h2>
          </div>

          <div className="rounded-3xl border border-[#eadfda] bg-[#faf7f2] p-6 md:p-8">
            <ul className="space-y-4 text-[#6b625c]">
              {clientFit.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d98c9b]" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f7e8e8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Location & Contact
            </p>

            <h2 className="mb-4 text-3xl font-light leading-tight text-[#292524]">
              Serving Cedar Park and the greater Austin area.
            </h2>

            <p className="leading-8 text-[#6b625c]">
              Bodyworks By Elony is located in {siteConfig.location.city},{" "}
              {siteConfig.location.zip}, near {siteConfig.location.landmark}.
              Online booking is available through Acuity.
            </p>
          </div>

          <div className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6 md:p-8">
            <div className="grid gap-5">
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-[#8f3f50]">
                  Email
                </h3>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#292524] underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-[#8f3f50]">
                  Call
                </h3>

                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-[#292524] underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-[#8f3f50]">
                  Text
                </h3>

                <a
                  href={siteConfig.contact.textHref}
                  className="text-[#292524] underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
                >
                  {siteConfig.contact.text}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getBookingUrl("about_contact_card")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8f3f50] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  <span>Book an Appointment</span>
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
