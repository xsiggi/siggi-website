import type { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "Um Stoðir | Stoðir",
  openGraph: {
    title: "Um Stoðir | Stoðir",
  },
};

export default function Page() {
  return <About />;
}
