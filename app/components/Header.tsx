export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-medium tracking-wide text-stone-900">
          Bodyworks by Elony
        </a>

        <nav className="flex items-center gap-6 text-sm text-stone-700">
          <a href="/services" className="hover:text-stone-900">
            Services
          </a>

          <a href="/pricing" className="hover:text-stone-900">
            Pricing
          </a>

          <a href="/about" className="hover:text-stone-900">
            About
          </a>

          <a href="/faq" className="hover:text-stone-900">
            FAQ
          </a>

          <a
            href="#"
            className="rounded-full bg-stone-900 px-4 py-2 text-white transition hover:bg-stone-700"
          >
            Book
          </a>
        </nav>
      </div>
    </header>
  );
}