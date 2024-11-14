"use client"
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header className="header">
      <nav className="nav">
        <Link href="#" className="logo">
          <span className="logo1">G</span>hazala
        </Link>
        
        {/* Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Navigation List */}
        <ul className={`navList ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="#home" className="navItem home">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="navItem">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="navItem">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="navItem">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    {/* Hero Section */}
    <section className={`hero ${menuOpen ? "hero-pushed" : ""}`}>
        {/* Yahan hero section ka content ayega */}
      </section>

    </>
  );
};

export default Header;
