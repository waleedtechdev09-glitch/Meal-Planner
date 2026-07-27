"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const features = [
  {
    title: "AI Meal Recommendations",
    description:
      "Describe the meal you want, and AI instantly recommends recipes that match.",
  },
  {
    title: "Daily Meal Plan",
    description:
      "Automatically generate a balanced breakfast, lunch, dinner, and snack plan for every day.",
  },
  {
    title: "Healthy Tips",
    description:
      "Get personalized nutrition tips to help build healthier eating habits.",
  },
  {
    title: "Save Favorite Meals",
    description: "Bookmark your favorite recipes and access them anytime.",
  },
  {
    title: "Nutrition Overview",
    description:
      "View calories, protein, carbs, and nutritional information before every meal.",
  },
];

const Personalized = () => {
  return (
    <section className="relative bg-[#FFF8F5] md:py-16 lg:py-16 xl:py-16">
      {/* Background Lines */}
      <div
        className="xl:left-[-1280px] lg:left-[-800px] md:left-[-575px] absolute left-0 right-0 -top-32 z-10 opacity-90 bg-no-repeat bg-top bg-center hidden md:block"
        style={{
          backgroundImage: "url('/assets/vertical-lines.png')",
          minHeight: "calc(100% + 8rem)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 lg:flex-row lg:gap-20 xl:gap-2 lg:px-8">
        {/* LEFT */}
        <div className="relative flex w-full justify-center md:w-5/12 lg:w-1/2">
          {/* Circle (Bottom) */}
          <div className="hidden md:block absolute left-[-30px] md:left-[-160px] md:-top-[190px] lg:-top-[60px] xl:-top-[0px] top-3 z-0 lg:left-[-200px] xl:left-[-280px]">
            <Image
              src="/assets/circle.png"
              alt=""
              width={450}
              height={450}
              className="w-44 md:w-76 lg:w-100 "
            />
          </div>

          {/* Phone (Top) */}
          <div className="relative z-20 hidden md:block md:left-[-20px] md:-top-[190px] lg:-top-[60px] xl:left-[-120px] xl:-top-6 xl:mt-8">
            <Image
              src="/assets/personalized.png"
              alt="Meal Planner"
              width={520}
              height={720}
              priority
              className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[430px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-7/12 lg:w-[68%]">
          <h2 className="text-3xl font-bold  leading-tight text-[#1E1E1E] md:text-4xl lg:text-4xl xl:text-4xl">
            <span className="text-[#FF6B35]">Personalized Meals,</span> Crafted
            Just for You
          </h2>

          <p className="mt-2 text-base leading-7 text-[#818181] font-normal md:text-lg lg:text-base xl:text-lg">
            Get meal recommendations tailored to your health goals, dietary
            preferences, and lifestyle. From breakfast to dinner, AI creates
            balanced meal plans designed to keep you on track.
          </p>

          {/* Features */}
          <div className="mt-4 space-y-3 md:space-y-3">
            {features.map((item) => (
              <div key={item.title} className="flex items-start gap-2 md:gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                  <Image
                    src="/assets/tick.png"
                    alt="Check"
                    width={17}
                    height={17}
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#1E1E1E] md:text-lg lg:text-base xl:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm font-normal leading-6 text-[#818181]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Store Buttons */}
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
      </div>
    </section>
  );
};

export default Personalized;
