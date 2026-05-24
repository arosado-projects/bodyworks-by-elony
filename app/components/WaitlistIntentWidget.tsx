"use client";

import React, { useMemo, useState } from "react";
type SimpleIconProps = {
  className?: string;
};

type SimpleWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

type SimpleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
};

function Icon({ children, className = "" }: SimpleWrapperProps) {
  return <span className={className} aria-hidden="true">{children}</span>;
}

function CalendarDays({ className = "" }: SimpleIconProps) {
  return <Icon className={className}>📅</Icon>;
}

function MessageCircle({ className = "" }: SimpleIconProps) {
  return <Icon className={className}>💬</Icon>;
}

function Clock({ className = "" }: SimpleIconProps) {
  return <Icon className={className}>⏱️</Icon>;
}

function Plus({ className = "" }: SimpleIconProps) {
  return <Icon className={className}>+</Icon>;
}

function Trash2({ className = "" }: SimpleIconProps) {
  return <Icon className={className}>×</Icon>;
}

function CheckCircle2({ className = "" }: SimpleIconProps) {
  return <Icon className={className}>✓</Icon>;
}

function Card({ children, className = "" }: SimpleWrapperProps) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }: SimpleWrapperProps) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className = "", type = "button", variant: _variant, ...buttonProps }: SimpleButtonProps) {
  return (
    <button type={type} className={className} {...buttonProps}>
      {children}
    </button>
  );
}

const DAYS = ["Monday", "Tuesday", "Thursday", "Friday", "First Saturday"];

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `window_${Date.now()}_${Math.random().toString(36).slice(2)}`;
};

const createDefaultWindows = () => [
  { id: "default-monday", day: "Monday", start: "11:30", end: "14:00" },
  { id: "default-thursday", day: "Thursday", start: "17:00", end: "19:30" }
];

export default function WaitlistIntentWidget() {
  const [intentMode, setIntentMode] = useState("flexible"); // "flexible" or "specific"
  const [specificDate, setSpecificDate] = useState("");
  const [specificTime, setSpecificTime] = useState("");
  
  const [windows, setWindows] = useState(createDefaultWindows);
  const [durations, setDurations] = useState([60, 90]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    hasFutureAppointment: "no",
    notes: ""
  });

  const isFormValid = 
    form.firstName && 
    form.lastName && 
    form.phone && 
    form.email && 
    durations.length > 0 &&
    (intentMode === "flexible" || (intentMode === "specific" && specificDate && specificTime));

  const summary = useMemo(() => {
    const durationSummary = durations.length ? durations.map(d => `${d} min`).join(" or ") : "no session length selected";
    
    if (intentMode === "specific") {
      const dateStr = specificDate ? new Date(specificDate + "T00:00:00").toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }) : "no date selected";
      const timeStr = specificTime ? formatTime(specificTime) : "no time selected";
      return `A specific ${durationSummary} opening on ${dateStr} at ${timeStr}.`;
    } else {
      const daySummary = windows.map(w => `${w.day} ${formatTime(w.start)}–${formatTime(w.end)}`).join(", ");
      return `${durationSummary} openings during: ${daySummary || "no windows selected"}`;
    }
  }, [windows, durations, intentMode, specificDate, specificTime]);

  const toggleDuration = (duration) => {
    setDurations(prev =>
      prev.includes(duration)
        ? prev.filter(d => d !== duration)
        : [...prev, duration].sort((a, b) => a - b)
    );
  };

  const addWindow = () => {
    setWindows(prev => [
      ...prev,
      { id: createId(), day: "Monday", start: "11:30", end: "14:00" }
    ]);
  };

  const updateWindow = (id, patch) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, ...patch } : w));
  };

  const removeWindow = (id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;
    const normalizedPhone = "+1" + form.phone.replace(/\D/g, "");
    
    const waitlistPayload = {
      intentMode,
      phone: normalizedPhone,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      preferences: intentMode === "flexible" 
        ? { windows, durations } 
        : { date: specificDate, time: specificTime, durations },
      notes: form.notes,
      hasFutureAppointment: form.hasFutureAppointment === "yes",
      joinedAt: new Date().toISOString()
    };
    
    console.log("Submitting payload:", waitlistPayload);
  };

  return (
    <div className="min-h-screen bg-[#fcf7fb] px-4 py-8 text-[#292524]">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6eaf4] shadow-sm">
            <CalendarDays className="h-6 w-6 text-[#7b3f75]" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">Join the Cancellation Waitlist</h1>
        </div>

        <Card className="mb-5 rounded-2xl border-0 shadow-sm bg-[#fffdfc]">
          <CardContent className="p-5">
            <div className="flex gap-3 text-[#4a2746]">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0" />
              <p className="text-sm font-medium">You’ll only receive a text if an opening matches your specific criteria.</p>
            </div>
          </CardContent>
        </Card>

        {/* Intent Mode Toggle */}
        <div className="mb-6 flex rounded-2xl bg-[#f6eaf4] p-1 shadow-inner">
          <button 
            onClick={() => setIntentMode("flexible")} 
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all ${intentMode === "flexible" ? "bg-[#fffdfc] text-[#7b3f75] shadow-sm" : "text-[#6b625c] hover:text-[#4a2746]"}`}
          >
            Flexible Openings
          </button>
          <button 
            onClick={() => setIntentMode("specific")} 
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all ${intentMode === "specific" ? "bg-[#fffdfc] text-[#7b3f75] shadow-sm" : "text-[#6b625c] hover:text-[#4a2746]"}`}
          >
            Specific Date & Time
          </button>
        </div>

        <div className="grid gap-5">
          {/* Dynamic Availability Card */}
          {intentMode === "flexible" ? (
            <Card className="rounded-2xl border-0 shadow-sm bg-[#fffdfc]">
              <CardContent className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">When are you available?</h2>
                  <Button onClick={addWindow} variant="outline" className="rounded-2xl border-[#ead7e7] text-[#7b3f75] hover:bg-[#f6eaf4]">
                    <Plus className="mr-2 h-4 w-4" /> Add window
                  </Button>
                </div>

                <div className="space-y-3">
                  {windows.map((window) => (
                    <div key={window.id} className="grid grid-cols-1 gap-3 rounded-2xl bg-[#f6eaf4] p-3 md:grid-cols-[1.2fr_1fr_1fr_auto]">
                      <select value={window.day} onChange={(e) => updateWindow(window.id, { day: e.target.value })} className="rounded-xl border-[#ead7e7] px-3 py-2 focus:ring-2 focus:ring-[#cc97c3] outline-none">
                        {DAYS.map(day => <option key={day}>{day}</option>)}
                      </select>
                      <input type="time" value={window.start} onChange={(e) => updateWindow(window.id, { start: e.target.value })} className="rounded-xl border-[#ead7e7] px-3 py-2 focus:ring-2 focus:ring-[#cc97c3] outline-none" />
                      <input type="time" value={window.end} onChange={(e) => updateWindow(window.id, { end: e.target.value })} className="rounded-xl border-[#ead7e7] px-3 py-2 focus:ring-2 focus:ring-[#cc97c3] outline-none" />
                      <Button variant="ghost" onClick={() => removeWindow(window.id)} className="text-[#6b625c] hover:text-[#7b3f75]"><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="rounded-2xl border-0 shadow-sm bg-[#fffdfc]">
              <CardContent className="p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-[#cc97c3]" />
                  <h2 className="text-xl font-semibold">Which exact slot do you need?</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm font-medium text-[#292524]">
                    Requested Date
                    <input 
                      type="date" 
                      value={specificDate} 
                      onChange={(e) => setSpecificDate(e.target.value)} 
                      className="mt-1 w-full rounded-xl border border-[#ead7e7] px-3 py-3 focus:border-[#cc97c3] focus:ring-2 focus:ring-[#cc97c3] transition-all outline-none" 
                    />
                  </label>
                  <label className="text-sm font-medium text-[#292524]">
                    Preferred Time
                    <input 
                      type="time" 
                      value={specificTime} 
                      onChange={(e) => setSpecificTime(e.target.value)} 
                      className="mt-1 w-full rounded-xl border border-[#ead7e7] px-3 py-3 focus:border-[#cc97c3] focus:ring-2 focus:ring-[#cc97c3] transition-all outline-none" 
                    />
                  </label>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Session Durations Card */}
          <Card className="rounded-2xl border-0 shadow-sm bg-[#fffdfc]">
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold mb-4">Acceptable session lengths</h2>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {[30, 60, 90, 120].map(duration => {
                  const selected = durations.includes(duration);
                  return (
                    <button key={duration} type="button" onClick={() => toggleDuration(duration)} className={`rounded-2xl border p-4 text-left transition ${selected ? "border-[#7b3f75] bg-[#f6eaf4] ring-1 ring-[#7b3f75]" : "border-[#ead7e7] bg-[#fffdfc]"}`}>
                      <div className="flex justify-between items-center">
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

          {/* Contact Info Card */}
          <Card className="rounded-2xl border-0 shadow-sm bg-[#fffdfc]">
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold mb-4">Your contact info</h2>
              <div className="grid gap-3 md:grid-cols-2">
                <Input label="First name" value={form.firstName} onChange={v => setForm({ ...form, firstName: v })} />
                <Input label="Last name" value={form.lastName} onChange={v => setForm({ ...form, lastName: v })} />
                <Input label="Mobile phone" type="tel" value={form.phone} onChange={v => setForm({ ...form, phone: formatPhoneNumber(v) })} placeholder="(512) 555-0199" />
                <Input label="Email" type="email" value={form.email} onChange={v => setForm({ ...form, email: v })} />
              </div>
              <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Anything else Elony should know?" className="mt-4 w-full rounded-2xl border border-[#ead7e7] px-3 py-2 focus:ring-2 focus:ring-[#cc97c3] outline-none" />
            </CardContent>
          </Card>

          {/* Summary Card */}
          <Card className="rounded-2xl border-0 shadow-sm border-2 border-[#ead1e5] bg-[#fffdfc]">
            <CardContent className="p-5">
              <h2 className="text-lg font-semibold">Waitlist summary</h2>
              <p className="mt-2 rounded-2xl bg-[#f6eaf4] p-4 text-sm text-[#4a2746] border border-[#ead1e5]">{summary}</p>
              <Button onClick={handleSubmit} disabled={!isFormValid} className="mt-4 w-full rounded-2xl py-6 bg-[#7b3f75] hover:bg-[#4a2746] disabled:opacity-50 disabled:bg-[#6b625c] text-white transition-colors">
                Join Waitlist
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// --- UTILITY COMPONENTS & FUNCTIONS ---

function Input({ label, value, onChange, placeholder = "", type = "text" }) {
  return (
    <label className="text-sm font-medium text-[#292524]">
      {label}
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="mt-1 w-full rounded-xl border border-[#ead7e7] px-3 py-2 focus:border-[#cc97c3] focus:ring-2 focus:ring-[#cc97c3] transition-all outline-none" />
    </label>
  );
}

function formatTime(value) {
  if (!value) return "";
  const [h, m] = value.split(":").map(Number);
  const hour12 = h % 12 || 12;
  const suffix = h >= 12 ? "pm" : "am";
  return m === 0 ? `${hour12}${suffix}` : `${hour12}:${String(m).padStart(2, "0")}${suffix}`;
}

function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

