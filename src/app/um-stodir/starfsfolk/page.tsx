import type { Metadata } from "next";
import Staff from "./Staff";

export const metadata: Metadata = {
  title: "Starfsfólk | Stoðir",
  openGraph: {
    title: "Starfsfólk | Stoðir",
  },
};

export default function Page() {
  return <Staff />;
}
