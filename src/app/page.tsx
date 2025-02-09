import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Siggi's website",
  openGraph: {
    title: "Siggi's website",
    description:
      "This is my personal website where I share my projcects and accomplishments.",
    images: {
      url: "",
      width: "1200",
      height: "800",
    },
    locale: "en",
    type: "website",
  },
  description:
    "This is my personal website where I share my projcects and accomplishments.",
};

export default async function Page() {
  return <HomePage />;
}
