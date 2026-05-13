"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../lib/site";

const testimonials = [
  {
    quote: "She has an incredible sense of what my body needs... Her pressure is always on point and kindly checks in to see how I like the pressure.",
    name: "Jacqueline A.",
    context: "Google review",
  },
  {
    quote: "She has the ability to find knots and tension without difficulty. As an athlete and mother, she has been an integral part of my recovery & self-care.",
    name: "Maracujá P.",
    context: "Google review",
  },
  {
    quote: "She is the best! She truly understands my muscles. I always feel great right after!!!",
    name: "Lucy Y.",
    context: "Google review",
  },
  {
    quote: "Elony is good at what she does because she loves the human body and understands it as a dancer.",
    name: "Kimberly F.",
    context: "Google review",
  },
  {
    quote: "She is very professional and makes you feel comfortable during your visit.",
    name: "Sally B.",
    context: "Google review",
  },
  {
    quote: "Elony has a calming and healing energy! I recommend her to anybody I know!",
    name: "Carolyn S.",
    context: "Google review",
  },
  {
    quote: "Elony's massage sessions are heaven! I feel reborn each time and very much look forward to the next session!",
    name: "Jelena R.",
    context: "Google review",
  },
  {
    quote: "Amazing service! [She] was super professional and absolutely worked my sore muscles right back into shape!",
    name: "Jascha R.",
    context: "Google review",
  },
  {
    quote: "Elony listened about my problem areas and went to straight to work on them.",
    name: "DC B.",
    context: "Google review",
  },
  {
    quote: "Elony is amazing! I always leave her place feeling like I'm on cloud 9. She knows how to address any issues my body has that week.",
    name: "Sarah",
    context: "Google review",
  },
  {
    quote: "Elony has changed the game when it comes to massage therapy! I am body drunk in all the best ways possible when I leave her table.",
    name: "Gabriela W.",
    context: "Google review",
  },
  {
    quote: "Elony is very knowledgeable and kind. I had the prenatal massage, she made sure I was comfortable throughout the massage.",
    name: "Rachana C.",
    context: "Google review",
  },
  {
    quote: "After going to get Cupping done... my lower back pain has decreased significantly. Amazing & Professional atmosphere.",
    name: "John S.",
    context: "Google review",
  },
  {
    quote: "She is detail oriented, and really listens to, and cares about her clients, and their wellbeing.",
    name: "Kimberly A.",
    context: "Google review",
  },
  {
    quote: "She aways knows exactly what would benefit me and keeps me out of pain. Her motto literally is: Pain is not a Lifestyle!",
    name: "Modish52",
    context: "Google review",
  },
  {
    quote: "She's professional, knows her craft, and has such a wonderful spirit.",
    name: "Debra H.",
    context: "Google review",
  },
  {
    quote: "She really understands the body and muscle groups and knows how to make your body feel right again.",
    name: "Andy G.",
    context: "Google review",
  },
  {
    quote: "Elony was a lifesaver when I was pregnant with my daughter. She's extremely knowledgeable and professional.",
    name: "Joy H.",
    context: "Google review",
  },
  {
    quote: "Elony is great at tailoring massage for your specific needs... and is really warm and attentive in her approach.",
    name: "Justin W.",
    context: "Google review",
  },
  {
    quote: "Elony has great knowledge of the body and is very compassionate and caring. ... This is self-care at the highest level!",
    name: "Susan M.",
    context: "Google review",
  },
  {
    quote: "Elony is super professional and extremely talented.",
    name: "Matthew B.",
    context: "Google review",
  },
  {
    quote: "Elony, is professional, kind and respectful. I felt comfortable with her technique and skill. Her pressure was firm and consistent.",
    name: "Kendoe M.",
    context: "Google review",
  },
  {
    quote: "Nothing compares to getting body work done by a knowledgeable dancer/movement lover. Love Elony!",
    name: "Laura C.",
    context: "Google review",
  },
  {
    quote: "She listens to you, has great skill in finding knots/sore spots & takes care in resolving them.",
    name: "Carmen V.",
    context: "Google review",
  },
  {
    quote: "Elony is amazing! I was looking for some relief in my neck and shoulders and she does a fantastic job.",
    name: "Ashley C.",
    context: "Google review",
  },
  {
    quote: "She is incredibly professional, friendly, and intuitive... very attentive to how my body is feeling and adjusts her technique perfectly.",
    name: "James B.",
    context: "Google review",
  },
  {
    quote: "Her flow addressed my bodies needs and she listened to what I requested and followed through with an amazing session!",
    name: "Daniella W.",
    context: "Google review",
  },
  {
    quote: "Her space felt like a sanctuary: peaceful, welcoming, and safe. She brings an incredible combination of skill, intuition, and compassion to her work.",
    name: "Brandi D.",
    context: "Google review",
  },
  {
    quote: "Wonderful experience! Unlike any massage I’ve ever had.",
    name: "Margaret C.",
    context: "Google review",
  },
  {
    quote: "Elony knows anatomy well and can target all your aches, as lightly or firmly as you want!",
    name: "Marcie D.",
    context: "Google review",
  },
  {
    quote: "She customizes each treatment to your needs and is holistic in her approach.",
    name: "Robin Y.",
    context: "Google review",
  },
  {
    quote: "I feel like Elony truly worked into my neck/upper body muscle issues... As a 9-5 desk/bench worker this was such a relief",
    name: "Holli D.",
    context: "Google review",
  },
  {
    quote: "She massaged lymph circulation area around from my neck first then to the peripheral areas. I love it. Finally, I can turn my neck to the right side.",
    name: "Naomi Y.",
    context: "Google review",
  },
  {
    quote: "Not only did she focus on my pain areas, but I was also able to really relax... ultimate rejuvenation.",
    name: "Michelle B.",
    context: "Google review",
  },
  {
    quote: "I never realize how much I need the massage therapy she provides until I get up the next day and feel so much better. Amazing is an understatement!",
    name: "Doris V.",
    context: "Google review",
  },
  {
    quote: "She targeted the spots I never thought I needed and this is what separates a good therapist with an extraordinary one such as Elony!",
    name: "Eman S.",
    context: "Google review",
  },
  {
    quote: "I was blown away by her skillful technique and use of trigger points. She has tremendous knowledge of the body and how to release tension.",
    name: "Jessica P.",
    context: "Google review",
  },
  {
    quote: "The studio was calming, and Elony was professional and attentive to my needs.",
    name: "Akshatha M.",
    context: "Google review",
  },
  {
    quote: "She asks detailed questions before each session and is clearly very knowledgeable in human anatomy and biomechanics.",
    name: "Ginger R.",
    context: "Google review",
  },
  {
    quote: "Hands down the BEST massage I’ve ever had. Elony is so professional but still personable.",
    name: "Whitney J.",
    context: "Google review",
  },
  {
    quote: "She creates an extremely relaxing and welcoming environment",
    name: "Wesley H.",
    context: "Google review",
  },
  {
    quote: "She works on my 8-year-old, and my daughter feels heard, respected and supported.",
    name: "Pyper T.",
    context: "Google review",
  }
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
