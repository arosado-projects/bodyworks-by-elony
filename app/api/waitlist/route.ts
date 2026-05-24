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
  hasFutureAppointment: boolean;
  notes?: string;
  joinedAt?: string;
};

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

function sanitizePayload(input: any): WaitlistPayload {
  const intentMode = input.intentMode === "specific" ? "specific" : "flexible";
  const phone = normalizePhoneToE164US(input.phone);

  const durations = Array.isArray(input.preferences?.durations)
    ? input.preferences.durations
        .map((d: unknown) => parseInt(String(d), 10))
        .filter((d: number) => [30, 60, 90, 120].includes(d))
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
      hasFutureAppointment: Boolean(input.hasFutureAppointment),
      notes: String(input.notes || "").trim().slice(0, 500),
      joinedAt: new Date().toISOString()
    };
  }

  const date = String(input.preferences?.date || "");
  const time = String(input.preferences?.time || "");

  if (!date || !time) {
    throw new Error("Choose a specific date and time.");
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
      specificFlexMinutes: parseInt(String(input.preferences?.specificFlexMinutes || 30), 10)
    },
    hasFutureAppointment: Boolean(input.hasFutureAppointment),
    notes: String(input.notes || "").trim().slice(0, 500),
    joinedAt: new Date().toISOString()
  };
}

function signPayload(payload: WaitlistPayload, secret: string) {
  const timestamp = new Date().toISOString();
  const payloadB64 = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");

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
