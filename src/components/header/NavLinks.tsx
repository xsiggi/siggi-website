import { paths } from "@/utils/paths";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { useClickAway } from "react-use";

interface Props {
  className?: string;
}

export default function NavLinks({ className = "text-stodirPrimary" }: Props) {
  const route = useRouter();
  const navLinksRef = useRef(null);

  const [, setShowDropDown] = useState<number | null>(null);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isInvestingOpen, setIsInvestingOpen] = useState(false);

  const handleNavLinkClick = useCallback(
    (slug: string, index: number) => {
      if (slug.length) {
        setShowDropDown((current) => {
          if (index === current) {
            return null;
          }
          return index;
        });
      } else {
        route.push(slug);
        setShowDropDown(null);
      }
    },
    [route]
  );

  useClickAway(
    navLinksRef,
    () => {
      setShowDropDown(null);
    },
    ["click", "keydown"]
  );

  return (
    <nav ref={navLinksRef} className={`flex items-center justify-even gap-10`}>
      <Link
        href={paths.strategy}
        className={`whitespace-nowrap font-bold ${className}`}
      >
        Stefna
      </Link>
      <div className="relative">
        <button
          onClick={() => setIsTeamOpen((prev) => !prev)}
          className={`whitespace-nowrap font-bold ${className}`}
        >
          Um stoðir
        </button>

        <div
          className={`absolute w-[150px] -left-1/2 mt-2 bg-stodirBackground shadow-lg rounded-lg border border-stodirLightGrey z-50
            transform transition-all duration-300
            ${
              isTeamOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          <Link
            href={paths.staff}
            className="block px-4 py-2 text-stodirPrimary hover:bg-gray-100"
          >
            Starfsfólk
          </Link>
          <Link
            href={paths.board}
            className="block px-4 py-2 text-stodirPrimary hover:bg-gray-100"
          >
            Stjórn
          </Link>
          <Link
            href={paths.about}
            className="block px-4 py-2 text-stodirPrimary hover:bg-gray-100"
          >
            Um Stoðir
          </Link>
          <Link
            href={paths.news}
            className="block px-4 py-2 text-stodirPrimary hover:bg-gray-100"
          >
            Fréttir
          </Link>
        </div>
      </div>
      <Link
        href={paths.investments}
        className={`whitespace-nowrap font-bold ${className}`}
      >
        Fjárfestingar
      </Link>

      <div className="relative">
        <button
          onClick={() => setIsInvestingOpen((prev) => !prev)}
          className={`whitespace-nowrap font-bold ${className}`}
        >
          Fjárfestar
        </button>

        <div
          className={`absolute w-[200px] -left-1/2 mt-2 bg-stodirBackground shadow-lg rounded-lg border border-stodirLightGrey z-50
            transform transition-all duration-300
            ${
              isInvestingOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          <Link
            href={paths.annualReport}
            className="block px-4 py-2 text-stodirPrimary hover:bg-gray-100"
          >
            Ársreikningar og uppgjör
          </Link>
          <Link
            href={paths.market}
            className="block px-4 py-2 text-stodirPrimary hover:bg-gray-100"
          >
            Markaðsupplýsingar
          </Link>
          <Link
            href={paths.notification}
            className="block px-4 py-2 text-stodirPrimary hover:bg-gray-100"
          >
            Kauphallartilkynningar
          </Link>
          <Link
            href={paths.calendar}
            className="block px-4 py-2 text-stodirPrimary hover:bg-gray-100"
          >
            Fjárhagsdagatal
          </Link>
          <Link
            href={paths.shareholders}
            className="block px-4 py-2 text-stodirPrimary hover:bg-gray-100"
          >
            Stærstu hluthafar
          </Link>
          <Link
            href={paths.shareholderMeeting}
            className="block px-4 py-2 text-stodirPrimary hover:bg-gray-100"
          >
            Hluthafafundir
          </Link>
        </div>
      </div>
      <div className={`whitespace-nowrap font-bold ${className}`}>En</div>
    </nav>
  );
}
