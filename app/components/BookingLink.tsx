"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type BookingLinkProps = Omit<
  ComponentProps<typeof Link>,
  "href" | "onClick"
> & {
  href: string;
  location: string;
  onClick?: ComponentProps<typeof Link>["onClick"];
};

export default function BookingLink({
  href,
  location,
  children,
  onClick,
  ...props
}: BookingLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    sendGAEvent("event", "book_appointment_click", {
      link_url: href,
      link_text:
        event.currentTarget.textContent?.replace(/\s+/g, " ").trim() ?? "",
      location,
    });
  }

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
