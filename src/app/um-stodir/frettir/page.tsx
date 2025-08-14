import type { Metadata } from "next";
import News from "./News";

export const metadata: Metadata = {
  title: "Fréttir | Stoðir",
  openGraph: {
    title: "Fréttir | Stoðir",
  },
};

export default function Page() {
  return <News />;
}
