import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-stodirPrimary">
      <div className="flex-col gap-8 container flex px-[5%] pt-[5%] pb-[16%]">
        <div className="flex relative w-[150px] h-[100px]">
          <Image
            alt="footer-logo"
            src={"/fullLogo.png"}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-row gap-40">
          <div>
            <p className="text-[18px] text-stodirBackground font-semibold">
              Stoðir hf.
            </p>
            <p className="text-[18px] text-stodirBackground font-semibold">
              Suðurgata 12
            </p>
            <p className="text-[18px] text-stodirBackground font-semibold">
              101 Reykjavík
            </p>
          </div>
          <div>
            <p className="text-[18px] text-stodirBackground font-semibold">
              info@stodir.is
            </p>
            <p className="text-[18px] text-stodirBackground font-semibold">
              +354 591 4400
            </p>
            <p className="text-[18px] text-stodirBackground font-semibold">
              Kt. 601273-0129
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
