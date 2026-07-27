"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

import { navigation } from "@/constants/navigation";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(navigation[0].label);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#FFF8F5] backdrop-blur relative overflow-hidden">
      {/* Left Gradient matching hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#FFE8DD_0%,transparent_45%)] hidden md:block" />

      <div className="relative mx-auto flex h-16 max-w-full items-center justify-between px-6 lg:px-14 xl:px-18">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/meal-logo.png"
            alt="Meal Planner Logo"
            width={140}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center rounded-lg p-2 text-[#1E1E1E] transition-colors hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`text-sm font-normal transition-colors duration-200 ${
                active === item.label
                  ? "text-[#FF6A3D] font-medium"
                  : "text-[#6E6E6E] hover:text-[#FF6A3D]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#1E1E1E] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-black"
        >
          Contact us
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4 border-t border-gray-200 bg-[#FFF8F5]">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => {
                setActive(item.label);
                setIsOpen(false);
              }}
              className={`text-sm font-normal transition-colors duration-200 ${
                active === item.label
                  ? "text-[#FF6A3D] font-medium"
                  : "text-[#6E6E6E] hover:text-[#FF6A3D]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
             className="inline-flex items-center gap-2 rounded-full bg-[#1E1E1E] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-black w-full"
          >
            Contact us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
