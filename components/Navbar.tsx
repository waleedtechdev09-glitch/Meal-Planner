"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { navigation } from "@/constants/navigation";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(navigation[0].label);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navigation
      .filter((item) => item.href.startsWith("#"))
      .map((item) => ({
        id: item.href.replace("#", ""),
        label: item.label,
      }));

    const labelMap = new Map(
      sections.map((section) => [section.id, section.label])
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = labelMap.get(entry.target.id);
            if (label) setActive(label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#FFF8F5] backdrop-blur relative">
      {/* Left Gradient matching hero */}
      {!scrolled && pathname !== "/contact-us" && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#FFE8DD_0%,transparent_45%)] hidden md:block" />
      )}

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
              onClick={(e) => handleClick(e, item.href)}
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
          href="/contact-us"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#1E1E1E] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-black"
        >
          Contact us
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-out ${
          isOpen ? "max-h-[500px] translate-y-0 opacity-100" : "max-h-0 -translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-5 border-t border-gray-200 bg-[#FFF8F5] shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => {
                handleClick(e, item.href);
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
            href="/contact-us"
            onClick={() => setIsOpen(false)}
             className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E1E1E] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-black w-full"
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
