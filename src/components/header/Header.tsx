"use client";
import { paths } from "@/utils/paths";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
// import styles from "src/styles/ScrollStyles.module.css";
import NavLinks from "./NavLinks";
import path from "path";

export default function Header() {
  const pathname = usePathname();
  const [mobileView, setMobileView] = useState<boolean>(false);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    setMobileView(false);
  }, [pathname]);

  const handleSetIsMobileView = useCallback((b: boolean) => {
    setSlideOut(!b);
    if (b) {
      // instantly show menu
      setMobileView(b);
    } else {
      setTimeout(() => {
        setMobileView(b);
      }, 200);
    }
  }, []);

  return (
    <div
      className={`${
        pathname === "/" ? "" : "h-[100px] [@media(max-width:1000px)]:h-[85px]"
      }`}
    >
      <div
        className={`visible fixed inset-x-0 top-0 z-[100] ${
          pathname === "/"
            ? "bg-transparent"
            : "bg-stodirBackground border-b border-solid border-stodirPrimary"
        } opacity-100 transition-opacity duration-1000 ease-out`}
        id="header"
      >
        <div className="container relative flex h-[100px] w-full flex-row items-center justify-between px-[20px] [@media(max-width:1000px)]:h-[85px] [@media(max-width:800px)]:items-center">
          <Link
            aria-label="Fara á forsíðu"
            className={`relative -ml-4  w-auto px-4 py-1 `}
            href={paths.home}
          >
            <div className="relative size-[45px] md:w-[200px]">
              <picture>
                <Image
                  alt="logo"
                  className="object-contain"
                  fill
                  priority
                  src={pathname === "/" ? "/fullLogo.png" : "/fullLogoBlue.png"}
                />
              </picture>
            </div>
          </Link>
          <nav className="z-[100] justify-between [@media(max-width:1200px)]:hidden">
            <NavLinks
              className={
                pathname === "/"
                  ? "text-stodirBackground"
                  : "text-stodirPrimary"
              }
            />
          </nav>
          <div className="my-auto hidden items-center gap-4 [@media(max-width:1200px)]:flex">
            <div
              className="m-aut h-full cursor-pointer flex [@media(max-width:1200px)]:items-center"
              onClick={() => handleSetIsMobileView(!mobileView)}
            >
              {mobileView ? (
                <div className="flex size-8 items-center justify-center">
                  {/* <Close /> */}
                  'icon'
                </div>
              ) : (
                // <NavMenuIcon />
                "icon"
              )}
            </div>
          </div>
          {mobileView && (
            <nav
              className={`animate-slideIn ${
                slideOut ? "animate-slideOut" : ""
              } fixed inset-x-0 bottom-0 top-[85px] overflow-y-auto overflow-x-hidden bg-primary pt-[70px] 
               [@media(min-width:1001px)]:top-[98px] [@media(min-width:1200px)]:hidden`}
              color="primary"
            >
              <NavLinks />
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
