import type { Metadata } from "next";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact | Bodyworks By Elony",
  description:
    "Contact Bodyworks By Elony in Cedar Park, TX. Email, call, text, view business hours, or book a massage appointment online.",
};

const contactMethods = [
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "Best for general questions before booking.",
  },
  {
    label: "Call",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
    description: "Use for appointment or service questions.",
  },
  {
    label: "Text",
    value: siteConfig.contact.text,
    href: siteConfig.contact.textHref,
    description: "Use for quick scheduling or service questions.",
  },
];

const visitNotes = [
  "Scheduling is handled online through Acuity.",
  "Please plan to arrive 10 minutes early to allow time for intake and undressing to your comfort level.",
  "First-time appointments require prepayment when booking.",
  "Cupping and manual lymphatic drainage are subject to medical review.",
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Contact
            </p>

            <h1 className="mb-6 max-w-3xl text-4xl font-light leading-tight text-[#292524] sm:text-5xl">
              Questions before booking?
            </h1>

            <p className="mb-8 text-lg leading-8 text-[#6b625c]">
              Contact Bodyworks By Elony with questions about services,
              scheduling, manual lymphatic drainage, prenatal massage, pediatric
              massage, or which appointment type may be the best fit.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="rounded-full bg-[#8f3f50] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Email Elony
              </a>

              <a
                href="/booking"
                className="rounded-full border border-[#eadfda] bg-[#fffdfc] px-6 py-3 text-sm font-medium text-[#292524] transition hover:border-[#d98c9b]"
              >
                Booking Details
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#f7e8e8] p-6 shadow-sm">
            <div className="rounded-[1.5rem] bg-[#fffdfc] p-8">
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#8f3f50]">
                Location
              </p>

              <h2 className="mb-4 text-2xl font-light leading-snug text-[#292524]">
                Located in Cedar Park, Texas.
              </h2>

              <p className="leading-7 text-[#6b625c]">
                Bodyworks By Elony is located in {siteConfig.location.city},{" "}
                {siteConfig.location.zip}, near {siteConfig.location.landmark},
                serving Cedar Park and the greater Austin area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Contact Options
            </p>

            <h2 className="text-3xl font-light text-[#292524]">
              Choose the contact method that works best for you.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactMethods.map((method) => (
              <article
                key={method.label}
                className="rounded-3xl border border-[#eadfda] bg-[#faf7f2] p-6"
              >
                <h3 className="mb-3 text-xl font-medium text-[#292524]">
                  {method.label}
                </h3>

                <a
                  href={method.href}
                  className="mb-4 block text-[#8f3f50] underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
                >
                  {method.value}
                </a>

                <p className="leading-7 text-[#6b625c]">
                  {method.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Business Hours
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              Appointment availability by day.
            </h2>
          </div>

          <div className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6 md:p-8">
            <dl className="grid gap-4">
              {siteConfig.businessHours.display.map((item) => (
                <div
                  key={item.day}
                  className="grid gap-1 border-b border-[#eadfda] pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[0.4fr_0.6fr]"
                >
                  <dt className="font-medium text-[#292524]">{item.day}</dt>
                  <dd className="text-[#6b625c]">{item.hours}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm leading-6 text-[#6b625c]">
              {siteConfig.businessHours.note}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7e8e8]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Before You Visit
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              A few helpful appointment notes.
            </h2>
          </div>

          <div className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6 md:p-8">
            <ul className="space-y-4 text-[#6b625c]">
              {visitNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d98c9b]" />
                  <span className="leading-7">{note}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/booking"
                className="rounded-full border border-[#eadfda] bg-[#faf7f2] px-6 py-3 text-sm font-medium text-[#292524] transition hover:border-[#d98c9b]"
              >
                Booking Details
              </a>

              <a
                href="/policies"
                className="rounded-full border border-[#eadfda] bg-[#faf7f2] px-6 py-3 text-sm font-medium text-[#292524] transition hover:border-[#d98c9b]"
              >
                View Policies
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
              Book your appointment online through Acuity.
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