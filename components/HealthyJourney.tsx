import React from "react";
import Image from "next/image";

const HealthyJourney = () => {
  return (
    <section
      id="healthy-journey"
      className="relative bg-white px-4 py-10 sm:px-6 sm:py-14 overflow-x-hidden"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center hidden sm:block"
          style={{ backgroundImage: "url('/assets/healthy-bg-lines.png')" }}
        />
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_bottom_left,#FF6B35_0%,transparent_70%)] opacity-20" />
        <div className="relative flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-10 sm:py-14">
          <div>
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              Start Your{" "}
              <span className="text-orange-500">Healthy Journey Today</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 sm:text-base">
              Eat smarter with AI-powered meal planning, personalized recipes,
              and wellness tracking—all designed to help you achieve your health
              goals.
            </p>
          </div>

          <div className="flex w-full flex-row flex-nowrap items-center justify-center gap-2 sm:w-auto sm:gap-3">
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-1/2 h-auto min-h-[42px] rounded-lg border-2 border-gray-400 bg-black px-2 py-2 transition-all duration-200 hover:bg-neutral-900 hover:scale-[1.10] overflow-hidden transform sm:w-[160px] sm:h-[50px] sm:px-3 sm:py-0 sm:gap-3"
            >
              <div className="relative h-5 w-5 shrink-0 sm:h-6 sm:w-6">
                <Image
                  src="/assets/meal-playstore.png"
                  alt="Google Play"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] uppercase tracking-wider font-medium text-white sm:text-[8px]">
                  Get it on
                </span>
                <span className="mt-[2px] text-sm font-medium text-white sm:text-[15px]">
                  Google Play
                </span>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-2 w-1/2 h-auto min-h-[42px] rounded-lg border-2 border-gray-400 bg-black px-2 py-2 transition-all duration-200 hover:bg-neutral-900 hover:scale-[1.10] overflow-hidden transform sm:w-[160px] sm:h-[50px] sm:px-3 sm:py-0 sm:gap-3"
            >
              <div className="relative h-5 w-5 shrink-0 sm:h-6 sm:w-6">
                <Image
                  src="/assets/meal-applestore.png"
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] tracking-wide font-medium text-white sm:text-[8px]">
                  Download on the
                </span>
                <span className="mt-[2px] text-sm font-medium text-white sm:text-[15px]">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthyJourney;
