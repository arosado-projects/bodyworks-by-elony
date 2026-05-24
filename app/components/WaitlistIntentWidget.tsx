"use client";

import React, { useMemo, useState, type HTMLInputTypeAttribute } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CalendarDays,
  CheckCircle2,
  Clock,
  MessageCircle,
  Plus,
  Trash2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type IntentMode = "flexible" | "specific";

type AvailabilityWindow = {
  id: string;
  day: string;
  start: string;
  end: string;
};

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  hasFutureAppointment: "yes" | "no";
  notes: string;
};

const DAYS = ["Monday", "Tuesday", "Thursday", "Friday", "First Saturday"];

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `window_${Date.now()}_${Math.random().toString(36).slice(2)}`;
};

const createDefaultWindows = (): AvailabilityWindow[] => [
  { id: "default-monday", day: "Monday", start: "11:30", end: "14:00" },
  { id: "default-thursday", day: "Thursday", start: "17:00", end: "19:30" }
];

export default function WaitlistIntentWidget() {
  const [intentMode, setIntentMode] = useState<IntentMode>("flexible");
  const [specificDate, setSpecificDate] = useState("");
  const [specificTime, setSpecificTime] = useState("");
  const [specificFlexMinutes, setSpecificFlexMinutes] = useState(30);

  const [windows, setWindows] = useState<AvailabilityWindow[]>(createDefaultWindows);
  const [durations, setDurations] = useState<number[]>([60, 90]);

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    hasFutureAppointment: "no",
    notes: ""
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const phoneDigits = form.phone.replace(/\D/g, "");
  const hasValidPhone = phoneDigits.length === 10 || (phoneDigits.length === 11 && phoneDigits.startsWith("1"));
  const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

  const flexibleWindowsValid =
    intentMode === "flexible" &&
    windows.length > 0 &&
    windows.every((window) => window.day && window.start && window.end && window.start < window.end);

  const specificRequestValid =
    intentMode === "specific" &&
    Boolean(specificDate) &&
    Boolean(specificTime);

  const isFormValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    hasValidPhone &&
    hasValidEmail &&
    durations.length > 0 &&
    (flexibleWindowsValid || specificRequestValid);

  const summary = useMemo(() => {
    const durationSummary = durations.length
      ? durations.map((duration) => `${duration} min`).join(" or ")
      : "no session length selected";

    if (intentMode === "specific") {
      const dateStr = specificDate
        ? new Date(`${specificDate}T00:00:00`).toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric"
          })
        : "no date selected";

      const timeStr = specificTime ? formatTime(specificTime) : "no time selected";

      return `A specific ${durationSummary} opening on ${dateStr} around ${timeStr}, with up to ${specificFlexMinutes} minutes of flexibility.`;
    }

    const daySummary = windows
      .map((window) => `${window.day} ${formatTime(window.start)}–${formatTime(window.end)}`)
      .join(", ");

    return `${durationSummary} openings during: ${daySummary || "no windows selected"}`;
  }, [windows, durations, intentMode, specificDate, specificTime, specificFlexMinutes]);

  const toggleDuration = (duration: number) => {
    setDurations((prev) =>
      prev.includes(duration)
        ? prev.filter((item) => item !== duration)
        : [...prev, duration].sort((a, b) => a - b)
    );
  };

  const addWindow = () => {
    setWindows((prev) => [
      ...prev,
      { id: createId(), day: "Monday", start: "11:30", end: "14:00" }
    ]);
  };

  const updateWindow = (id: string, patch: Partial<AvailabilityWindow>) => {
    setWindows((prev) =>
      prev.map((window) => (window.id === id ? { ...window, ...patch } : window))
    );
  };

  const removeWindow = (id: string) => {
    setWindows((prev) => prev.filter((window) => window.id !== id));
  };

  const handleSubmit = async () => {
    if (!isFormValid || submitStatus === "submitting") return;

    setSubmitStatus("submitting");
    setSubmitMessage("");

    const waitlistPayload = {
      intentMode,
      phone: form.phone,
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      preferences:
        intentMode === "flexible"
          ? {
              windows: windows.map(({ day, start, end }) => ({ day, start, end })),
              durations
            }
          : {
              date: specificDate,
              time: specificTime,
              specificFlexMinutes,
              durations
            },
      notes: form.notes.trim(),
      hasFutureAppointment: form.hasFutureAppointment === "yes"
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(waitlistPayload)
      });

      const result = await res.json().catch(() => null);

      if (!res.ok || !result?.success) {
        throw new Error(result?.error || "Could not join waitlist.");
      }

      setSubmitStatus("success");
      setSubmitMessage(
        result.created === false
          ? "Your waitlist preferences were updated."
          : "You're on the waitlist! We'll text you if a matching opening becomes available."
      );
    } catch (err) {
      console.error("Waitlist signup failed:", err);

      setSubmitStatus("error");
      setSubmitMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf7fb] px-4 py-8 text-[#292524]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6eaf4] shadow-sm">
            <CalendarDays className="h-6 w-6 text-[#7b3f75]" />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Join the Cancellation Waitlist
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#6b625c]">
            Tell us when you would like to be notified. If a matching appointment opens,
            we’ll text you a private booking link.
          </p>
        </div>

        <Card className="mb-5 rounded-2xl border-0 bg-[#fffdfc] shadow-sm">
          <CardContent className="p-5">
            <div className="flex gap-3 text-[#4a2746]">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0" />
              <div>
                <p className="text-sm font-semibold">
                  This does not book an appointment yet.
                </p>
                <p className="mt-1 text-sm text-[#6b625c]">
                  You’ll only receive a text if an opening matches your selected days,
                  time range, and session length.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6 flex rounded-2xl bg-[#f6eaf4] p-1 shadow-inner">
          <button
            type="button"
            onClick={() => setIntentMode("flexible")}
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all ${
              intentMode === "flexible"
                ? "bg-[#fffdfc] text-[#7b3f75] shadow-sm"
                : "text-[#6b625c] hover:text-[#4a2746]"
            }`}
          >
            Flexible Openings
          </button>

          <button
            type="button"
            onClick={() => setIntentMode("specific")}
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all ${
              intentMode === "specific"
                ? "bg-[#fffdfc] text-[#7b3f75] shadow-sm"
                : "text-[#6b625c] hover:text-[#4a2746]"
            }`}
          >
            Specific Date & Time
          </button>
        </div>

        <div className="grid gap-5">
          {intentMode === "flexible" ? (
            <Card className="rounded-2xl border-0 bg-[#fffdfc] shadow-sm">
              <CardContent className="p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold">When are you available?</h2>
                    <p className="text-sm text-[#6b625c]">
                      Add one or more day/time windows.
                    </p>
                  </div>

                  <Button
                    type="button"
                    onClick={addWindow}
                    variant="outline"
                    className="rounded-2xl border-[#ead7e7] text-[#7b3f75] hover:bg-[#f6eaf4]"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add window
                  </Button>
                </div>

                <div className="space-y-3">
                  {windows.map((window) => (
                    <div
                      key={window.id}
                      className="grid grid-cols-1 gap-3 rounded-2xl bg-[#f6eaf4] p-3 md:grid-cols-[1.2fr_1fr_1fr_auto]"
                    >
                      <select
                        value={window.day}
                        onChange={(e) => updateWindow(window.id, { day: e.target.value })}
                        className="rounded-xl border border-[#ead7e7] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#cc97c3]"
                      >
                        {DAYS.map((day) => (
                          <option key={day}>{day}</option>
                        ))}
                      </select>

                      <input
                        type="time"
                        value={window.start}
                        onChange={(e) => updateWindow(window.id, { start: e.target.value })}
                        className="rounded-xl border border-[#ead7e7] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#cc97c3]"
                      />

                      <input
                        type="time"
                        value={window.end}
                        onChange={(e) => updateWindow(window.id, { end: e.target.value })}
                        className="rounded-xl border border-[#ead7e7] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#cc97c3]"
                      />

                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => removeWindow(window.id)}
                        className="text-[#6b625c] hover:text-[#7b3f75]"
                        aria-label="Remove availability window"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="rounded-2xl border-0 bg-[#fffdfc] shadow-sm">
              <CardContent className="p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-[#cc97c3]" />
                  <div>
                    <h2 className="text-xl font-semibold">Which exact slot do you need?</h2>
                    <p className="text-sm text-[#6b625c]">
                      Choose a preferred date/time and how flexible you can be.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <label className="text-sm font-medium text-[#292524]">
                    Requested Date
                    <input
                      type="date"
                      value={specificDate}
                      onChange={(e) => setSpecificDate(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-[#ead7e7] px-3 py-3 outline-none transition-all focus:border-[#cc97c3] focus:ring-2 focus:ring-[#cc97c3]"
                    />
                  </label>

                  <label className="text-sm font-medium text-[#292524]">
                    Preferred Time
                    <input
                      type="time"
                      value={specificTime}
                      onChange={(e) => setSpecificTime(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-[#ead7e7] px-3 py-3 outline-none transition-all focus:border-[#cc97c3] focus:ring-2 focus:ring-[#cc97c3]"
                    />
                  </label>

                  <label className="text-sm font-medium text-[#292524]">
                    Flexibility
                    <select
                      value={specificFlexMinutes}
                      onChange={(e) => setSpecificFlexMinutes(parseInt(e.target.value, 10))}
                      className="mt-1 w-full rounded-xl border border-[#ead7e7] bg-white px-3 py-3 outline-none transition-all focus:border-[#cc97c3] focus:ring-2 focus:ring-[#cc97c3]"
                    >
                      <option value={0}>Exact time only</option>
                      <option value={15}>± 15 minutes</option>
                      <option value={30}>± 30 minutes</option>
                      <option value={60}>± 1 hour</option>
                    </select>
                  </label>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="rounded-2xl border-0 bg-[#fffdfc] shadow-sm">
            <CardContent className="p-5">
              <h2 className="mb-1 text-xl font-semibold">Acceptable session lengths</h2>
              <p className="mb-4 text-sm text-[#6b625c]">
                Choose every length you would be willing to book if it opens.
              </p>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {[30, 60, 90, 120].map((duration) => {
                  const selected = durations.includes(duration);

                  return (
                    <button
                      key={duration}
                      type="button"
                      onClick={() => toggleDuration(duration)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        selected
                          ? "border-[#7b3f75] bg-[#f6eaf4] ring-1 ring-[#7b3f75]"
                          : "border-[#ead7e7] bg-[#fffdfc]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Clock className={`h-5 w-5 ${selected ? "text-[#7b3f75]" : "text-[#6b625c]"}`} />
                        {selected && <CheckCircle2 className="h-5 w-5 text-[#7b3f75]" />}
                      </div>

                      <div className="mt-3 font-semibold">{duration} min</div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 bg-[#fffdfc] shadow-sm">
            <CardContent className="p-5">
              <h2 className="mb-4 text-xl font-semibold">Your contact info</h2>

              <div className="grid gap-3 md:grid-cols-2">
                <Input
                  label="First name"
                  value={form.firstName}
                  onChange={(value) => setForm({ ...form, firstName: value })}
                />

                <Input
                  label="Last name"
                  value={form.lastName}
                  onChange={(value) => setForm({ ...form, lastName: value })}
                />

                <Input
                  label="Mobile phone"
                  type="tel"
                  value={form.phone}
                  onChange={(value) => setForm({ ...form, phone: formatPhoneNumber(value) })}
                  placeholder="(512) 555-0199"
                />

                <Input
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(value) => setForm({ ...form, email: value })}
                />
              </div>

              <div className="mt-4 rounded-2xl bg-[#f6eaf4] p-4">
                <p className="mb-2 text-sm font-medium text-[#292524]">
                  Do you already have a future appointment?
                </p>

                <div className="flex gap-3">
                  {(["no", "yes"] as const).map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setForm({ ...form, hasFutureAppointment: value })}
                      className={`rounded-xl border px-4 py-2 text-sm capitalize ${
                        form.hasFutureAppointment === value
                          ? "border-[#7b3f75] bg-white text-[#7b3f75]"
                          : "border-[#ead7e7] bg-[#fffdfc] text-[#6b625c]"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              <label className="mt-4 block text-sm font-medium text-[#292524]">
                Anything else Elony should know?
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Example: I prefer evenings, but Friday midday can work with notice."
                  className="mt-1 min-h-24 w-full rounded-2xl border border-[#ead7e7] px-3 py-2 outline-none focus:ring-2 focus:ring-[#cc97c3]"
                />
              </label>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 border-[#ead1e5] bg-[#fffdfc] shadow-sm">
            <CardContent className="p-5">
              <h2 className="text-lg font-semibold">Waitlist summary</h2>

              <p className="mt-2 rounded-2xl border border-[#ead1e5] bg-[#f6eaf4] p-4 text-sm text-[#4a2746]">
                {summary}
              </p>

              {submitMessage && (
                <p
                  className={`mt-3 rounded-2xl p-3 text-sm ${
                    submitStatus === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitMessage}
                </p>
              )}

              <Button
                type="button"
                onClick={handleSubmit}
                disabled={!isFormValid || submitStatus === "submitting"}
                className="mt-4 w-full rounded-2xl bg-[#7b3f75] py-6 text-base text-white transition-colors hover:bg-[#4a2746] disabled:bg-[#6b625c] disabled:opacity-50"
              >
                {submitStatus === "submitting" ? "Joining..." : "Join Waitlist"}
              </Button>

              <p className="mt-3 text-center text-xs text-[#6b625c]">
                By joining, you agree to receive texts about matching openings. Reply STOP to opt out.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

function Input({ label, value, onChange, placeholder = "", type = "text" }: InputProps) {
  return (
    <label className="text-sm font-medium text-[#292524]">
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-[#ead7e7] px-3 py-2 outline-none transition-all focus:border-[#cc97c3] focus:ring-2 focus:ring-[#cc97c3]"
      />
    </label>
  );
}

function formatTime(value: string) {
  if (!value) return "";

  const [h, m] = value.split(":").map(Number);
  const hour12 = h % 12 || 12;
  const suffix = h >= 12 ? "pm" : "am";

  return m === 0
    ? `${hour12}${suffix}`
    : `${hour12}:${String(m).padStart(2, "0")}${suffix}`;
}

function formatPhoneNumber(value: string) {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "").slice(0, 10);
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
}
