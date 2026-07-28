"use client";
import React, { useState } from "react";
import Image from "next/image";

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Contact Us
          </h2>
          <p className="mt-3 max-w-md text-sm text-gray-500 sm:text-base">
            Whether you have a question, need support, want to report an issue,
            or simply have feedback, our team is here to help.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-orange-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Email Address <span className="text-orange-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Message <span className="text-orange-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Enter Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-fit rounded-full bg-gray-900 px-12 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        </div>

        <div className="relative hidden justify-center lg:flex">
          <Image
            src="/assets/contact-image.png"
            alt="Contact support illustration"
            width={500}
            height={500}
            className="h-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
