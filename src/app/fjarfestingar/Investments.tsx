import Image from "next/image";
import Link from "next/link";

export default function Investments() {
  const investments = [
    {
      title: "Arion banki",
      image: "/arion.png",
      description:
        "Arion Banki er leiðandi fjármálafyrirtæki á Íslandi sem þjónustar einstaklinga og fyrirtæki með fjölbreytt úrval fjármála- og ráðgjafaþjónustu. Með þátttöku í Arion Banka styðja Stoðir við trausta innviði fjármálamarkaðarins og langtíma verðmætasköpun fyrir samfélagið.",
      share: "Stoðir eiga um 5% hlut, skráð á Nasdaq Iceland.",
      link: "arionbanki.is",
    },
    {
      title: "Síminn",
      image: "/siminn.png",
      description:
        "Síminn er leiðandi fjarskiptafélag á Íslandi og lykilaðili í innviðum sem styðja bæði fyrirtæki og heimili um allt land. Stoðir styðja við áframhaldandi þróun og vöxt félagsins með langtímafjárfestingu sem skapar verðmæti fyrir samfélagið.",
      share:
        "Stoðir eru meðal stærstu hluthafa með um 19% hlut, skráð á Nasdaq Iceland.",
      link: "siminn.is",
    },
    {
      title: "Kvika",
      image: "/kvika.png",
      description:
        "Kvika er sérhæft fjármálafyrirtæki með áherslu á eignastýringu, tryggingar og fjárfestingarþjónustu. Með fjárfestingu í Kviku styðja Stoðir við nýsköpun og þróun á fjármálaþjónustu sem eflir bæði atvinnulíf og einstaklinga um allt land.",
      share: "Stoðir eiga um 5% hlut, skráð á Nasdaq Iceland.",
      link: "kvika.is",
    },
    {
      title: "Blue Lagoon",
      image: "/blueLagoon.png",
      description:
        "Bláa Lónið er eitt þekktasta fyrirtæki landsins á sviði heilsu-, ferða- og lífstílsþjónustu. Með fjárfestingu í Bláa Lóninu styðja Stoðir við áframhaldandi uppbyggingu og vöxt fyrirtækisins sem laðar að gesti hvaðanæva að úr heiminum og skapar verðmæti fyrir samfélagið.",
      share: "Stoðir eiga um 7% hlut, óskráð fjárfesting.",
      link: "bluelagoon.is",
    },
    {
      title: "Arctic Adventures",
      image: "/arcticAdventures.png",
      description:
        "Arctic Adventures er eitt stærsta ævintýra- og ferðaþjónustufyrirtæki landsins. Með fjárfestingu í Arctic Adventures styðja Stoðir við áframhaldandi vöxt ferðaþjónustunnar og þróun á einstökum upplifunum fyrir gesti og gangandi.",
      share: "Stoðir eiga um 39% hlut, óskráð fjárfesting.",
      link: "firstwater.is",
    },
    {
      title: "First Water",
      image: "/firstWater.png",
      description:
        "First Water þróar sjálfbært landeldi á Atlantshafslaxi í Þorlákshöfn. Með áherslu á endurnýjanlega orku og hreint sjávarvatn vinnur First Water að því að framleiða hágæða lax með lágmarks umhverfisáhrifum. Með fjárfestingu í First Water styðja Stoðir við nýsköpun og sjálfbæra matvælaframleiðslu á Íslandi.",
      share: "Stoðir eiga um 35% hlut, óskráð fjárfesting.",
      link: "arcticadventures.is",
    },
  ];

  return (
    <div>
      <div className="bg-[url('/river.png')] bg-cover">
        <div className="h-[45vh] container items-end flex px-[5%] py-[5%]">
          <p className="text-[64px] font-bold leading-tight">
            Fjölbreytt
            <br />
            eignasafn fyrir <br />
            varanleg verðmæti
          </p>
        </div>
      </div>

      <div className="flex-col gap-8 container flex py-[5%]">
        <p className="text-[24px] text-stodirPrimary w-[60%]">
          Stoðir fjárfesta í fjölbreyttum atvinnugreinum með langtímamarkmið um
          að skapa verðmæti fyrir hluthafa og samfélagið.
        </p>
        <p className="text-[48px] text-stodirPrimary font-semibold pt-8">
          Yfirlit yfir helstu fjárfestingar
        </p>

        <div className="flex flex-col gap-8 items-center py-4">
          {investments.map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-[5%] w-[80%] border-b items-center border-solid border-stodirPrimary p-[4%]"
            >
              <div className="flex relative w-[200px] h-[100px]">
                <Image
                  alt={item.title}
                  src={item.image}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-full">
                <p className="text-[24px] text-stodirPrimary font-semibold">
                  {item.title}
                </p>
                <p className="text-[16px] text-stodirPrimary py-4">
                  {item.description}
                </p>
                <p className="text-[16px] text-stodirPrimary font-bold pb-4">
                  {item.share}
                </p>
                <a
                  href={`https://${item.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] text-stodirGrey w-fit border-b border-solid border-stodirGrey"
                >
                  {item.link} →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[48px] text-stodirPrimary font-semibold">
            Aðrar fjárfestingar
          </p>
          <p className="text-[16px] text-stodirPrimary py-4">
            Stoðir halda einnig á fjölbreyttum eignum utan skráðra félaga, þar á
            meðal óskráðum hlutabréfum, skuldabréfum og lánum. Þessar
            fjárfestingar styðja við breiða eignadreifingu og langtímamarkmið
            félagsins um að skapa stöðug og sjálfbær verðmæti fyrir hluthafa og
            samfélagið.
          </p>
          <p className="text-[16px] text-stodirPrimary font-bold">
            Þessar fjárfestingar mynda um 15% af eignasafninu.
          </p>
        </div>
      </div>
    </div>
  );
}
