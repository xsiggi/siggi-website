import type { Metadata } from "next";
import Market from "./Market";

export const metadata: Metadata = {
  title: "Markaðsupplýsingar | Stoðir",
  openGraph: {
    title: "Markaðsupplýsingar | Stoðir",
  },
};

export default function Page() {
  return <Market />;
}
