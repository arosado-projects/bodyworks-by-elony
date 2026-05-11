import Link from "next/link";
import { siteConfig } from "../lib/site";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Booking", href: "/booking" },
  { label: "About Elony", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Policies", href: "/policies" },
  { label: "Contact", href: "/contact" },
];

function FacebookIcon() {
  return (
    <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bwe-soft text-xs font-bold text-bwe-accent-dark">
      f
    </span>
  );
}

function GoogleIcon() {
  return (
    <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bwe-soft text-xs font-bold text-bwe-accent-dark">
      G
    </span>
  );
}

function InstagramIcon() {
  return (
    <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bwe-soft text-bwe-accent-dark">
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
      </svg>
    </span>
  );
}

const socialLinks = [
  { label: "Like us on Facebook", href: siteConfig.social.facebook, icon: <FacebookIcon /> },
  { label: "Review us on Google", href: siteConfig.social.googleReview, icon: <GoogleIcon /> },
  { label: "Follow us on Instagram", href: siteConfig.social.instagram, icon: <InstagramIcon /> },
];

export default function Footer() {
  return (
    <footer className="border-t border-bwe-border bg-bwe-page">
      {/* Updated Grid Layout to fit 4 columns on large screens */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_0.6fr_0.8fr]">
        
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="mb-4 text-lg font-medium text-bwe-text">
            {siteConfig.name}
          </h2>
          <p className="max-w-xl text-sm leading-7 text-bwe-muted">
            Personalized massage and bodywork sessions serving {siteConfig.location.shortServiceArea}, and nearby communities.
          </p>
          <p className="mt-4 text-sm text-bwe-muted">
            TDLR Massage Therapy License #{siteConfig.credentials.tdlrLicense}
          </p>
        </div>

        {/* Column 2: Hours (NEW) */}
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-bwe-accent-dark">
            Hours
          </h3>
          <dl className="grid gap-2 text-sm text-bwe-muted">
            {siteConfig.businessHours.display.map((item) => (
              <div key={item.day} className="flex justify-between gap-4">
                <dt className="text-bwe-text">{item.day}</dt>
                <dd className="text-right">{item.hours}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-[11px] text-bwe-muted">
            {siteConfig.businessHours.note}
          </p>
        </div>

        {/* Column 3: Navigation */}
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-bwe-accent-dark">
            Explore
          </h3>
          <nav aria-label="Footer navigation" className="grid gap-3 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-bwe-muted transition hover:text-bwe-accent-dark"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 4: Social */}
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-bwe-accent-dark">
            Spread the Word
          </h3>
          <div className="grid gap-3 text-sm">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-bwe-muted transition hover:text-bwe-accent-dark"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-bwe-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-bwe-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>Cedar Park, TX · Near {siteConfig.location.landmark}</p>
        </div>
      </div>
    </footer>
  );
}