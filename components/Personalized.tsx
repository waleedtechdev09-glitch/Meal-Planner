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
    <section className="relative bg-[#FFF8F5] xl:py-16">
      {/* Background Lines */}
      <div
        className="xl:left-[-1280px] absolute left-0 right-0 -top-32 z-10 opacity-90 bg-no-repeat bg-top bg-center"
        style={{
          backgroundImage: "url('/assets/vertical-lines.png')",
          minHeight: "calc(100% + 8rem)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-20 lg:px-8">
        {/* LEFT */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          {/* Circle (Bottom) */}
          <div className="absolute left-[-60px]  -top-17 z-0 md:left-[-80px] xl:left-[-280px]">
            <Image
              src="/assets/circle.png"
              alt=""
              width={360}
              height={360}
              className="w-56 md:w-72 lg:w-80 "
            />
          </div>

          {/* Phone (Top) */}
          <div className="relative z-20 xl:left-[-170px] xl:-top-20 xl:mt-8">
            <Image
              src="/assets/personalized.png"
              alt="Meal Planner"
              width={520}
              height={720}
              priority
              className="w-[250px] sm:w-[320px] md:w-[360px] lg:w-[430px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold leading-tight text-[#1E1E1E] md:text-4xl lg:text-5xl">
            <span className="text-[#FF6B35]">Personalized Meals,</span> Crafted
            Just for You
          </h2>

          <p className="mt-5 text-base leading-7 text-[#7A7A7A] md:text-lg">
            Get meal recommendations tailored to your health goals, dietary
            preferences, and lifestyle. From breakfast to dinner, AI creates
            balanced meal plans designed to keep you on track.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-6">
            {features.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full">
                  <Check size={18} className="text-[#FF6B35]" strokeWidth={3} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[15px] leading-6 text-[#7A7A7A]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Store Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Google Play */}
            <Link
              href="#"
              className="flex h-[50px] w-[165px] items-center gap-3 rounded-lg border border-white bg-black px-3 transition hover:scale-105"
            >
              <Image
                src="/assets/meal-playstore.png"
                alt="Google Play"
                width={24}
                height={24}
              />

              <div className="leading-none">
                <p className="text-[8px] uppercase tracking-wider text-white">
                  Get it on
                </p>

                <p className="mt-1 text-[15px] font-medium text-white">
                  Google Play
                </p>
              </div>
            </Link>

            {/* App Store */}
            <Link
              href="#"
              className="flex h-[50px] w-[165px] items-center gap-3 rounded-lg border border-white bg-black px-3 transition hover:scale-105"
            >
              <Image
                src="/assets/meal-applestore.png"
                alt="App Store"
                width={22}
                height={22}
              />

              <div className="leading-none">
                <p className="text-[8px] text-white">Download on the</p>

                <p className="mt-1 text-[15px] font-medium text-white">
                  App Store
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalized;
