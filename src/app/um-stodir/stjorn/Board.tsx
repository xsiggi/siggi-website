import Image from "next/image";

export default function Board() {
  const board = [
    {
      name: "Sigurjón Pálsson",
      image: "/sigurjon.png",
      position: "Stjórnarmaður",
    },
    {
      name: "Ari Fenger",
      image: "/ariFenger.png",
      position: "Stjórnarmaður",
    },
    {
      name: "Magnús Ármann",
      image: "/magnusArmann.png",
      position: "Stjórnarmaður",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="flex-col gap-8 container flex pt-[5%] pb-[15%] relative z-10">
        <p className="text-[64px] text-stodirPrimary font-bold">Stjórn</p>

        <div className="flex flex-wrap gap-8">
          {board.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border-b border-solid border-stodirPrimary"
            >
              <div className="flex relative w-[250px] h-[350px]">
                <Image
                  alt={item.name}
                  src={item.image}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <p>
                  <span className="text-[24px] text-stodirPrimary font-semibold">
                    {item.name}
                  </span>
                  <br />
                  <span className="text-[14px] text-stodirGrey">
                    {item.position}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
