import type { Metadata } from "next";
import { getBookingUrl, siteConfig } from "../lib/site";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

export const metadata: Metadata = {
  title: "Policies | Bodyworks By Elony",
  description:
    "Review booking, cancellation, payment, package, health, privacy, and SMS policies for Bodyworks By Elony in Cedar Park, TX.",
};

const appointmentPolicies = [
  {
    title: "Confirmation",
    description:
      "A confirmation text or email is sent 48 hours before all sessions. Please respond to confirm your appointment. If confirmation is not received by 9:00 PM the day before your appointment, the appointment may be treated as canceled and charged according to the cancellation policy.",
  },
  {
    title: "Cancellation",
    description:
      "A 24-hour notice is required to cancel or reschedule an appointment. Appointments canceled with less than 24 hours notice may be charged in full, with payment due before the next appointment.",
  },
  {
    title: "2-Hour Sessions",
    description:
      "Two-hour sessions require 48 hours notice for cancellation or rescheduling.",
  },
  {
    title: "Late Arrivals",
    description:
      "Appointment times are scheduled as reserved and cannot be extended to accommodate late arrivals. Please arrive on time so you can receive your full session.",
  },
];

const paymentPolicies = [
  {
    title: "First-Time Appointments",
    description:
      "First-time appointments require prepayment when booking through Acuity.",
  },
  {
    title: "Payment",
    description:
      "Major credit cards are accepted and preferred. Cash may be accepted for returning clients, but exact payment is required because change is not available.",
  },
  {
    title: "Massage Packages",
    description:
      "Four-packs are available for therapeutic massage sessions only. Packages do not apply to prenatal massage or manual lymphatic drainage.",
  },
  {
    title: "Package Expiration & Reactivation",
    description:
      "Therapeutic massage packages expire three months after first use. Expired packages may be reactivated for $10 per hour of remaining session time the client wants to use. For example, reactivating one 90-minute session would be $15. All package sales are final.",
  },
  {
    title: "Insurance, Records & Summary Fees",
    description:
      "Bodyworks By Elony does not accept insurance, provide medical billing or insurance coding, or guarantee reimbursement. Clients should retain automated payment receipts and appointment confirmations for their own records. For packages, those two documents together serve as the client’s official record. Requests for manual account reconciliation or preparation of a formal financial summary or statement are subject to a $50 Summary Preparation Fee.",
  },
];

const healthPolicies = [
  {
    title: "Sickness",
    description:
      "Massage services are not appropriate care for infectious or contagious illness. Please cancel as soon as you feel symptomatic. If symptoms arise within the cancellation window, the cancellation fee may be waived.",
  },
  {
    title: "Health Intake",
    description:
      "Please complete intake forms honestly and share any relevant health updates before your session. Some conditions or techniques may require medical clearance.",
  },
  {
    title: "Cupping & Manual Lymphatic Drainage",
    description:
      "Cupping and manual lymphatic drainage are subject to medical review and may not be appropriate for every client or situation.",
  },
  {
    title: "Prenatal & Pediatric Massage",
    description:
      "Prenatal massage is offered with comfort, positioning, and care in mind. Pediatric massage may be available for children with parent or guardian involvement.",
  },
];

const professionalPolicies = [
  {
    title: "Draping",
    description:
      "Clients are properly draped throughout the session. Only the area being worked on is uncovered. Breast and genital areas are never massaged.",
  },
  {
    title: "Comfort & Communication",
    description:
      "You may ask for more or less pressure, request adjustments, or ask to stop work on any area at any time.",
  },
  {
    title: "Professional Boundaries",
    description:
      "Bodyworks By Elony provides professional massage therapy services only. Inappropriate behavior or requests will end the session immediately and may result in refusal of future appointments.",
  },
];

function PolicyGrid({
  items,
}: {
  items: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6"
        >
          <h3 className="mb-3 text-xl font-medium text-[#292524]">
            {item.title}
          </h3>

          <p className="leading-7 text-[#6b625c]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function PoliciesPage() {
  return (
    <main>
      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Policies
            </p>

            <h1 className="mb-6 text-4xl font-light leading-tight text-[#292524] sm:text-5xl">
              Appointment policies and client information.
            </h1>

            <p className="text-lg leading-8 text-[#6b625c]">
              Please review these policies before booking so your appointment
              can feel clear, respectful, and easy from start to finish.
            </p>

            <p className="mt-6 text-sm text-[#6b625c]">
              Last updated: {siteConfig.lastUpdated.policies}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Appointments
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              Confirmation, cancellation, and arrival policies.
            </h2>
          </div>

          <PolicyGrid items={appointmentPolicies} />
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Payment & Packages
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              Payment, prepayment, and package details.
            </h2>
          </div>

          <PolicyGrid items={paymentPolicies} />
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Health & Safety
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              Health information helps keep sessions appropriate and safe.
            </h2>
          </div>

          <PolicyGrid items={healthPolicies} />
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Session Boundaries
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              Professional, respectful massage therapy.
            </h2>
          </div>

          <PolicyGrid items={professionalPolicies} />
        </div>
      </section>

      <section className="bg-[#f7e8e8]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Privacy Policy & SMS Terms
            </p>

            <h2 className="mb-6 text-3xl font-light text-[#292524]">
              How appointment information and text messaging are used.
            </h2>

            <div className="grid gap-8 text-[#6b625c] lg:grid-cols-2">
              <div>
                <h3 className="mb-3 text-xl font-medium text-[#292524]">
                  Privacy
                </h3>

                <p className="leading-8">
                  Bodyworks By Elony collects client information such as name,
                  phone number, and email address solely for scheduling,
                  managing, and communicating about massage therapy
                  appointments.
                </p>

                <p className="mt-4 leading-8">
                  Mobile information will not be shared with third parties or
                  affiliates for marketing or promotional purposes. Text
                  messaging originator opt-in data and consent will not be
                  shared with any third parties.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-medium text-[#292524]">
                  SMS Terms
                </h3>

                <p className="leading-8">
                  By providing your phone number and opting in through the
                  booking site, you agree to receive automated appointment
                  confirmations, reminders, and scheduling updates. SMS is an
                  unencrypted form of communication, and message frequency may
                  vary based on appointment activity. Message and data rates may
                  apply.
                </p>

                <p className="mt-4 leading-8">
                  To opt out, text STOP. For help, reply HELP or contact{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[#8f3f50] underline decoration-[#d98c9b] underline-offset-4 hover:decoration-[#8f3f50]"
                  >
                    {siteConfig.contact.email}
                  </a>
                  .
                </p>
              </div>
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
            href={getBookingUrl("policies_final_cta")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fffdfc] px-6 py-3 text-sm font-medium text-[#292524] transition hover:bg-[#f7e8e8]"
          >
            <span>Book an Appointment</span>
            <ExternalLinkIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
