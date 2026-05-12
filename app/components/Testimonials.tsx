"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../lib/site";

const testimonials = [
  {
    quote: "Her space felt like a sanctuary: peaceful, welcoming, and safe.",
    name: "Brandi D.",
    context: "Prenatal massage client",
  },
  {
    quote: "Elony is incredibly professional, friendly, and intuitive.",
    name: "James B.",
    context: "Google review",
  },
  {
    quote:
      "She listened to what I requested and addressed what my body needed.",
    name: "Daniella W.",
    context: "Google review",
  },
  {
    quote:
      "I was looking for some relief in my neck and shoulders, and she does a fantastic job.",
    name: "Ashley C.",
    context: "Google review",
  },
  {
    quote:
      "Elony has a calming and healing energy! I recommend her to anybody I know!",
    name: "Carolyn S.",
    context: "Google review",
  },
  {
    quote:
      "As an athlete and mother, she has been an integral part of my recovery & self-care.",
    name: "Maracujá P.",
    context: "Google review",
  },
  {
    quote:
      "She listens to you, has great skill in finding knots/sore spots & takes care in resolving them.",
      name: "Carmen V.",
      context: "Google review"
  },
];

function pickRandomTestimonials<T>(items: T[], count: number) {
  return [...items].sort(() => Math.random() - 0.5).slice(0, count);
}

export default function Testimonials() {
  const [selectedTestimonials, setSelectedTestimonials] = useState(
    testimonials.slice(0, 3),
  );

  useEffect(() => {
    setSelectedTestimonials(pickRandomTestimonials(testimonials, 3));
  }, []);

  return (
    <section className="bg-bwe-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-bwe-accent-dark">
            Kind Words from Clients
          </p>

          <h2 className="text-3xl font-light text-bwe-text sm:text-4xl">
            Kind words from people who have been on the table.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {selectedTestimonials.map((testimonial) => (
            <figure
              key={`${testimonial.name}-${testimonial.quote}`}
              className="rounded-3xl border border-bwe-border bg-bwe-page p-6"
            >
              <blockquote className="leading-8 text-bwe-text">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-6 border-t border-bwe-border pt-4">
                <p className="font-medium text-bwe-text">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-bwe-muted">
                  {testimonial.context}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={siteConfig.social.googleReviewsRead}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-bwe-accent-dark underline decoration-bwe-accent underline-offset-4 hover:decoration-bwe-accent-dark"
          >
            View more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}