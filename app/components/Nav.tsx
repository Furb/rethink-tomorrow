import Link from "next/link";
import NavLinks from "../lib/NavLInks";

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <ul id="menu" className="flex">
        {NavLinks.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
