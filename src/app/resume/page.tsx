import type { Metadata } from "next";
import Resume from "./Resume";

export const metadata: Metadata = {
  title: "Resume | Sigurður Jónsson",
  openGraph: {
    title: "Resume | Sigurður Jónsson",
  },
};

export default async function Page() {
  return (
    <>
      <Resume />
    </>
  );
}
