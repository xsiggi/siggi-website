"use client";
import { useState } from "react";
import Image from "next/image";

export default function ShareholdersMeetings() {
  const data = [
    {
      year: 2025,
      files: [
        { name: "Ársreikningur", url: "/files/2024/q1/arsreikningur.pdf" },
        { name: "Hlutafjárbreytingar", url: "/files/2024/q1/hlutafjar.pdf" },
        { name: "Rekstraryfirlit", url: "/files/2024/q1/rekstraryfirlit.pdf" },
      ],
    },
    {
      year: 2024,
      files: [
        { name: "Ársreikningur", url: "/files/2024/q2/arsreikningur.pdf" },
        { name: "Hlutafjárbreytingar", url: "/files/2024/q2/hlutafjar.pdf" },
        { name: "Rekstraryfirlit", url: "/files/2024/q2/rekstraryfirlit.pdf" },
      ],
    },
    {
      year: 2023,
      files: [
        { name: "Ársreikningur", url: "/files/2024/q3/arsreikningur.pdf" },
        { name: "Hlutafjárbreytingar", url: "/files/2024/q3/hlutafjar.pdf" },
        { name: "Rekstraryfirlit", url: "/files/2024/q3/rekstraryfirlit.pdf" },
      ],
    },
    {
      year: 2022,
      files: [
        { name: "Ársreikningur", url: "/files/2024/q4/arsreikningur.pdf" },
        { name: "Hlutafjárbreytingar", url: "/files/2024/q4/hlutafjar.pdf" },
        { name: "Rekstraryfirlit", url: "/files/2024/q4/rekstraryfirlit.pdf" },
      ],
    },
  ];

  const [selectedYear, setSelectedYear] = useState(data[0].year);
  const currentYearData = data.find((y) => y.year === selectedYear);

  console.log(currentYearData);

  return (
    <div className=" flex-col gap-8 container flex py-[5%]">
      <p className="text-[64px] text-stodirPrimary leading-tight font-bold">
        Ársreikningar <br /> og uppgjör
      </p>

      <p className="text-[24px] text-stodirPrimary w-[60%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas est
        elit, pulvinar non molestie at, vestibulum nec mi.
      </p>

      {/* Year Selector */}
      <div className="flex flex-row gap-8 py-[5%]">
        {data.map((item) => (
          <p
            key={item.year}
            onClick={() => setSelectedYear(item.year)}
            className={`border-t-2 border-solid cursor-pointer border-stodirPrimary p-1 text-[24px] transition
                ${
                  selectedYear === item.year
                    ? "font-bold text-stodirPrimary"
                    : "font-normal text-stodirGrey"
                }`}
          >
            {item.year}
          </p>
        ))}
      </div>

      <p className="text-[48px] text-stodirPrimary font-semibold">
        Hluthafafundur {selectedYear}
      </p>

      <div className="flex flex-col gap-8 w-[60%]">
        <p className="text-[16px] text-stodirPrimary">
          Nullam convallis vehicula urna vitae fringilla. Sed magna diam,
          hendrerit sit amet eros ac, pulvinar semper orci. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
        <p className="text-[16px] text-stodirPrimary">
          Morbi bibendum odio nulla, eu mollis metus rhoncus eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse ornare purus
          sit amet ipsum tristique ultrices.
        </p>

        <div className="pl-[5%] w-[600px] gap-8 flex flex-col">
          <ul className="list-disc pl-6 text-[20px] text-stodirPrimary space-y-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>

        <p className="text-[16px] text-stodirPrimary">
          In laoreet ultrices neque, sed laoreet dolor malesuada vitae.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Sed aliquam orci ultrices turpis gravida, sit
          amet varius magna commodo.
        </p>

        <p className="text-[16px] text-stodirPrimary">
          Fusce porta fermentum metus. In porttitor ligula nibh, sit amet
          euismod eros laoreet eu. Sed aliquam viverra enim, auctor iaculis
          turpis mattis eget. Nunc in vehicula sem, vitae lobortis quam. In hac
          habitasse platea dictumst. Quisque varius convallis luctus. Nam
          aliquet feugiat tempus. Cras volutpat sapien a tortor sollicitudin,
          tincidunt interdum diam accumsan.
        </p>
      </div>

      {/* Files for selected year */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col border-b border-stodirSecondary border-solid">
          <p className="text-[24px] font-bold bg-stodirSecondary text-stodirBackground px-4 py-2">
            Efni fyrir aðalfund
          </p>
          <div className="flex flex-col">
            {currentYearData?.files.map((file, index) => (
              <a
                key={index}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[20px] flex flex-row text-stodirPrimary justify-between hover:bg-stodirSand p-4"
              >
                <p>{file.name}s</p>
                <Image
                  src="/fileDownload.svg"
                  alt="Download Icon"
                  width={32}
                  height={32}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
