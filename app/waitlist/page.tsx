import { notFound } from "next/navigation";
import WaitlistIntentWidget from "../components/WaitlistIntentWidget";

export default function WaitlistPage() {
  if (process.env.WAITLIST_PAGE_ENABLED !== "true") {
    notFound();
  }

  return <WaitlistIntentWidget />;
}
