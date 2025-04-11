"use client";
import NavLinks from "../lib/NavLInks";
import Link from "next/link";

const Menu = () => {
  return (
    <ul id="menu" className="flex">
      {NavLinks.map((link) => (
        <li key={link.key}>
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
