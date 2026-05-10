import type { Metadata } from "next";
import { getBookingUrl, siteConfig } from "../lib/site";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

export const metadata: Metadata = {
  title: "Book an Appointment | Bodyworks By Elony",
  description:
    "Book a massage appointment with Bodyworks By Elony in Cedar Park, TX. Online scheduling is handled through Acuity.",
};

const bookingSteps = [
  {
    title: "Choose your service",
    description:
      "Select therapeutic massage, prenatal massage, manual lymphatic drainage, or another available appointment option.",
  },
  {
    title: "Pick a time",
    description:
      "View current availability and choose the appointment time that works best for your schedule.",
  },
  {
    title: "Complete intake details",
    description:
      "Acuity will collect the information needed to prepare for your session and confirm your appointment.",
  },
];

const reminders = [
  "First-time appointments require prepayment when booking.",
  "Please plan to arrive 10 minutes early for intake and undressing to your comfort level.",
  "Cupping and manual lymphatic drainage add-ons are subject to medical review.",
  "If you are unsure what to book, therapeutic massage is usually the most flexible starting point.",
];

export default function BookingPage() {
  return (
    <main>
      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Booking
            </p>

            <h1 className="mb-6 max-w-3xl text-4xl font-light leading-tight text-[#292524] sm:text-5xl">
              Book a massage appointment online.
            </h1>

            <p className="mb-8 text-lg leading-8 text-[#6b625c]">
              Scheduling is handled through Acuity, where you can view current
              availability, choose a service, select any available add-ons, and
              reserve your appointment securely.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={getBookingUrl("booking_hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8f3f50] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <span>Continue to Online Booking</span>
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

          <div className="rounded-[2rem] bg-[#f7e8e8] p-6 shadow-sm">
            <div className="rounded-[1.5rem] bg-[#fffdfc] p-8">
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#8f3f50]">
                Before You Book
              </p>

              <h2 className="mb-4 text-2xl font-light leading-snug text-[#292524]">
                Not sure which massage is right for you?
              </h2>

              <p className="mb-6 leading-7 text-[#6b625c]">
                Therapeutic massage is the most flexible option for many
                clients. Prenatal massage and manual lymphatic drainage are more
                specialized services.
              </p>

              <a
                href="/pricing"
                className="text-sm font-medium text-[#8f3f50] underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
              >
                Review pricing before booking
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              How Booking Works
            </p>

            <h2 className="text-3xl font-light text-[#292524]">
              A simple online scheduling process.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {bookingSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-[#eadfda] bg-[#faf7f2] p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7e8e8] text-sm font-medium text-[#8f3f50]">
                  {index + 1}
                </div>

                <h3 className="mb-3 text-xl font-medium text-[#292524]">
                  {step.title}
                </h3>

                <p className="leading-7 text-[#6b625c]">
                  {step.description}
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
              Helpful Reminders
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              A few details before your appointment.
            </h2>
          </div>

          <div className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6 md:p-8">
            <ul className="space-y-4 text-[#6b625c]">
              {reminders.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d98c9b]" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/policies"
                className="rounded-full border border-[#eadfda] bg-[#faf7f2] px-6 py-3 text-sm font-medium text-[#292524] transition hover:border-[#d98c9b]"
              >
                View Policies
              </a>

              <a
                href="/contact"
                className="rounded-full border border-[#eadfda] bg-[#faf7f2] px-6 py-3 text-sm font-medium text-[#292524] transition hover:border-[#d98c9b]"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7e8e8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Location
            </p>

            <h2 className="mb-4 text-3xl font-light leading-tight text-[#292524]">
              Massage appointments in Cedar Park, Texas.
            </h2>

            <p className="leading-8 text-[#6b625c]">
              Bodyworks By Elony is located in {siteConfig.location.city},{" "}
              {siteConfig.location.zip}, near {siteConfig.location.landmark},
              serving Cedar Park and the greater Austin area.
            </p>
          </div>

          <div className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6 md:p-8">
            <h3 className="mb-3 text-xl font-medium text-[#292524]">
              Questions before booking?
            </h3>

            <p className="mb-6 leading-7 text-[#6b625c]">
              For service questions, scheduling questions, or help choosing the
              best appointment type, contact Bodyworks By Elony before booking.
            </p>

            <div className="grid gap-3 text-[#292524]">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
              >
                {siteConfig.contact.email}
              </a>

              <a
                href={siteConfig.contact.phoneHref}
                className="underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
              >
                Call {siteConfig.contact.phone}
              </a>

              <a
                href={siteConfig.contact.textHref}
                className="underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
              >
                Text {siteConfig.contact.text}
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
              Continue to Acuity to view availability.
            </h2>
          </div>

          <a
            href={getBookingUrl("booking_final_cta")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fffdfc] px-6 py-3 text-sm font-medium text-[#292524] transition hover:bg-[#f7e8e8]"
          >
            <span>Continue to Online Booking</span>
            <ExternalLinkIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
