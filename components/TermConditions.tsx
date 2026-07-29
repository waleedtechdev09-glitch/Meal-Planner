"use client";
import React, { useState } from "react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content:
      "By accessing or using the Expense Tracker application, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using the service.",
  },
  {
    id: "accounts",
    title: "User Accounts",
    content:
      "To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.",
  },
  {
    id: "acceptable",
    title: "Acceptable Use",
    list: [
      "You agree to use the application only for lawful purposes. You must not:",
      "Violate applicable laws or regulations.",
      "Attempt unauthorized access to our systems.",
      "Distribute harmful software or malicious code.",
      "Interfere with the normal operation of the platform.",
      "Misuse or abuse any features or services.",
    ],
  },
  {
    id: "responsibilities",
    title: "User Responsibilities",
    content:
      "You are responsible for ensuring that the information you provide is accurate and up to date. You agree to use the application responsibly and protect your account credentials from unauthorized access.",
  },
  {
    id: "property",
    title: "Intellectual Property",
    content:
      "All content, software, branding, logos, graphics, and features available within the Expense Tracker application are the property of Elexoft or its licensors and are protected by applicable intellectual property laws.",
  },
  {
    id: "payments",
    title: "Payments & Subscriptions",
    content:
      "If you subscribe to a paid plan, you agree to pay all applicable fees. Subscription charges, renewals, cancellations, and refunds will be handled according to the selected subscription plan.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content:
      "While we strive to provide a reliable and secure service, Elexoft shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the application.",
  },
  {
    id: "termination",
    title: "Termination",
    content:
      "We reserve the right to suspend or terminate your account if you violate these Terms & Conditions or misuse the application.",
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content:
      "We may update these Terms & Conditions from time to time. Any changes will become effective upon publication on this page. Continued use of the application constitutes acceptance of the updated terms.",
  },
  {
    id: "contact",
    title: "Contact Information",
    content: (
      <div className="space-y-2">
        <p className="text-gray-500 text-normal font-normal font-lato">
          Questions about these Terms?
        </p>

        <p className="text-gray-500 leading-8 max-w-3xl text-normal font-normal font-lato">
          Have questions about our Terms & Conditions? Our team is here to help.
          Reach out to us, and we'll respond as soon as possible.
        </p>

        <p className="text-gray-500">
          Email:{" "}
          <a
            href="mailto:info@elexoft.com"
            className="text-orange-500 hover:text-orange-600 underline underline-offset-2 transition"
          >
            info@elexoft.com
          </a>
        </p>
      </div>
    ),
  },
];

export default function TermConditions() {
  const [active, setActive] = useState("acceptance");

  const handleClick = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative bg-white text-[#1E1E1E] min-h-screen overflow-x-hidden">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,#FFE8DD_0%,transparent_70%)] opacity-80 sm:h-96 sm:w-96 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-1 md:py-1">
        {/* Hero: heading + description + date */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mt-10 md:mt-10 lg:mt-10 xl:mt-10 md:text-[54px] font-manrope">
            Terms & Conditions
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base max-w-5xl leading-7 sm:leading-8 font-lato">
            Please read these Terms & Conditions carefully before using the
            Expense Tracker application. By accessing or using our services, you
            agree to be bound by these terms.
          </p>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-orange-500">
            Effective as of: June 2, 2026
          </p>
        </div>

        {/* Grid layout - sidebar hidden on mobile/tablet, visible on desktop */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 sm:gap-10 mt-8 sm:mt-12">
          {/* Sidebar - normal flow, no sticky */}
          <aside className="hidden lg:block space-y-2">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition
                ${
                  active === item.id
                    ? "bg-[#FFF1EC] text-orange-600"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item.title}
              </button>
            ))}
          </aside>

          {/* Content - Full width on mobile/tablet */}
          <div className="min-w-0 lg:col-span-1">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                 className={`scroll-mt-24 sm:scroll-mt-28 pb-6 sm:pb-10 ${
                  section.id !== "contact"
                    ? "border-b-0 md:border-b border-gray-200 mb-6 sm:mb-10"
                    : ""
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                  {section.title}
                </h2>

                {section.content && typeof section.content === "string" && (
                  <p className="text-gray-500 text-sm sm:text-lg leading-7 sm:leading-8">
                    {section.content}
                  </p>
                )}

                {React.isValidElement(section.content) && section.content}

                {section.list && (
                  <ul className="list-disc ml-4 sm:ml-6 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-gray-500 text-sm sm:text-base">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}