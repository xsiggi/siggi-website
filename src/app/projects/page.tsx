import type { Metadata } from "next";
import Projects from "./Projects";

export const metadata: Metadata = {
  title: "Projects | Sigurður Jónsson",
  openGraph: {
    title: "Projects | Sigurður Jónsson",
  },
};

export default async function Page() {
  return (
    <>
      <Projects />
    </>
  );
}
