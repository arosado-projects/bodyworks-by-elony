"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBookingUrl } from "../lib/site";
import ExternalLinkIcon from "./ExternalLinkIcon";

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

const activeLinkClassName =
  "font-medium text-[#8f3f50] underline decoration-[#d98c9b] underline-offset-8 transition hover:text-[#8f3f50]";

const inactiveLinkClassName = "text-[#6b625c] transition hover:text-[#8f3f50]";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#6b625c]"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={isActive ? activeLinkClassName : inactiveLinkClassName}
          >
            {item.label}
          </Link>
        );
      })}

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
  );
}
