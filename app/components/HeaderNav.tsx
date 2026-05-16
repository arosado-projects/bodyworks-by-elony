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
  "font-medium text-bwe-accent-dark underline decoration-bwe-accent underline-offset-8 transition hover:text-bwe-accent-dark";

const inactiveLinkClassName = "text-bwe-muted transition hover:text-bwe-accent-dark";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-bwe-muted"
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
        className="inline-flex items-center justify-center gap-2 rounded-full bg-bwe-accent-dark px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
      >
        <span>Book</span>
        <ExternalLinkIcon />
      </a>
    </nav>
  );
}
