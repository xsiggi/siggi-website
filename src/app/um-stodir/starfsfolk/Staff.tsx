import Image from "next/image";

export default function Staff() {
  const staff = [
    {
      name: "Jón Sigurðsson",
      image: "/jonSig.png",
      position: "Forstjóri",
      email: "jon@stodir.is",
    },
    {
      name: "Lárus Welding",
      image: "/larusWelding.png",
      position: "Rekstrarstjóri",
      email: "lwelding@stodir.is",
    },
    {
      name: "Benedikt Sigurðsson",
      image: "/benediktSig.png",
      position: "Sérfræðingur",
      email: "benedikt@stodir.is",
    },
    {
      name: "Magnús Andri Pétursson",
      image: "/magnusAndri.png",
      position: "Sérfræðingur",
      email: "magnus@stodir.is",
    },
    {
      name: "Kristín Ósk Ríkarðsdóttir",
      image: "/kristinOsk.png",
      position: "Skrifstofustjóri",
      email: "kristin@stodir.is",
    },
  ];

  return (
    <div>
      <div className="flex-col gap-4 container flex pt-[5%] pb-[15%] px-[5%]">
        <p className="text-[64px] text-stodirPrimary font-bold">Starfsfólk</p>

        <div className="flex flex-wrap gap-8">
          {staff.map((item, index) => (
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

                <p className="text-[16px] text-stodirPrimary underline pt-2">
                  {item.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
