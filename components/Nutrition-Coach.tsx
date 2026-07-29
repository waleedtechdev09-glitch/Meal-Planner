import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "AI MEALS GENERATED",
    value: "50K+",
    description:
      "Personalized meals created based on users' health goals and dietary preferences.",
  },
  {
    id: 2,
    title: "HEALTHY RECIPES",
    value: "10K+",
    description:
      "Discover nutritious recipes tailored to your lifestyle, ingredients, and favorite cuisines.",
  },
  {
    id: 3,
    title: "WELLNESS TRACKING",
    value: "4-in-1",
    description:
      "Monitor calories, BMI, water intake, and sleep—all in one place.",
  },
  {
    id: 4,
    title: "USER SATISFACTION",
    value: "4.9/5",
    description:
      "Loved by thousands for making healthy eating simple, personalized, and enjoyable.",
  },
];

const Nutrition = () => {
  return (
    <section className="bg-[#FFF8F5]  px-5 lg:px-8 relative overflow-hidden xl:-mt-10 lg:-mt-15 md:-mt-15 -mt-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFE8DD_0%,transparent_35%)] hidden md:block" />

      <div className="mx-auto max-w-7xl overflow-hidden relative">
        {/* Top */}
        <div className="flex flex-col gap-8 p-6 md:p-6 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-4xl">
            <h2 className=" text-3xl mt-4 font-bold leading-tight text-[#1E1E1E] md:text-3xl lg:text-3xl xl:text-3xl">
              Your Personal{" "}
              <span className="text-[#FF6B35]">AI Nutrition Coach,</span>{" "}
              Available 24/7
            </h2>

            <p className="mt-4 text-base leading-7 text-[#818181]">
              Smart Meal Planner helps you eat healthier, save time, and stay
              consistent with personalized meal plans, AI-powered
              recommendations, and wellness tracking—all from a single app.
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1E1E1E] px-6 py-3 text-sm font-medium text-white transition hover:bg-black md:w-fit"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 md:p-8 ${
                index !== stats.length - 1
                  ? "border-[#F2E4DD] sm:border-r"
                  : ""
              }`}
            >
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#FF6B35]">
                {item.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#363535]">
                {item.value}
              </h3>

              <p className="lg:mt-14 text-sm leading-6 text-[#888888]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
