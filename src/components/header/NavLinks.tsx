import { paths } from "@/utils/paths";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { useClickAway } from "react-use";

export default function NavLinks() {
  const route = useRouter();
  const pathname = usePathname();
  const navLinksRef = useRef(null);

  const [showDropDown, setShowDropDown] = useState<number | null>(null);

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
        href={paths.projects}
        className="whitespace-nowrap text-textDark font-bold"
      >
        Stefna
      </Link>
      <Link
        href={paths.resume}
        className="whitespace-nowrap text-textDark font-bold"
      >
        Um stoðir
      </Link>
      <Link
        href={paths.cv}
        className="whitespace-nowrap text-textDark font-bold"
      >
        Fjárfestingar
      </Link>
      <Link
        href={paths.about}
        className="whitespace-nowrap text-textDark font-bold"
      >
        Fjárfestar
      </Link>
      <Link
        href={paths.contact}
        className="whitespace-nowrap text-textDark font-bold"
      >
        En
      </Link>
    </nav>
  );
}
