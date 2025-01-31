"use client";

import { useEffect, useState } from "react";
import { navItems } from "../../lib/constants";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    setIsFixed(window.scrollY > 50);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isFixed ? "fixed shadow-md bg-white" : "absolute bg-transparent"
      } top-0 left-0 w-full z-50 h-[100px] flex items-center transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center px-6">
        <span className="text-3xl text-[#182153] font-light font-avenir cursor-pointer">
          Aryan Soni
        </span>
        <div className="flex gap-8 items-center">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm text-[#182153] font-light hover:text-blue-500"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
