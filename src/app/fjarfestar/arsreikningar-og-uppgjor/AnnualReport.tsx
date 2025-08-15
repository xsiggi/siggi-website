"use client";
import { useState } from "react";
import Image from "next/image";

export default function AnnualReport() {
  const data = [
    {
      year: 2024,
      quarters: [
        {
          name: "1. ársfjórðungur",
          files: [
            { name: "Ársreikningur", url: "/files/2024/q1/arsreikningur.pdf" },
            {
              name: "Hlutafjárbreytingar",
              url: "/files/2024/q1/hlutafjar.pdf",
            },
            {
              name: "Rekstraryfirlit",
              url: "/files/2024/q1/rekstraryfirlit.pdf",
            },
          ],
        },
        {
          name: "2. ársfjórðungur",
          files: [
            { name: "Ársreikningur", url: "/files/2024/q2/arsreikningur.pdf" },
            {
              name: "Hlutafjárbreytingar",
              url: "/files/2024/q2/hlutafjar.pdf",
            },
            {
              name: "Rekstraryfirlit",
              url: "/files/2024/q2/rekstraryfirlit.pdf",
            },
          ],
        },
        {
          name: "3. ársfjórðungur",
          files: [
            { name: "Ársreikningur", url: "/files/2024/q3/arsreikningur.pdf" },
            {
              name: "Hlutafjárbreytingar",
              url: "/files/2024/q3/hlutafjar.pdf",
            },
            {
              name: "Rekstraryfirlit",
              url: "/files/2024/q3/rekstraryfirlit.pdf",
            },
          ],
        },
        {
          name: "4. ársfjórðungur",
          files: [
            { name: "Ársreikningur", url: "/files/2024/q4/arsreikningur.pdf" },
            {
              name: "Hlutafjárbreytingar",
              url: "/files/2024/q4/hlutafjar.pdf",
            },
            {
              name: "Rekstraryfirlit",
              url: "/files/2024/q4/rekstraryfirlit.pdf",
            },
          ],
        },
      ],
    },
    {
      year: 2023,
      quarters: [
        // same structure as above
      ],
    },
  ];

  const [selectedYear, setSelectedYear] = useState(data[0].year);

  const currentYearData = data.find((y) => y.year === selectedYear);

  return (
    <div className="relative min-h-screen">
      {/* Background image behind content */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none">
        <div className="absolute inset-0 bg-[url('/iceCave.png')] bg-cover bg-center opacity-20" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stodirBackground/100 via-white/50 to-transparent" />
      </div>
      <div className="relative flex-col gap-8 container flex py-[5%]">
        <p className="text-[64px] text-stodirPrimary leading-tight font-bold">
          Ársreikningar <br /> og uppgjör
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

        {/* Quarters stacked */}
        <div className="flex flex-col gap-10 pb-[20%]">
          {currentYearData?.quarters.map((quarter) => (
            <div
              key={quarter.name}
              className="flex flex-col border-b border-stodirSecondary border-solid"
            >
              <p className="text-[24px] font-bold bg-stodirSecondary text-stodirBackground px-4 py-2">
                {quarter.name}
              </p>
              <div className="flex flex-col">
                {quarter.files.map((file, index) => (
                  <a
                    key={index}
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[20px] flex flex-row text-stodirPrimary justify-between hover:bg-stodirSand p-4"
                  >
                    <p>{file.name}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
}
