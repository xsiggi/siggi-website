import type { Metadata } from "next";
import StockExchangeNotification from "./StockExchangeNotifcations";

export const metadata: Metadata = {
  title: "Kauphallartilkynningar | Stoðir",
  openGraph: {
    title: "Kauphallartilkynningar | Stoðir",
  },
};

export default function Page() {
  return <StockExchangeNotification />;
}
