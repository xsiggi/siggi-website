import type { Metadata } from "next";
import CV from "./Career";
import Career from "./Career";

export const metadata: Metadata = {
  title: "CV | Sigurður Jónsson",
  openGraph: {
    title: "CV | Sigurður Jónsson",
  },
};

export default async function Page() {
  return (
    <>
      <Career />
    </>
  );
}
