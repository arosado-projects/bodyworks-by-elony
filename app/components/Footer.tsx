import { siteConfig } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-stone-900">
            {siteConfig.name}
          </h2>

          <p className="max-w-xl text-sm leading-7 text-stone-600">
            Personalized massage and bodywork sessions serving Cedar Park and
            the greater Austin area.
          </p>

          <p className="text-sm text-stone-500">
            TDLR Massage Therapy License #{siteConfig.credentials.tdlrLicense}
          </p>

          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}