"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  {
    number: "50K+",
    title: "Meals Generated",
  },
  {
    number: "AI-Powered",
    title: "Personalized Nutrition",
  },
  {
    number: "100K+",
    title: "Healthy Meals Planned",
  },
];

export default function Hero() {
  return (
    <section id="features" className="relative overflow-hidden bg-[#FFF8F5]">
      {/* Left Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,#FFE8DD_0%,transparent_45%)] hidden md:block" />

      {/* Right Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#FFE8DD_0%,transparent_35%)] hidden md:block" />

      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-contain bg-top xl:mt-35 lg:mt-35 bg-no-repeat opacity-90 hidden lg:block"
        style={{
          backgroundImage: "url('/assets/lines-bg.png')",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-2 pt-10 md:px-10 md:pt-14 pb-10 md:pb-0 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-[#1E1E1E] md:text-5xl lg:text-6xl">
            Eat Smarter.
            <span className="text-[#FF6B35]"> Live Healthier.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#818181] md:text-lg md:max-w-3xl">
            Personalized AI meal plans, healthy recipes, grocery lists, and
            wellness tracking—all designed around your lifestyle and nutrition
            goals.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-y-6">
            {stats.map((item, index) => (
              <div key={item.title} className="flex justify-center">
                <div className="px-1 text-center sm:px-3 md:px-10">
                  <h3 className="text-base font-bold lg:font-medium text-[#FF6B35] sm:text-xl">
                    {item.number}
                  </h3>

                  <p className="mt-1 text-xs text-[#6E6E6E] sm:text-sm">
                    {item.title}
                  </p>
                </div>

                {index !== stats.length - 1 && (
                  <div className="hidden h-10 w-px bg-[#FFD3C5] md:block" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hero Image - shows only on small screens, before download buttons */}
          <motion.div
            className="mt-2 flex justify-center md:hidden -mx-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/assets/hero.png"
              alt="Meal Planner App"
              width={1020}
              height={960}
              priority
              className="w-full max-w-[1200px] object-contain"
            />
          </motion.div>

          {/* Download Buttons */}
          <div className="relative z-10 mt-2 md:mt-8 flex flex-row flex-nowrap items-center justify-center md:px-0 px-4 gap-2 w-full sm:gap-3 md:gap-3">
            {/* Google Play */}
            <Link
              href="#"
              className="relative z-10 flex items-center justify-center gap-2 w-1/2 h-auto min-h-[42px] rounded-lg border-2 border-gray-400 bg-black px-2 py-2 transition-transform duration-200 hover:bg-neutral-900 hover:scale-[1.10] transform sm:w-[160px] sm:h-[50px] sm:px-3 sm:py-0 sm:gap-3"
            >
              <div className="relative h-5 w-5 shrink-0 pointer-events-none sm:h-6 sm:w-6">
                <Image
                  src="/assets/meal-playstore.png"
                  alt="Google Play"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col items-start leading-none pointer-events-none">
                <span className="text-[9px] uppercase tracking-wider font-medium text-white sm:text-[8px]">
                  Get it on
                </span>
                <span className="mt-[2px] text-sm font-medium text-white sm:text-[15px]">
                  Google Play
                </span>
              </div>
            </Link>

            {/* App Store */}
            <Link
              href="#"
              className="relative z-10 flex items-center justify-center gap-2 w-1/2 h-auto min-h-[42px] rounded-lg border-2 border-gray-400 bg-black px-2 py-2 transition-transform duration-200 hover:bg-neutral-900 hover:scale-[1.10] transform sm:w-[160px] sm:h-[50px] sm:px-3 sm:py-0 sm:gap-3"
            >
              <div className="relative h-5 w-5 shrink-0 pointer-events-none sm:h-6 sm:w-6">
                <Image
                  src="/assets/meal-applestore.png"
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col items-start leading-none pointer-events-none">
                <span className="text-[9px] tracking-wide font-medium text-white sm:text-[8px]">
                  Download on the
                </span>
                <span className="mt-[2px] text-sm font-medium text-white sm:text-[15px]">
                  App Store
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Hero Image (Desktop) */}
        <motion.div
          className="lg:-mt-17 xl:-mt-17 md:-mt-10 hidden md:flex justify-center "
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/assets/hero.png"
            alt="Meal Planner App"
            width={920}
            height={760}
            priority
            className="w-full max-w-4xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
