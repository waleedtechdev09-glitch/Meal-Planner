import React from "react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Privacy Policy", href: "/privacy-policy", underline: true },
  { label: "Term & Condition", href: "/term-conditions", underline: true },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.9h2.54V9.83c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.95 8.44-9.94z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M22 5.9c-.77.35-1.6.58-2.46.68a4.28 4.28 0 0 0 1.88-2.37c-.83.49-1.75.85-2.72 1.04a4.24 4.24 0 0 0-7.34 2.9c0 .33.04.66.1.97A12.05 12.05 0 0 1 2.9 4.6a4.23 4.23 0 0 0 1.32 5.66 4.2 4.2 0 0 1-1.92-.53c0 .02 0 .04 0 .06a4.24 4.24 0 0 0 3.4 4.16c-.35.1-.72.15-1.1.15-.27 0-.53-.02-.78-.07a4.25 4.25 0 0 0 3.96 2.95A8.53 8.53 0 0 1 2 18.57 12.03 12.03 0 0 0 8.5 20.5c7.79 0 12.05-6.46 12.05-12.05 0-.18 0-.37-.01-.55A8.6 8.6 0 0 0 22 5.9z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.4a3.7 3.7 0 0 1 1.37.9 3.7 3.7 0 0 1 .9 1.37c.16.42.35 1.05.4 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.4 2.22a3.7 3.7 0 0 1-.9 1.37 3.7 3.7 0 0 1-1.37.9c-.42.16-1.05.35-2.22.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.4a3.7 3.7 0 0 1-1.37-.9 3.7 3.7 0 0 1-.9-1.37c-.16-.42-.35-1.05-.4-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.8.4-2.22a3.7 3.7 0 0 1 .9-1.37 3.7 3.7 0 0 1 1.37-.9c.42-.16 1.05-.35 2.22-.4 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.27-2.91.57a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.16c-.3.76-.51 1.63-.57 2.91C-.01 8.35 0 8.76 0 12s-.01 3.65.05 4.93c.06 1.28.27 2.15.57 2.91a5.9 5.9 0 0 0 1.39 2.13 5.9 5.9 0 0 0 2.13 1.39c.76.3 1.63.51 2.91.57C8.33 23.99 8.74 24 12 24s3.65-.01 4.93-.07c1.28-.06 2.15-.27 2.91-.57a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.39-2.13c.3-.76.51-1.63.57-2.91.06-1.28.07-1.69.07-4.93s-.01-3.65-.07-4.93c-.06-1.28-.27-2.15-.57-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.84.64c-.76-.3-1.63-.51-2.91-.57C15.65.01 15.24 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.4-11.84a1.44 1.44 0 1 1-1.44 1.44 1.44 1.44 0 0 1 1.44-1.44z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative bg-white border-t-0 md:border-t border-gray-100 px-4 py-10 sm:py-12 "
    >
      {/* Gradient circle - extends above the footer into the previous section */}
      <div className="pointer-events-none absolute -top-48 left-1/30 -translate-x-1/2 h-[500px] w-[500px] max-w-[90vw] rounded-full bg-[radial-gradient(circle,#FFD3C5_0%,transparent_50%)] opacity-50 z-50 sm:-top-64 sm:h-[600px] sm:w-[600px] lg:-top-80 lg:h-[700px] lg:w-[700px]" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 relative z-10 bg-white">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/meal-logo.png"
            alt="Meal Planner logo"
            width={100}
            height={100}
          />
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`hover:text-gray-900 ${
                link.underline ? "underline" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-orange-500 transition-colors hover:text-orange-600"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-400 sm:text-sm">
          © 2026 Smart Meal Planner. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
