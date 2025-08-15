import type { Metadata } from "next";
import ShareholdersMeetings from "./ShareholdersMeetings";

export const metadata: Metadata = {
  title: "Hluthafafundir | Stoðir",
  openGraph: {
    title: "Hluthafafundir | Stoðir",
  },
};

export default function Page() {
  return <ShareholdersMeetings />;
}
