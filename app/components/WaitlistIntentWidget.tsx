"use client";

import React, {
  useMemo,
  useState,
  type HTMLInputTypeAttribute,
  type ReactNode
} from "react";

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
  notes: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

type WaitlistPayload = {
  intentMode: IntentMode;
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  preferences:
    | {
        windows: Array<{
          day: string;
          start: string;
          end: string;
        }>;
        durations: number[];
      }
    | {
        date: string;
        time: string;
        specificFlexMinutes: number;
        durations: number[];
      };
  notes: string;
};

type TimeOption = {
  value: string;
  label: string;
};

const DAYS = ["Monday", "Tuesday", "Thursday", "Friday", "First Saturday"];

const SESSION_LENGTHS: number[] = [30, 60, 90, 120];

const buildTimeOptions = ({
  startHour,
  endHour,
  includeEndHalfHour
}: {
  startHour: number;
  endHour: number;
  includeEndHalfHour: boolean;
}): TimeOption[] => {
  const options: TimeOption[] = [];

  for (let hour24 = startHour; hour24 <= endHour; hour24 += 1) {
    for (const minute of ["00", "30"]) {
      if (
        hour24 === endHour &&
        minute === "30" &&
        includeEndHalfHour === false
      ) {
        continue;
      }

      const value = `${String(hour24).padStart(2, "0")}:${minute}`;
      const hour12 = hour24 % 12 || 12;
      const suffix = hour24 >= 12 ? "PM" : "AM";
      const label = `${hour12}:${minute} ${suffix}`;

      options.push({ value, label });
    }
  }

  return options;
};

const FLEXIBLE_TIME_OPTIONS = buildTimeOptions({
  startHour: 0,
  endHour: 23,
  includeEndHalfHour: true
});

const SPECIFIC_TIME_OPTIONS = buildTimeOptions({
  startHour: 8,
  endHour: 20,
  includeEndHalfHour: false
});

const createId = () => {
  if (
    typeof globalThis.crypto !== "undefined" &&
    "randomUUID" in globalThis.crypto
  ) {
    return globalThis.crypto.randomUUID();
  }

  return `window_${Date.now()}_${Math.random().toString(36).slice(2)}`;
};

const createDefaultWindows = (): AvailabilityWindow[] => [
  { id: "default-monday", day: "Monday", start: "11:30", end: "14:00" },
  { id: "default-thursday", day: "Thursday", start: "17:00", end: "19:30" }
];

export default function WaitlistIntentWidget() {
  const [intentMode, setIntentMode] = useState<IntentMode>("flexible");

  const [specificDate, setSpecificDate] = useState<string>("");
  const [specificTime, setSpecificTime] = useState<string>("");
  const [specificFlexMinutes, setSpecificFlexMinutes] = useState<number>(30);

  const [windows, setWindows] = useState<AvailabilityWindow[]>(
    createDefaultWindows
  );

  const [durations, setDurations] = useState<number[]>([60, 90]);

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    notes: ""
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const phoneDigits = form.phone.replace(/\D/g, "");

  const hasValidPhone =
    phoneDigits.length === 10 ||
    (phoneDigits.length === 11 && phoneDigits.startsWith("1"));

  const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

  const flexibleWindowsValid =
    intentMode === "flexible" &&
    windows.length > 0 &&
    windows.every((window: AvailabilityWindow) => {
      return (
        Boolean(window.day) &&
        Boolean(window.start) &&
        Boolean(window.end) &&
        window.start < window.end
      );
    });

  const specificRequestValid =
    intentMode === "specific" && Boolean(specificDate) && Boolean(specificTime);

  const isFormValid = Boolean(
    form.firstName.trim() &&
      form.lastName.trim() &&
      hasValidPhone &&
      hasValidEmail &&
      durations.length > 0 &&
      (flexibleWindowsValid || specificRequestValid)
  );

  const summary = useMemo(() => {
    const durationSummary = durations.length
      ? durations.map((duration: number) => `${duration} min`).join(" or ")
      : "no session length selected";

    if (intentMode === "specific") {
      const dateStr = specificDate
        ? new Date(`${specificDate}T00:00:00`).toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric"
          })
        : "no date selected";

      const timeStr = specificTime
        ? formatTime(specificTime)
        : "no time selected";

      return `A specific ${durationSummary} opening on ${dateStr} around ${timeStr}, with up to ${specificFlexMinutes} minutes of flexibility.`;
    }

    const daySummary = windows
      .map((window: AvailabilityWindow) => {
        return `${window.day} ${formatTime(window.start)}-${formatTime(
          window.end
        )}`;
      })
      .join(", ");

    return `${durationSummary} openings during: ${
      daySummary || "no windows selected"
    }`;
  }, [
    windows,
    durations,
    intentMode,
    specificDate,
    specificTime,
    specificFlexMinutes
  ]);

  const resetSubmitNotice = () => {
    if (submitStatus === "success" || submitStatus === "error") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  };

  const toggleDuration = (duration: number) => {
    resetSubmitNotice();

    setDurations((prev: number[]) => {
      if (prev.includes(duration)) {
        return prev.filter((item: number) => item !== duration);
      }

      return [...prev, duration].sort((a: number, b: number) => a - b);
    });
  };

  const addWindow = () => {
    resetSubmitNotice();

    setWindows((prev: AvailabilityWindow[]) => [
      ...prev,
      {
        id: createId(),
        day: "Monday",
        start: "11:30",
        end: "14:00"
      }
    ]);
  };

  const updateWindow = (id: string, patch: Partial<AvailabilityWindow>) => {
    resetSubmitNotice();

    setWindows((prev: AvailabilityWindow[]) =>
      prev.map((window: AvailabilityWindow) =>
        window.id === id ? { ...window, ...patch } : window
      )
    );
  };

  const removeWindow = (id: string) => {
    resetSubmitNotice();

    setWindows((prev: AvailabilityWindow[]) =>
      prev.filter((window: AvailabilityWindow) => window.id !== id)
    );
  };

  const updateForm = (patch: Partial<FormState>) => {
    resetSubmitNotice();
    setForm((prev: FormState) => ({ ...prev, ...patch }));
  };

  const handleSubmit = async () => {
    if (!isFormValid || submitStatus === "submitting") return;

    setSubmitStatus("submitting");
    setSubmitMessage("");

    const waitlistPayload: WaitlistPayload = {
      intentMode,
      phone: form.phone,
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      preferences:
        intentMode === "flexible"
          ? {
              windows: windows.map((window: AvailabilityWindow) => ({
                day: window.day,
                start: window.start,
                end: window.end
              })),
              durations
            }
          : {
              date: specificDate,
              time: specificTime,
              specificFlexMinutes,
              durations
            },
      notes: form.notes.trim()
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
        intentMode === "specific"
          ? "This specific waitlist request was saved. You can add another date/time if you would like."
          : result.created === false
            ? "Your flexible waitlist preferences were updated."
            : "You're on the waitlist! We'll text you if a matching opening becomes available."
      );

      if (intentMode === "specific") {
        setSpecificDate("");
        setSpecificTime("");
        setForm((prev: FormState) => ({
          ...prev,
          notes: ""
        }));
      }
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
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6eaf4] text-2xl shadow-sm">
            📅
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Join the Cancellation Waitlist
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#6b625c]">
            Tell us when you would like to be notified. If a matching appointment
            opens, we&apos;ll text you a private booking link.
          </p>
        </div>

        <Section className="mb-5">
          <div className="flex gap-3 text-[#4a2746]">
            <div className="mt-0.5 text-xl" aria-hidden="true">
              💬
            </div>

            <div>
              <p className="text-sm font-semibold">
                This does not book an appointment yet.
              </p>

              <p className="mt-1 text-sm text-[#6b625c]">
                You&apos;ll only receive a text if an opening matches your
                selected days, time range, and session length.
              </p>
            </div>
          </div>
        </Section>

        <div className="mb-6 flex rounded-2xl bg-[#f6eaf4] p-1 shadow-inner">
          <button
            type="button"
            onClick={() => {
              resetSubmitNotice();
              setIntentMode("flexible");
            }}
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
            onClick={() => {
              resetSubmitNotice();
              setIntentMode("specific");
            }}
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all ${
              intentMode === "specific"
                ? "bg-[#fffdfc] text-[#7b3f75] shadow-sm"
                : "text-[#6b625c] hover:text-[#4a2746]"
            }`}
          >
            Specific Date &amp; Time
          </button>
        </div>

        <div className="grid gap-5">
          {intentMode === "flexible" ? (
            <Section>
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold">
                    When are you available?
                  </h2>

                  <p className="text-sm text-[#6b625c]">
                    Add one or more day/time windows.
                  </p>
                </div>

                <ButtonLike type="button" onClick={addWindow} variant="outline">
                  + Add window
                </ButtonLike>
              </div>

              <div className="space-y-3">
                {windows.map((window: AvailabilityWindow) => (
                  <div
                    key={window.id}
                    className="grid grid-cols-1 gap-3 rounded-2xl bg-[#f6eaf4] p-3 md:grid-cols-[1.2fr_1fr_1fr_auto]"
                  >
                    <select
                      value={window.day}
                      onChange={(e) =>
                        updateWindow(window.id, { day: e.target.value })
                      }
                      className="rounded-xl border border-[#ead7e7] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#cc97c3]"
                    >
                      {DAYS.map((day: string) => (
                        <option key={day}>{day}</option>
                      ))}
                    </select>

                    <TimeSelect
                      value={window.start}
                      options={FLEXIBLE_TIME_OPTIONS}
                      onChange={(value: string) =>
                        updateWindow(window.id, { start: value })
                      }
                    />

                    <TimeSelect
                      value={window.end}
                      options={FLEXIBLE_TIME_OPTIONS}
                      onChange={(value: string) =>
                        updateWindow(window.id, { end: value })
                      }
                    />

                    <ButtonLike
                      type="button"
                      onClick={() => removeWindow(window.id)}
                      variant="ghost"
                      ariaLabel="Remove availability window"
                    >
                      Remove
                    </ButtonLike>
                  </div>
                ))}
              </div>
            </Section>
          ) : (
            <Section>
              <div className="mb-4 flex items-center gap-3">
                <div className="text-2xl" aria-hidden="true">
                  📆
                </div>

                <div>
                  <h2 className="text-xl font-semibold">
                    Which exact slot do you need?
                  </h2>

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
                    onChange={(e) => {
                      resetSubmitNotice();
                      setSpecificDate(e.target.value);
                    }}
                    className="mt-1 w-full rounded-xl border border-[#ead7e7] px-3 py-3 outline-none transition-all focus:border-[#cc97c3] focus:ring-2 focus:ring-[#cc97c3]"
                  />
                </label>

                <TimeSelect
                  label="Preferred Time"
                  value={specificTime}
                  options={SPECIFIC_TIME_OPTIONS}
                  onChange={(value: string) => {
                    resetSubmitNotice();
                    setSpecificTime(value);
                  }}
                />

                <label className="text-sm font-medium text-[#292524]">
                  Flexibility
                  <select
                    value={specificFlexMinutes}
                    onChange={(e) => {
                      resetSubmitNotice();
                      setSpecificFlexMinutes(parseInt(e.target.value, 10));
                    }}
                    className="mt-1 w-full rounded-xl border border-[#ead7e7] bg-white px-3 py-3 outline-none transition-all focus:border-[#cc97c3] focus:ring-2 focus:ring-[#cc97c3]"
                  >
                    <option value={0}>Exact time only</option>
                    <option value={30}>+/- 30 minutes</option>
                    <option value={60}>+/- 1 hour</option>
                    <option value={120}>+/- 2 hours</option>
                  </select>
                </label>
              </div>
            </Section>
          )}

          <Section>
            <h2 className="mb-1 text-xl font-semibold">
              Acceptable session lengths
            </h2>

            <p className="mb-4 text-sm text-[#6b625c]">
              Choose every length you would be willing to book if it opens.
            </p>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {SESSION_LENGTHS.map((duration: number) => {
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
                      <span className="text-xl" aria-hidden="true">
                        ⏱️
                      </span>

                      {selected && (
                        <span className="text-[#7b3f75]" aria-hidden="true">
                          ✓
                        </span>
                      )}
                    </div>

                    <div className="mt-3 font-semibold">{duration} min</div>
                  </button>
                );
              })}
            </div>
          </Section>

          <Section>
            <h2 className="mb-4 text-xl font-semibold">Your contact info</h2>

            <div className="grid gap-3 md:grid-cols-2">
              <Input
                label="First name"
                value={form.firstName}
                onChange={(value: string) => updateForm({ firstName: value })}
              />

              <Input
                label="Last name"
                value={form.lastName}
                onChange={(value: string) => updateForm({ lastName: value })}
              />

              <Input
                label="Mobile phone"
                type="tel"
                value={form.phone}
                onChange={(value: string) =>
                  updateForm({ phone: formatPhoneNumber(value) })
                }
                placeholder="(512) 555-0199"
              />

              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={(value: string) => updateForm({ email: value })}
              />
            </div>

            <label className="mt-4 block text-sm font-medium text-[#292524]">
              Anything else Elony should know?
              <textarea
                value={form.notes}
                onChange={(e) => updateForm({ notes: e.target.value })}
                placeholder="Example: I prefer evenings, but Friday midday can work with notice."
                className="mt-1 min-h-24 w-full rounded-2xl border border-[#ead7e7] px-3 py-2 outline-none focus:ring-2 focus:ring-[#cc97c3]"
              />
            </label>
          </Section>

          <Section className="border-2 border-[#ead1e5]">
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

            <ButtonLike
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid || submitStatus === "submitting"}
              variant="primary"
              fullWidth
            >
              {submitStatus === "submitting" ? "Joining..." : "Join Waitlist"}
            </ButtonLike>

            <p className="mt-3 text-center text-xs text-[#6b625c]">
              By joining, you agree to receive texts about matching openings.
              Reply STOP to opt out.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  className?: string;
};

function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`rounded-2xl border-0 bg-[#fffdfc] p-5 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}

type ButtonLikeProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "outline" | "ghost";
  fullWidth?: boolean;
  ariaLabel?: string;
};

function ButtonLike({
  children,
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
  fullWidth = false,
  ariaLabel
}: ButtonLikeProps) {
  const base =
    "rounded-2xl px-4 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50";

  const width = fullWidth ? "mt-4 w-full py-4 text-base" : "";

  const styles: Record<NonNullable<ButtonLikeProps["variant"]>, string> = {
    primary: "bg-[#7b3f75] text-white hover:bg-[#4a2746] disabled:bg-[#6b625c]",
    outline:
      "border border-[#ead7e7] bg-white text-[#7b3f75] hover:bg-[#f6eaf4]",
    ghost: "bg-transparent text-[#6b625c] hover:text-[#7b3f75]"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${base} ${styles[variant]} ${width}`}
    >
      {children}
    </button>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

function Input({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text"
}: InputProps) {
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

type TimeSelectProps = {
  label?: string;
  value: string;
  options: TimeOption[];
  onChange: (value: string) => void;
};

function TimeSelect({ label, value, options, onChange }: TimeSelectProps) {
  const select = (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full rounded-xl border border-[#ead7e7] bg-white px-3 py-3 outline-none transition-all focus:border-[#cc97c3] focus:ring-2 focus:ring-[#cc97c3]"
    >
      <option value="">Select time</option>
      {options.map((option: TimeOption) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  if (!label) return select;

  return (
    <label className="text-sm font-medium text-[#292524]">
      {label}
      {select}
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

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6)}`;
}
