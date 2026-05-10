import type { Metadata } from "next";
import { getBookingUrl, siteConfig } from "../lib/site";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

export const metadata: Metadata = {
  title: "FAQ | Bodyworks By Elony",
  description:
    "Frequently asked questions about massage appointments, draping, pressure, payment, packages, prenatal massage, manual lymphatic drainage, and pediatric massage at Bodyworks By Elony in Cedar Park, TX.",
};

const massageFaqs = [
  {
    question: "Why do first-time appointments require prepayment?",
    answer:
      "When you schedule, that time is dedicated specifically to your care. First-time appointments require prepayment through our secure booking platform to confirm your session and protect your reserved time. This helps us maintain a consistent schedule so we can continue providing focused, one-on-one attention to every client.",
  },
  {
    question: "What happens if I need to change a prepaid appointment?",
    answer:
      "If you need to reschedule a prepaid appointment, please give the required cancellation notice so the payment can be applied to a future appointment. Appointments changed or canceled inside the cancellation window may be charged according to the cancellation policy. If you prepaid and need help with a scheduling issue, contact Bodyworks By Elony before your appointment time.",
  },
  {
    question: "Will I be covered during the massage?",
    answer:
      "Yes. You will be properly draped throughout the session to help keep you comfortable. Only the area being worked on is uncovered. If you prefer that a certain area remain covered, let Elony know and the work can be adjusted.",
  },
  {
    question: "What areas of my body will be massaged?",
    answer:
      "During intake, you and Elony will discuss the areas you would like addressed. A typical full-body massage may include the back, arms, legs, feet, hands, head, neck, and shoulders. Breast and genital areas are never massaged. Glute work may be included only when appropriate and based on client comfort and session goals.",
  },
  {
    question: "What should I do during the massage?",
    answer:
      "This is your session. Some clients prefer to talk, while others prefer quiet. You are welcome to relax, breathe, doze off, or let Elony know if anything needs to be adjusted. If she moves or positions an arm or leg, simply try to relax and let her do the work.",
  },
  {
    question: "What will the massage feel like?",
    answer:
      "That depends on the type of work being done and your pressure preferences. Some clients prefer gentle, relaxation-focused work, while others want deeper therapeutic pressure. Elony will check in as needed, and you can ask for more or less pressure at any time.",
  },
  {
    question: "How long will my session last?",
    answer:
      "Bodyworks By Elony schedules massage sessions so clients receive their full hands-on session time. Please plan to arrive 10 minutes early to allow time for intake and undressing to your comfort level.",
  },
  {
    question: "Are there medical conditions that make massage inadvisable?",
    answer:
      "Yes. Please be open and honest on your intake forms and let Elony know about any changes in your health. Some conditions or techniques may require medical clearance, including certain post-op situations, high-risk pregnancy, cancer treatment, or other medical concerns.",
  },
];

const servicesFaqs = [
  {
    question: "What type of massage should I book?",
    answer:
      "If you are unsure, therapeutic massage is usually the most flexible starting point. It can be adapted for relaxation, deeper pressure, focused areas of tension, or general recovery support. Prenatal massage and manual lymphatic drainage are more specialized services.",
  },
  {
    question: "Do you offer prenatal massage?",
    answer:
      "Yes. Prenatal massage is available as a supportive pregnancy massage session with comfort, positioning, and care in mind.",
  },
  {
    question: "Do you offer manual lymphatic drainage?",
    answer: `Yes. Elony is trained in Manual Lymphatic Drainage using the ${siteConfig.credentials.mldTechnique} and is certified as ${siteConfig.credentials.mldCertification}. Clients often seek MLD for post-op support when medically cleared, general swelling, and facial puffiness or swelling related to allergies.`,
  },
  {
    question: "Can manual lymphatic drainage be added to a regular massage?",
    answer:
      "Yes, when appropriate. Focused MLD may be incorporated within a standard massage session, such as using part of a 60-minute appointment for lymphatic work. There is also an MLD extension option that adds dedicated time.",
  },
  {
    question: "Do you offer pediatric massage?",
    answer:
      "Yes. Gentle, age-appropriate massage may be available for children with parent or guardian involvement.",
  },
  {
    question: "Do you offer cupping?",
    answer:
      "Yes. Elony is certified in cupping. Cupping may be incorporated into a massage session when appropriate and is subject to medical review.",
  },
];

const policyFaqs = [
  {
    question: "What payment methods are accepted?",
    answer:
      "Major credit cards are accepted and preferred. Cash may be accepted for returning clients, but exact payment is required because change is not available. First-time appointments require prepayment when booking.",
  },
  {
    question: "Are prepaid appointments refundable?",
    answer:
      "Prepaid appointments are intended to reserve your scheduled appointment time. If you need to reschedule, please give the required cancellation notice so the payment can be applied to a future appointment. Late cancellations and no-shows may forfeit the prepaid amount according to the cancellation policy.",
  },
  {
    question: "Do massage packages expire?",
    answer:
      "Therapeutic massage packages expire three months after first use. Packages apply to therapeutic massage only, not prenatal massage or manual lymphatic drainage.",
  },
  {
    question: "Can an expired package be reactivated?",
    answer:
      "Yes. Expired therapeutic massage packages may be reactivated for $10 per hour of remaining session time the client wants to use. For example, reactivating one 90-minute session would be $15.",
  },
  {
    question: "Where is Bodyworks By Elony located?",
    answer: `Bodyworks By Elony is located in ${siteConfig.location.city}, ${siteConfig.location.zip}, near ${siteConfig.location.landmark}, serving Cedar Park, Leander, Liberty Hill, and surrounding Northwest Austin-area communities.`,
  },
];

const allFaqs = [...massageFaqs, ...servicesFaqs, ...policyFaqs];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function FaqList({
  items,
}: {
  items: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-3xl border border-[#eadfda] bg-[#fffdfc] p-6 transition-colors [&[open]]:border-[#d98c9b] [&[open]]:bg-[#faf7f2]"
        >
          <summary className="cursor-pointer list-none text-lg font-medium text-[#292524]">
            <span className="flex items-start justify-between gap-4">
              <span>{item.question}</span>
              <span className="mt-1 text-[#8f3f50] transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>

          <p className="mt-4 leading-8 text-[#6b625c]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              FAQ
            </p>

            <h1 className="mb-6 text-4xl font-light leading-tight text-[#292524] sm:text-5xl">
              Frequently asked questions.
            </h1>

            <p className="text-lg leading-8 text-[#6b625c]">
              Practical answers about massage appointments, comfort, draping,
              payment, packages, manual lymphatic drainage, prenatal massage,
              and pediatric massage at Bodyworks By Elony.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Massage Appointments
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              What to expect before and during your session.
            </h2>
          </div>

          <FaqList items={massageFaqs} />
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Services
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              Choosing the right massage service.
            </h2>
          </div>

          <FaqList items={servicesFaqs} />
        </div>
      </section>

      <section className="bg-[#fffdfc]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Payment & Policies
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#292524]">
              Helpful details before booking.
            </h2>
          </div>

          <FaqList items={policyFaqs} />
        </div>
      </section>

      <section className="bg-[#f7e8e8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f3f50]">
              Still Have Questions?
            </p>

            <h2 className="mb-4 text-3xl font-light leading-tight text-[#292524]">
              Contact Bodyworks By Elony before booking.
            </h2>

            <p className="leading-8 text-[#6b625c]">
              For questions about which service to choose, manual lymphatic
              drainage, prenatal massage, pediatric massage, or appointment
              details, reach out before scheduling.
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
                  href={getBookingUrl("faq_contact_card")}
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
