import React from "react";

const HealthyJourney = () => {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#1a1a1a] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/healthy-bg-lines.png')" }}
      >
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

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl border border-gray-600 bg-black px-4 py-2.5 transition-colors hover:bg-gray-900"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 flex-shrink-0">
                <path
                  fill="#00D9FF"
                  d="M3.6 2.8c-.3.3-.5.7-.5 1.2v16c0 .5.2.9.5 1.2l.1.1L13 12 3.7 2.7l-.1.1z"
                />
                <path
                  fill="#00F076"
                  d="M13 12l3.4-3.4-9.6-5.6c-.3-.2-.7-.2-1 0L13 12z"
                />
                <path
                  fill="#FF3A44"
                  d="M13 12l-7.2 7c.3.2.7.2 1 0l9.6-5.6L13 12z"
                />
                <path
                  fill="#FFCF00"
                  d="M19.8 10.5l-3.4-2-3.4 3.5 3.4 3.5 3.4-2c1-.6 1-1.9 0-2.5z"
                />
              </svg>
              <div className="text-left leading-tight">
                <p className="text-[10px] uppercase tracking-wide text-gray-300">
                  Get it on
                </p>
                <p className="text-base font-semibold text-white">
                  Google Play
                </p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-xl border border-gray-600 bg-black px-4 py-2.5 transition-colors hover:bg-gray-900"
            >
              <svg
                viewBox="0 0 384 512"
                className="h-6 w-6 flex-shrink-0 fill-white"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-19.4-27.8-48.7-43.1-87.1-46-36.3-2.8-76.1 21.2-91.6 21.2-16.3 0-51.5-20.3-79.8-19.8-59.5.9-115.8 47.2-115.8 133.1 0 24.4 4.5 49.6 13.4 75.7 12 34.7 55.1 119.6 100.1 118.1 23.6-.6 40.3-16.8 71.3-16.8 30 0 45.4 16.8 71.6 16.8 45.4-.7 84.5-77.9 96-112.6-61-28.7-58.4-84.2-27.9-84.9zM251.9 65.9c-16.5 19.5-44.2 34.6-71.5 32.4-3.4-27.5 9.9-56.6 25.8-74.5C222.9 4.2 253.6-9.8 279.7 0c3.9 27.2-9.6 55.7-27.8 65.9z" />
              </svg>
              <div className="text-left leading-tight">
                <p className="text-[10px] uppercase tracking-wide text-gray-300">
                  Download on the
                </p>
                <p className="text-base font-semibold text-white">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthyJourney;
