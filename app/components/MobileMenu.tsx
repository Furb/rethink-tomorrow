"use client";

import Link from "next/link";
import NavLinks from "../lib/NavLInks";
import { RiCloseLargeLine, RiMenu4Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="flex">
      <div
        id="mainMenu"
        className={`z-0 pt-36 pb-4 absolute bg-red inset-0 w-full h-screen flex flex-col justify-between transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-2 mb-8">
          {NavLinks.map((link) => (
            <li key={link.key} className="wrap text-white text-4xl">
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <div
          id="smallMenu"
          className="items-start flex flex-wrap wrap text-dark"
        >
          <ul id="smallMenu__contant" className="space-y-2 w-full">
            <li>info@rethinkevent.dk</li>
            <li>+45 27 12 61 39</li>
            <li>
              <Link href="#">LinkedIn</Link>
            </li>
          </ul>
          <ul id="legalMenu" className="space-y-2 w-full">
            <li>Privatlivspolitik</li>
            <li>Forretningsbetingelser</li>
            <li>CVR-NR: 35124616</li>
          </ul>
        </div>
      </div>

      <button onClick={toggleMenu} className="z-10">
        {mobileMenuOpen ? (
          <RiCloseLargeLine className="h-[2rem] w-[2rem] cursor-pointer" />
        ) : (
          <RiMenu4Fill className="h-[2rem] w-[2rem] cursor-pointer" />
        )}
      </button>
    </nav>
  );
};

export default MobileMenu;
