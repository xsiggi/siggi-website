import type { Metadata } from "next";
import Investments from "./Investments";

export const metadata: Metadata = {
  title: "Fjárfestingar | Stoðir",
  openGraph: {
    title: "Fjárfestingar | Stoðir",
  },
};

export default function Page() {
  return <Investments />;
}
