import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type WaitlistPayload = {
  intentMode: "flexible" | "specific";
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  preferences: {
    durations: number[];
    windows?: Array<{
      id?: string;
      day: string;
      start: string;
      end: string;
    }>;
    date?: string;
    time?: string;
    specificFlexMinutes?: number;
  };
  notes?: string;
  joinedAt?: string;
  expiresAt: string;
  expiresPolicy: "flexible_28_days" | "specific_plus_24h";
};

const ALLOWED_DURATIONS = [30, 60, 90, 120];
const ALLOWED_SPECIFIC_FLEX_MINUTES = [0, 30, 60, 120];
const FLEXIBLE_WAITLIST_DAYS = 28;
const WAITLIST_TIME_ZONE = "America/Chicago";

function normalizePhoneToE164US(value: string): string {
  const digits = String(value || "").replace(/\D/g, "");

  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  return "";
}

function isHalfHourTime(value: string): boolean {
  return /^([01]\d|2[0-3]):(00|30)$/.test(String(value || "").trim());
}

function timeToMinutes(value: string): number {
  const [hour, minute] = value.split(":").map((part) => parseInt(part, 10));
  return hour * 60 + minute;
}

function isSpecificTimeInAllowedRange(value: string): boolean {
  if (!isHalfHourTime(value)) return false;

  const minutes = timeToMinutes(value);
  return minutes >= 8 * 60 && minutes <= 20 * 60;
}

function addDays(date: Date, days: number): Date {
  const copy = new Date(date);
  copy.setUTCDate(copy.getUTCDate() + days);
  return copy;
}

function getTimeZoneOffsetMs(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(date);

  const values: Record<string, string> = {};

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  const year = parseInt(values.year, 10);
  const month = parseInt(values.month, 10);
  const day = parseInt(values.day, 10);
  const hour = values.hour === "24" ? 0 : parseInt(values.hour, 10);
  const minute = parseInt(values.minute, 10);
  const second = parseInt(values.second, 10);

  const utcFromParts = Date.UTC(year, month - 1, day, hour, minute, second);

  return utcFromParts - date.getTime();
}

function localDateTimeToUtc(
  date: string,
  time: string,
  timeZone = WAITLIST_TIME_ZONE
): Date {
  const [year, month, day] = date.split("-").map((part) => parseInt(part, 10));
  const [hour, minute] = time.split(":").map((part) => parseInt(part, 10));

  const guessedUtc = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  const offsetMs = getTimeZoneOffsetMs(guessedUtc, timeZone);
  const correctedUtc = new Date(guessedUtc.getTime() - offsetMs);

  const secondOffsetMs = getTimeZoneOffsetMs(correctedUtc, timeZone);

  if (secondOffsetMs !== offsetMs) {
    return new Date(guessedUtc.getTime() - secondOffsetMs);
  }

  return correctedUtc;
}

function getFlexibleExpiresAt(): string {
  return addDays(new Date(), FLEXIBLE_WAITLIST_DAYS).toISOString();
}

function getSpecificExpiresAt(date: string, time: string): string {
  return addDays(localDateTimeToUtc(date, time), 1).toISOString();
}

function parseSpecificFlexMinutes(value: unknown): number {
  if (value === undefined || value === null || value === "") {
    return 30;
  }

  return parseInt(String(value), 10);
}

function sanitizePayload(input: any): WaitlistPayload {
  const intentMode = input.intentMode === "specific" ? "specific" : "flexible";
  const phone = normalizePhoneToE164US(input.phone);

  const durations = Array.isArray(input.preferences?.durations)
    ? input.preferences.durations
        .map((d: unknown) => parseInt(String(d), 10))
        .filter((d: number) => ALLOWED_DURATIONS.includes(d))
    : [];

  if (!input.firstName || !input.lastName || !input.email || !phone) {
    throw new Error("Missing required contact fields.");
  }

  if (durations.length === 0) {
    throw new Error("Select at least one session length.");
  }

  if (intentMode === "flexible") {
    const windows = Array.isArray(input.preferences?.windows)
      ? input.preferences.windows.map((w: any) => ({
          day: String(w.day || ""),
          start: String(w.start || ""),
          end: String(w.end || "")
        }))
      : [];

    if (windows.length === 0) {
      throw new Error("Add at least one availability window.");
    }

    for (const window of windows) {
      if (!window.day || !window.start || !window.end) {
        throw new Error("Each availability window needs a day, start, and end time.");
      }

      if (!isHalfHourTime(window.start) || !isHalfHourTime(window.end)) {
        throw new Error("Availability times must be in 30-minute increments.");
      }

      if (window.start >= window.end) {
        throw new Error("Availability start time must be before end time.");
      }
    }

    return {
      intentMode,
      firstName: String(input.firstName).trim(),
      lastName: String(input.lastName).trim(),
      phone,
      email: String(input.email).trim().toLowerCase(),
      preferences: {
        durations,
        windows
      },
      notes: String(input.notes || "").trim().slice(0, 500),
      joinedAt: new Date().toISOString(),
      expiresAt: getFlexibleExpiresAt(),
      expiresPolicy: "flexible_28_days"
    };
  }

  const date = String(input.preferences?.date || "");
  const time = String(input.preferences?.time || "");
  const specificFlexMinutes = parseSpecificFlexMinutes(
    input.preferences?.specificFlexMinutes
  );

  if (!date || !time) {
    throw new Error("Choose a specific date and time.");
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error("Specific date must be YYYY-MM-DD.");
  }

  if (!isSpecificTimeInAllowedRange(time)) {
    throw new Error("Specific time must be between 8:00 AM and 8:00 PM in 30-minute increments.");
  }

  if (!ALLOWED_SPECIFIC_FLEX_MINUTES.includes(specificFlexMinutes)) {
    throw new Error("Specific flexibility must be exact, +/-30 minutes, +/-1 hour, or +/-2 hours.");
  }

  return {
    intentMode,
    firstName: String(input.firstName).trim(),
    lastName: String(input.lastName).trim(),
    phone,
    email: String(input.email).trim().toLowerCase(),
    preferences: {
      durations,
      date,
      time,
      specificFlexMinutes
    },
    notes: String(input.notes || "").trim().slice(0, 500),
    joinedAt: new Date().toISOString(),
    expiresAt: getSpecificExpiresAt(date, time),
    expiresPolicy: "specific_plus_24h"
  };
}

function signPayload(payload: WaitlistPayload, secret: string) {
  const timestamp = new Date().toISOString();
  const payloadB64 = Buffer.from(JSON.stringify(payload), "utf8").toString(
    "base64url"
  );

  const signature = crypto
    .createHmac("sha256", secret)
    .update(`${timestamp}.${payloadB64}`)
    .digest("hex");

  return {
    timestamp,
    payload: payloadB64,
    signature
  };
}

export async function POST(request: NextRequest) {
  try {
    const secret = process.env.WAITLIST_INGEST_SECRET;
    const twilioUrl = process.env.TWILIO_WAITLIST_INGEST_URL;

    if (!secret || !twilioUrl) {
      return NextResponse.json(
        { success: false, error: "Waitlist API is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const payload = sanitizePayload(body);
    const signedBody = signPayload(payload, secret);

    const twilioResponse = await fetch(twilioUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signedBody)
    });

    const result = await twilioResponse.json().catch(() => null);

    if (!twilioResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: result?.error || "Could not join waitlist."
        },
        { status: twilioResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      created: result?.created ?? null
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: err.message || "Invalid waitlist request."
      },
      { status: 400 }
    );
  }
}
