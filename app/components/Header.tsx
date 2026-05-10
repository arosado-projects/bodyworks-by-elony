import Image from "next/image";
import Link from "next/link";
import ExternalLinkIcon from "./ExternalLinkIcon";
import { getBookingUrl, siteConfig } from "../lib/site";

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
    label: "Booking",
    href: "/booking",
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
          className="flex items-center gap-3 text-lg font-medium tracking-wide text-[#292524] transition hover:text-[#8f3f50]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7e8e8]">
            <Image
              src="/images/bbe-logo-rose.png"
              alt=""
              width={32}
              height={42}
              className="h-9 w-auto"
              priority
            />
          </span>

          <span>{siteConfig.name}</span>
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
            href={getBookingUrl("header_book")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8f3f50] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            <span>Book</span>
            <ExternalLinkIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}