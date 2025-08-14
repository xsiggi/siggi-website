import { paths } from "@/utils/paths";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const investments = [
    {
      title: "Arion banki",
      image: "/arion.png",
    },
    {
      title: "Síminn",
      image: "/siminn.png",
    },
    {
      title: "Kvika",
      image: "/kvika.png",
    },
    {
      title: "Blue Lagoon",
      image: "/blueLagoon.png",
    },
    {
      title: "Arctic Adventures",
      image: "/arcticAdventures.png",
    },
    {
      title: "First Water",
      image: "/firstWater.png",
    },
  ];

  return (
    <div>
      <div className="bg-[url('/glacier.png')] bg-cover bg-center bg-[#00284F80]/50 bg-blend-multiply">
        <div className="h-[100vh] container items-center flex px-[5%]">
          <p className="text-[64px] text-bold w-[80%]">
            Fjárfestum í verðmætum framtíðarinnar
          </p>
        </div>
      </div>
      <div className=" flex-col gap-8 container flex px-[5%] py-[10%]">
        <p className="text-[32px] text-semibold text-stodirPrimary">
          Stoðir fjárfesta í traustum fyrirtækjum með skýra stefnu og sterkan
          rekstrargrunn, með áherslu á langtímavaxtarmöguleika.
        </p>
        <div className="flex flex-row gap-8 items-center">
          <div>
            <div className="bg-stodirPrimary rounded-sm h-px w-[75%]"></div>
            <p className="text-[48px] text-semibold text-stodirPrimary">
              Sýn og framkvæmd
            </p>
          </div>
          <div className="gap-4 flex flex-col">
            <p className="text-[24px] text-semibold text-stodirPrimary">
              Traust samstarf
            </p>
            <p className="text-[16px] text-stodirPrimary">
              Við leggjum ríka áherslu á faglegt og traust samstarf við
              stjórnendur og eigendur fyrirtækja, þar sem sameiginleg markmið
              eru í forgrunni.
            </p>
          </div>
          <div className="gap-4 flex flex-col">
            <p className="text-[24px] text-semibold text-stodirPrimary">
              Lausnamiðuð nálgun
            </p>
            <p className="text-[16px] text-stodirPrimary">
              Sveigjanleiki og skýr sýn gerir okkur kleift að þróa lausnir sem
              styðja við stöðugan rekstur og vöxt fyrirtækja.
            </p>
          </div>
          <div className="gap-4 flex flex-col">
            <p className="text-[24px] text-semibold text-stodirPrimary">
              Virðisaukandi stuðningur
            </p>
            <p className="text-[16px] text-stodirPrimary">
              Við tökum virkan þátt í að styðja við rekstur með innsýn,
              tengslaneti og reynslu sem bætir við verðmæti og
              framtíðarmöguleika.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/landslag.png')] bg-cover ">
        <div className="flex-row gap-6 container flex px-[5%] py-[10%]">
          <div className="flex w-full items-center justify-start py-[8%] flex-col bg-stodirSecondary rounded-lg">
            <p className="text-[24px] font-semibold text-stodirBackground">
              Stofnár
            </p>
            <p className="text-[74px] font-semibold text-stodirBackground">
              1973
            </p>
          </div>
          <div className="flex w-full items-center justify-start pt-[8%] flex-col bg-stodirSecondary rounded-lg">
            <p className="text-[24px] font-semibold text-stodirBackground">
              Rekstrarreynsla
            </p>
            <p className="text-[74px] font-semibold text-stodirBackground">
              30+
            </p>
            <p className="text-[24px] font-semibold text-stodirBackground">
              ár
            </p>
          </div>
          <div className="flex w-full items-center justify-start pt-[8%] flex-col bg-stodirSecondary rounded-lg">
            <p className="text-[24px] font-semibold text-stodirBackground">
              Fjárfest í
            </p>
            <p className="text-[74px] font-semibold text-stodirBackground">
              20+
            </p>
            <p className="text-[24px] font-semibold text-stodirBackground">
              fyrirtækjum
            </p>
          </div>
          <div className="flex w-full items-center justify-start pt-[8%] flex-col bg-stodirSecondary rounded-lg">
            <p className="text-[24px] font-semibold text-stodirBackground">
              Heildarfjárfestingarvirði
            </p>
            <p className="text-[74px] font-semibold text-stodirBackground">
              150
            </p>
            <p className="text-[24px] font-semibold text-stodirBackground">
              ma.kr.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-stodirPrimary">
        <div className="flex-row items-center justify-center gap-8 container flex px-[5%] py-[10%]">
          <div className="w-full">
            <p className="text-[32px] text-stodirBackground font-semibold italic">
              „Við horfum til framtíðar með festu – og fjárfestum þar sem við
              sjáum raunverulegt virðisaukandi tækifæri.“
            </p>
            <p className="text-[14px] text-end text-stodirBackground font-semibold italic">
              – Jón Sigurðsson, forstjóri Stoða
            </p>
          </div>
          <div className="flex relative w-full h-[450px]">
            <Image alt="ceo" objectFit="contain" fill src={"/jonColor.png"} />
          </div>
        </div>
      </div>

      <div className="flex-col gap-8 container flex px-[5%] py-[10%]">
        <p className="text-[32px] text-stodirPrimary font-semibold ">
          Fjárfestingar
        </p>
        <div className="flex flex-row gap-8 overflow-x-auto py-4">
          {investments.map((item, index) => (
            <div
              key={index}
              className="border border-solid border-stodirPrimary p-[4%] rounded-lg"
            >
              <div className="flex relative w-[150px] h-[100px]">
                <Image
                  alt={item.title}
                  src={item.image}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
        <Link href={paths.about}>
          <p className="text-stodirPrimary text-end text-[16px] font-bold">
            Sjá fjárfestingar →
          </p>
        </Link>
      </div>

      <div className="bg-stodirPrimary">
        <div className="flex-col gap-8 container flex px-[5%] pt-[5%] pb-[16%]">
          <div className="flex relative w-[150px] h-[100px]">
            <Image
              alt="footer-logo"
              src={"/fullLogo.svg"}
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
    </div>
  );
}
