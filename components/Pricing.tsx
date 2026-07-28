"use client";

import { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: "$49.99",
    save: "Save 17%",
    description:
      "AI meal planning, recipe search, grocery lists, and water tracking for healthier everyday eating.",
  },
  {
    name: "Pro",
    price: "$99.99",
    save: "Save 21%",
    description:
      "Advanced AI meal planning, personalized nutrition, wellness tracking, and healthy lifestyle tools.",
    active: true,
  },
  {
    name: "Premium",
    price: "$149.99",
    save: "Save 34%",
    description:
      "Unlimited AI meal generation, advanced insights, premium wellness tools, and priority support.",
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="relative overflow-hidden bg-[#1E1E1E] py-20">
      {/* Background Image */}
      <div
        className="absolute hidden inset-0 opacity-20 md:block"
        style={{
          backgroundImage: "url('/assets/pricing-bg.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-[#FF6B35]">Flexible Plans</span>{" "}
            <span className="text-white">For Every Lifestyle</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#B8B8B8] md:text-base">
            Unlock AI-powered meal planning, personalized nutrition, grocery
            lists, and wellness tracking with one simple subscription.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <span
            className={`text-sm font-medium ${
              !yearly ? "text-white" : "text-[#B5B5B5]"
            }`}
          >
            Monthly
          </span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`relative h-9 w-16 rounded-full border border-[#FF6B35] transition ${
              yearly ? "bg-[#2B2B2B]" : "bg-[#2B2B2B]"
            }`}
          >
            <span
              className={`absolute top-1 h-7 w-7 rounded-full bg-[#FF6B35] transition-all duration-300 ${
                yearly ? "right-1" : "left-1"
              }`}
            />
          </button>

          <span
            className={`text-sm font-medium ${
              yearly ? "text-white" : "text-[#B5B5B5]"
            }`}
          >
            Yearly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-[28px] border border-[#333] px-8 py-10 text-center backdrop-blur-xs transition duration-300 hover:border-[#FF6B35] "
            >
              <h3 className="text-2xl font-semibold text-white">
                {plan.name}{" "}
                <span className="text-sm font-medium text-[#FF6B35]">
                  ({plan.save})
                </span>
              </h3>

              <div className="mt-5">
                <span className="text-5xl font-bold text-white">
                  {plan.price}
                </span>

                <span className="text-[#B8B8B8]">/yearly</span>
              </div>

              <p className="mt-8 text-sm leading-7 text-[#9D9D9D]">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
