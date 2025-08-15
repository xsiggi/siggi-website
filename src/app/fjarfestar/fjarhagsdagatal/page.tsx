import type { Metadata } from "next";
import FinancialCalendar from "./FinancialCalendar";

export const metadata: Metadata = {
  title: "Fjárhagsdagatal | Stoðir",
  openGraph: {
    title: "Fjárhagsdagatal | Stoðir",
  },
};

export default function Page() {
  return <FinancialCalendar />;
}
