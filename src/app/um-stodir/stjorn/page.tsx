import type { Metadata } from "next";
import Board from "./Board";

export const metadata: Metadata = {
  title: "Stjórn | Stoðir",
  openGraph: {
    title: "Stjórn | Stoðir",
  },
};

export default function Page() {
  return <Board />;
}
