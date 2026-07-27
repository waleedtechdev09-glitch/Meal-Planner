"use client";

import Image from "next/image";
import Link from "next/link";

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#FFE8DD_0%,transparent_45%)]" />

      {/* Right Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#FFE8DD_0%,transparent_35%)]" />

      {/* Background */}
      <div
        className="absolute inset-0 bg-contain bg-top xl:mt-35 lg:mt-35 bg-no-repeat opacity-90 hidden lg:block"
        style={{
          backgroundImage: "url('/assets/lines-bg.png')",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-10 pt-10 md:pt-14 pb-10 md:pb-0 lg:px-8">
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
          <div className="mt-8 grid grid-cols-2 gap-y-6 md:grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={item.title}
                className={`flex justify-center ${
                  index === 2 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="px-3 text-center md:px-10">
                  <h3 className="text-xl font-bold lg:font-medium text-[#FF6B35]">
                    {item.number}
                  </h3>

                  <p className="mt-1 text-sm text-[#6E6E6E]">{item.title}</p>
                </div>

                {index !== stats.length - 1 && (
                  <div className="hidden h-10 w-px bg-[#FFD3C5] md:block" />
                )}
              </div>
            ))}
          </div>

          {/* Download Buttons */}
          <div className="mt-8 flex flex-col gap-3 w-full md:flex-row md:flex-nowrap md:items-center md:justify-center md:gap-3">
            {/* Google Play */}
            <Link
              href="#"
              className="flex items-center justify-center gap-3
      w-full h-auto min-h-[50px]
      rounded-lg
      border-2 border-gray-400
      bg-black
      px-4 py-3
      transition-all duration-200
      hover:bg-neutral-900
      hover:scale-[1.10]
      overflow-hidden
      md:w-[160px] md:h-[50px] md:px-3 md:py-0"
            >
              <div className="relative h-6 w-6 shrink-0">
                <Image
                  src="/assets/meal-playstore.png"
                  alt="Google Play"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase tracking-wider font-medium text-white md:text-[8px]">
                  Get it on
                </span>

                <span className="mt-[2px] text-base font-medium text-white md:text-[15px]">
                  Google Play
                </span>
              </div>
            </Link>

            {/* App Store */}
            <Link
              href="#"
              className="flex items-center justify-center gap-3
      w-full h-auto min-h-[50px]
      rounded-lg
      border-2 border-gray-400
      bg-black
      px-4 py-3
      transition-all duration-200
      hover:bg-neutral-900
      hover:scale-[1.10]
      overflow-hidden
      md:w-[160px] md:h-[50px] md:px-3 md:py-0"
            >
              <div className="relative h-6 w-6 shrink-0">
                <Image
                  src="/assets/meal-applestore.png"
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] tracking-wide font-medium text-white md:text-[8px]">
                  Download on the
                </span>

                <span className="mt-[2px] text-base font-medium text-white md:text-[15px]">
                  App Store
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:-mt-17 xl:-mt-17 md:-mt-10 hidden md:flex justify-center ">
          <Image
            src="/assets/hero.png"
            alt="Meal Planner App"
            width={920}
            height={760}
            priority
            className="w-full max-w-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
