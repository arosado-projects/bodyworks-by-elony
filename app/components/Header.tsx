import Link from "next/link";
import { siteConfig } from "../lib/site";

const navItems = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="border-b border-[#eadfda] bg-[#fffdfc]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-lg font-medium tracking-wide text-[#292524] transition hover:text-[#8f3f50]"
        >
          {siteConfig.name}
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#6b625c]"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#8f3f50]"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#8f3f50] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book
          </a>
        </nav>
      </div>
    </header>
  );
}