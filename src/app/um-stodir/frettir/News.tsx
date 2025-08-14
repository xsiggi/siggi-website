import Image from "next/image";

export default function News() {
  return (
    <div>
      <div className="flex-col gap-4 container flex  pt-[5%] pb-[15%] px-[5%] ">
        <p className="text-[64px] text-stodirPrimary font-bold">Fréttir</p>

        <div className="flex flex-wrap gap-8 w-[350px]">
          <div className="flex flex-col gap-4 border-b border-solid border-stodirPrimary pb-2">
            <div className="flex relative w-full h-[200px]">
              <Image alt={"test"} src="/news.png" fill objectFit="cover" />
            </div>
            <p className="text-[24px] text-stodirPrimary font-bold">
              Fyrirsögn
            </p>
            <p className="text-[14px] text-stodirPrimary ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nunc at hendrerit facilisis, risus justo dapibus sem, ut
              congue sapien risus ac sapien.{" "}
            </p>
            <p className="text-[16px] text-end text-stodirGrey underline ">
              Lesa frétt →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
