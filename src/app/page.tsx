import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Siggi's website",
  openGraph: {
    title: "Siggi's website",
    description:
      "This is my personal website where I share my projcects and accomplishments.",
    locale: "en",
    type: "website",
  },
  description:
    "This is my personal website where I share my projcects and accomplishments.",
};

export default async function Page() {
  return <HomePage />;
}
