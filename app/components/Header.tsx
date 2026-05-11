import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./HeaderNav";
import { siteConfig } from "../lib/site";

export default function Header() {
  return (
    <header className="border-b border-bwe-border bg-bwe-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-medium tracking-wide text-bwe-text transition hover:text-bwe-accent-dark"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bwe-soft">
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

        <HeaderNav />
      </div>
    </header>
  );
}
