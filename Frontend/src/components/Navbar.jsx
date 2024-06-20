import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import Button from "./Button";
import MobileNav from "./MobileNav";

const navLinks = [
  { route: "#", linkText: "Discover" },
  { route: "#", linkText: "Safety" },
  { route: "#", linkText: "Support" },
  { route: "#", linkText: "Blog" },
];

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-around sm:px-10 px-3 py-3 fixed w-full backdrop-blur-lg">
        <p className="font-bold text-2xl">
          Dev<span className="text-blue">Community</span>
        </p>

        <ul className="md:flex items-center justify-center gap-4 hidden">
          {navLinks.map((link) => (
            <li
              key={link.linkText}
              className="hover:text-blue cursor-pointer transition-all"
            >
              <Link to={link.route}>{link.linkText}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center">
          <Button>
            <Link to="/login">Login</Link>
          </Button>

          <FaBars
            className="text-xl md:hidden cursor-pointer"
            onClick={() => setShowMobileNav(true)}
          />
        </div>
      </nav>

      <MobileNav
        setShowMobileNav={setShowMobileNav}
        showMobileNav={showMobileNav}
      />
    </>
  );
};

export default Navbar;
