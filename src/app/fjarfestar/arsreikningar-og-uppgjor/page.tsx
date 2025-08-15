import type { Metadata } from "next";
import AnnualReport from "./AnnualReport";

export const metadata: Metadata = {
  title: "Ársreikningar og uppgjör | Stoðir",
  openGraph: {
    title: "Ársreikningar og uppgjör | Stoðir",
  },
};

export default function Page() {
  return <AnnualReport />;
}
