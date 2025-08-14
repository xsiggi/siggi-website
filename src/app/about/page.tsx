import type { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About | Sigurður Jónsson",
  openGraph: {
    title: "About | Sigurður Jónsson",
  },
};

export default async function Page() {
  return (
    <>
      <About />
    </>
  );
}
