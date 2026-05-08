import { siteConfig } from "../lib/site";

export default function BookingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-500">
          Booking
        </p>

        <h1 className="mb-6 text-4xl font-light text-stone-900">
          Book an Appointment
        </h1>

        <p className="mb-8 text-lg leading-8 text-stone-600">
          Scheduling is handled through Acuity. You can view current
          availability, choose a service, and book your appointment securely
          online.
        </p>

        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Continue to Online Booking
        </a>
      </div>
    </main>
  );
}