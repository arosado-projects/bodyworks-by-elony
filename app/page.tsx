import { siteConfig } from "./lib/site";

const featuredServices = [
  {
    title: "Therapeutic Massage",
    description:
      "Customized massage that may include relaxation-focused work, deeper therapeutic pressure, trigger point work, stretching, or other techniques based on your goals and comfort.",
  },
  {
    title: "Prenatal Massage",
    description:
      "Supportive massage for pregnancy, offered with comfort, positioning, and care in mind.",
  },
  {
    title: "Manual Lymphatic Drainage",
    description:
      "Gentle, specialized massage using light, intentional techniques. Elony is trained in the Klose/Vodder Technique and is a Certified Manual Lymphatic Drainage Therapist.",
  },
  {
    title: "Pediatric Massage",
    description:
      "Gentle, age-appropriate massage may be available for children with appropriate parent or guardian involvement.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-500">
              {siteConfig.name}
            </p>

            <h1 className="mb-6 max-w-3xl text-4xl font-light leading-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Calm, personalized massage and bodywork in Cedar Park, Texas.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-stone-600">
              Bodyworks By Elony offers thoughtful, client-centered massage
              sessions designed to support relaxation, comfort, recovery, and a
              deeper sense of ease in your body.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Book an Appointment
              </a>

              <a
                href="/services"
                className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-500"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-stone-200/70 p-6 shadow-sm">
            <div className="rounded-[1.5rem] bg-stone-50 p-8">
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-stone-500">
                Serving Cedar Park & Austin
              </p>

              <h2 className="mb-4 text-2xl font-light leading-snug text-stone-900">
                A grounded space for massage, recovery, and supportive
                bodywork.
              </h2>

              <p className="leading-7 text-stone-600">
                Whether you are seeking relaxation, tension relief, focused
                manual lymphatic drainage, or a more customized bodywork
                session, appointments are tailored to your needs and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
              Services
            </p>

            <h2 className="text-3xl font-light text-stone-950 sm:text-4xl">
              Massage and bodywork for relaxation, comfort, and recovery.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="mb-3 text-xl font-medium text-stone-900">
                  {service.title}
                </h3>

                <p className="leading-7 text-stone-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/services"
              className="text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700"
            >
              Explore all services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-stone-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
              What to Expect
            </p>

            <h2 className="text-3xl font-light text-stone-950">
              Clear, comfortable, and client-centered.
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6">
            <h3 className="mb-3 text-lg font-medium text-stone-900">
              Thoughtful intake
            </h3>

            <p className="leading-7 text-stone-600">
              Sessions begin with a conversation about your goals, preferences,
              and areas that may need extra attention.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6">
            <h3 className="mb-3 text-lg font-medium text-stone-900">
              Personalized sessions
            </h3>

            <p className="leading-7 text-stone-600">
              Each appointment is adapted to your comfort level, needs, and the
              type of support you are looking for that day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
                Training & Care
              </p>

              <h2 className="text-3xl font-light leading-tight text-stone-950">
                Licensed massage therapy with specialized training.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
                <h3 className="mb-3 text-lg font-medium text-stone-900">
                  Texas Licensed
                </h3>

                <p className="leading-7 text-stone-600">
                  TDLR Massage Therapy License #
                  {siteConfig.credentials.tdlrLicense}.
                </p>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
                <h3 className="mb-3 text-lg font-medium text-stone-900">
                  MLD Training
                </h3>

                <p className="leading-7 text-stone-600">
                  {siteConfig.credentials.mldTechnique} ·{" "}
                  {siteConfig.credentials.mldCertification}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-300">
              Ready to Schedule?
            </p>

            <h2 className="text-3xl font-light">
              Book online through Acuity.
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