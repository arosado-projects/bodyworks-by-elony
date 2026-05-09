import Link from "next/link";
import { siteConfig } from "../lib/site";

const footerLinks = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Booking",
    href: "/booking",
  },
  {
    label: "About Elony",
    href: "/about",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Policies",
    href: "/policies",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#eadfda] bg-[#faf7f2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="mb-4 text-lg font-medium text-[#292524]">
            {siteConfig.name}
          </h2>

          <p className="max-w-xl text-sm leading-7 text-[#6b625c]">
            Personalized massage and bodywork sessions serving Cedar Park and
            the greater Austin area.
          </p>

          <p className="mt-4 text-sm text-[#6b625c]">
            TDLR Massage Therapy License #{siteConfig.credentials.tdlrLicense}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[#8f3f50]">
            Explore
          </h3>

          <nav aria-label="Footer navigation" className="grid gap-3 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#6b625c] transition hover:text-[#8f3f50]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[#8f3f50]">
            Spread the Word
          </h3>

          <div className="grid gap-3 text-sm">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b625c] transition hover:text-[#8f3f50]"
            >
              Like us on Facebook
            </a>

            <a
              href={siteConfig.social.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b625c] transition hover:text-[#8f3f50]"
            >
              Review us on Google
            </a>

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b625c] transition hover:text-[#8f3f50]"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#eadfda]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-[#6b625c] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>

          <p>Cedar Park, TX · Near Whitestone & Lakeline · Serving Cedar Park, Leander, Liberty Hill, and the surrounding northwest Austin area</p>
        </div>
      </div>
    </footer>
  );
}