"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      "What makes Smart Meal Planner different from other meal planning apps?",
    answer:
      "Smart Meal Planner uses AI to generate personalized meal plans in seconds, automatically creates grocery lists, and adapts to your dietary preferences, goals, and schedule, saving you hours of manual planning every week.",
  },
  {
    question: "How does AI generate my meal recommendations?",
    answer:
      "Our AI analyzes your dietary preferences, health goals, allergies, and past choices to recommend balanced meals. It continuously learns from your feedback to improve future suggestions.",
  },
  {
    question: "Can I customize my meal plans?",
    answer:
      "Yes, you can swap meals, adjust portion sizes, add your own recipes, and set preferences for cuisines or ingredients you want to include or avoid.",
  },
  {
    question: "Can I use the app for different dietary preferences?",
    answer:
      "Yes. Whether you're vegetarian, vegan, keto, high-protein, gluten-free, or following another diet, the app personalizes recommendations to suit your needs.The app includes a BMI calculator, calorie calculator, water tracker, sleep tracker, and food expense tracker to help you monitor your overall wellness.",
  },
  {
    question: "Can I search for meals using natural language?",
    answer:
      "Yes, simply type what you're craving or the ingredients you have, and the app will suggest matching recipes and meal ideas instantly.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white px-4 py-14 sm:py-20 xl:py-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          <span className="text-gray-900">Frequently Asked </span>
          <span className="text-orange-500">Questions</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
          Everything you need to know about Smart Meal Planner and how it helps
          you achieve your health goals.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="overflow-hidden rounded-xl text-left">
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-4 bg-[#FFF1EC] px-5 py-4 transition-colors sm:px-6 sm:py-5 ${
                    isOpen ? "rounded-xl" : "rounded-xl"
                  }`}
                >
                  <span className="text-sm font-medium text-gray-900 sm:text-base">
                    {faq.question}
                  </span>
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-lg font-normal text-gray-700">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="rounded-b-xl bg-white px-5 py-5 sm:px-6 sm:py-6">
                    <p className="text-sm leading-relaxed text-[#626262] sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
