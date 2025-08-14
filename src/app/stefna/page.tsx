import type { Metadata } from "next";
import Strategy from "./Strategy";

export const metadata: Metadata = {
  title: "Stefna | Stoðir",
  openGraph: {
    title: "Stefna | Stoðir",
  },
};

export default function Page() {
  return <Strategy />;
}
