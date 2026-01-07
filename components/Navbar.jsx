"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur border-b">
      <nav className="container mx-auto flex items-center justify-between px-9 py-4">
        
        {/* LOGO */}
        <a href="#home" className="text-3xl font-bold">
          <span className="text-primary">.Portfolio</span>
        </a>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-xl font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* THEME TOGGLE */}
        <button
          aria-label="Toggle theme"
          onClick={() => setDark(!dark)}
          className="flex h-12 w-12 items-center justify-center rounded-lg border transition"
        >
          {dark ? <Sun size={18} /> : <Moon size={30} />}
        </button>
      </nav>
    </header>
  );
}
