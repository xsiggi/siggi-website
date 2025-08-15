import type { Metadata } from "next";
import Shareholders from "./Shareholders";

export const metadata: Metadata = {
  title: "Stærstu hluthafar | Stoðir",
  openGraph: {
    title: "Stærstu hluthafar | Stoðir",
  },
};

export default function Page() {
  return <Shareholders />;
}
