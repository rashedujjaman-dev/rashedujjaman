"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen
          ? "bg-white/80 dark:bg-[#0b0416]/70 border-b border-b-violet-200 dark:border-b-slate-800 backdrop-blur-md shadow-[0_0_40px_rgba(113,39,186,0.20)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold">
          <Image
            src="/images/LogocolorBest.png"
            alt="Logo"
            width={56}
            height={56}
            priority
            className="h-14 w-14 cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex space-x-10 font-medium text-lg text-slate-700 dark:text-slate-300">
            <Link
              href="#home"
              className="hover:text-[#a855f7] transition duration-200"
            >
              Home
            </Link>

            <Link
              href="#projects"
              className="hover:text-[#a855f7] transition duration-200"
            >
              Works
            </Link>

            <Link
              href="#lab"
              className="hover:text-[#a855f7] transition duration-200"
            >
              Lab
            </Link>

            <Link
              href="#about"
              className="hover:text-[#a855f7] transition duration-200"
            >
              About
            </Link>

            <Link
              href="#contact"
              className="hover:text-[#a855f7] transition duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Dark & Light Button */}
          <ThemeToggle />
        </div>

        {/* Mobile: Dark & Light Theme Toggle & Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-2 rounded text-slate-600 dark:text-slate-300 hover:text-[#a855f7] transition duration-200 cursor-pointer"
            aria-label="Open menu"
          >
            <HiBars3 className="size-10" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-5 pb-4">
          <div className="flex flex-col gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
            <Link
              href="#home"
              className="hover:text-[#a855f7] transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="#projects"
              className="hover:text-[#a855f7] transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Works
            </Link>

            <Link
              href="#lab"
              className="hover:text-[#a855f7] transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Lab
            </Link>

            <Link
              href="#about"
              className="hover:text-[#a855f7] transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="#contact"
              className="hover:text-[#a855f7] transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
