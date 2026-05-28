import type { Metadata } from "next";
import { getBookingUrl, siteConfig } from "../lib/site";
import BookingLink from "../components/BookingLink";
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
      "Elony has been practicing massage therapy since 2013, bringing years of hands-on experience to her one-on-one work.",
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

export default function AboutPage() {
  return (
    <main>
      <section className="bg-bwe-page">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-28">
          <div className="rounded-[2rem] bg-bwe-soft p-6 shadow-sm">
            <figure className="overflow-hidden rounded-[1.5rem] bg-bwe-surface">
              <img
                src="/images/elony-about.jpg"
                alt="Elony, licensed massage therapist and owner of Bodyworks By Elony"
                className="aspect-[4/5] w-full object-cover object-top"
              />

              <figcaption className="px-5 py-4 text-sm text-bwe-muted">
                Photo by Stephanie Copner
              </figcaption>
            </figure>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              About Elony
            </p>

            <h1 className="mb-6 max-w-3xl text-4xl font-light leading-tight text-bwe-text sm:text-5xl">
              Hey, I’m Elony.
            </h1>

            <p className="mb-6 text-lg leading-8 text-bwe-muted">
              I’m a licensed massage therapist, the owner of Bodyworks By Elony,
              and I’ve been practicing massage since 2013. My goal is simple: help
              you feel comfortable, respected, and cared for from the moment you
              walk in.
            </p>

            <p className="mb-6 leading-8 text-bwe-muted">
              I was born and raised in El Paso, Texas, home of the best Mexican food
              you can find, and now live and work in the northwest Cedar Park area
              with my family. Before massage, movement was my first language. I
              started dancing when I was two, grew up as a competition kid, and began
              teaching dance at 14 after a mentor saw something in me that I did not
              fully see in myself yet.
            </p>

            <p className="mb-6 leading-8 text-bwe-muted">
              That background shaped the way I work today. Years of dance, teaching,
              fitness, and my own experiences with injury made me want to understand
              the body more deeply. Massage therapy became a natural next step, and I
              went on to graduate from Southern California Health Institute as a
              Certified Massage Therapist.
            </p>

            <p className="leading-8 text-bwe-muted">
              My work is practical, personal, and never cookie-cutter, because each
              body brings a different story to the table. Some clients come in with
              pain or strain from everyday life. Some need quiet. Some need focused
              therapeutic work. Some just need a safe place to breathe for an hour.
              Wherever you are starting from, you are welcome here.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <BookingLink
                href={getBookingUrl()}
                location="about_hero"
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
        </div>
      </section>

      <section className="bg-bwe-page">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              The Space
            </p>

            <h2 className="mb-4 text-3xl font-light leading-tight text-bwe-text">
              A calm, private treatment room in northwest Cedar Park.
            </h2>

            <p className="leading-8 text-bwe-muted">
              Bodyworks By Elony offers massage and bodywork in a quiet,
              welcoming treatment room near Whitestone & Lakeline, convenient
              to Cedar Park, Leander, northwest Austin, and Liberty Hill.
            </p>
          </div>

          <div className="rounded-[2rem] border border-bwe-border bg-bwe-soft p-6 shadow-sm">
            <img
              src="/images/studio-room.png"
              alt="Warm massage treatment room at Bodyworks By Elony in Cedar Park, Texas"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-bwe-page">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Training & Credentials
            </p>

            <h2 className="text-3xl font-light text-bwe-text">
              Trained, licensed, and always learning.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {credentials.map((item) => (
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
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
              Location & Contact
            </p>

            <h2 className="mb-4 text-3xl font-light leading-tight text-bwe-text">
              Serving Cedar Park, Leander, northwest Austin, and Liberty Hill.
            </h2>

            <p className="leading-8 text-bwe-muted">
              Bodyworks By Elony is located in {siteConfig.location.city},{" "}
              {siteConfig.location.zip}, near {siteConfig.location.landmark}.
              Online booking is available anytime.
            </p>
          </div>

          <div className="rounded-3xl border border-bwe-border bg-bwe-surface p-6 md:p-8">
            <div className="grid gap-5">
              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-bwe-accent-dark">
                  Email
                </h3>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-bwe-text underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-bwe-accent-dark">
                  Call
                </h3>

                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-bwe-text underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-bwe-accent-dark">
                  Text
                </h3>

                <a
                  href={siteConfig.contact.textHref}
                  className="text-bwe-text underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
                >
                  {siteConfig.contact.text}
                </a>
              </div>

              <div className="pt-2">
                <BookingLink
                  href={getBookingUrl()}
                  location="about_contact_card"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-bwe-accent-dark px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  <span>Book an Appointment</span>
                  <ExternalLinkIcon />
                </BookingLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
