import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { PropsWithChildren } from "react";

export default function PageContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-between bg-stodirBackground">
      <div className="flex w-full flex-col overflow-hidden bg-stodirBackground">
        <Header />

        <main className="min-h-screen bg-grey">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
