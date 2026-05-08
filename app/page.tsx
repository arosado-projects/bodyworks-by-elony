export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-500">
            Bodyworks by Elony
          </p>

          <h1 className="mb-6 text-5xl font-light leading-tight">
            Therapeutic bodywork designed to support relaxation, mobility,
            recovery, and overall wellness.
          </h1>

          <p className="mb-8 text-lg leading-8 text-stone-600">
            Serving Cedar Park and the greater Austin area with personalized
            massage and bodywork sessions in a calm, welcoming environment.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Book an Appointment
            </a>

            <a
              href="/services"
              className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium transition hover:border-stone-500"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}