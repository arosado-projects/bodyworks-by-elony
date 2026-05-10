import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./HeaderNav";
import { siteConfig } from "../lib/site";

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

        <HeaderNav />
      </div>
    </header>
  );
}
