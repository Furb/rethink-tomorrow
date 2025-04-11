"use client";

import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [logoHover, setLogoHover] = useState(false);
  return (
    <header className="py-4 relative">
      <div className="wrap">
        <div className="flex justify-between items-center">
          <div className="logo z-10">
            <Link href="/">
              <div
                onMouseEnter={() => setLogoHover(true)}
                onMouseLeave={() => setLogoHover(false)}
              >
                <Image
                  alt="Rethink Tomorrow"
                  src={logoHover ? "re-black.svg" : "re-sand.svg"}
                  width={56}
                  height={56}
                />
              </div>
            </Link>
          </div>

          <div className="tablet:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
