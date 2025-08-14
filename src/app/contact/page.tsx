import type { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact | Sigurður Jónsson",
  openGraph: {
    title: "Contact | Sigurður Jónsson",
  },
};

export default async function Page() {
  return (
    <>
      <Contact />
    </>
  );
}
