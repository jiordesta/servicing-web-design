import React from "react";

export default function Header() {
  return (
    <section className="w-full bg-gray-100 text-white flex justify-between items-center px-8 py-6 sticky top-0 z-40">
      <h1 className="text-green-500 text-3xl font-bold">PlantHUB</h1>
      <div className="hidden lg:flex justify-end items-center gap-2">
        <ul className="flex justify-center items-center gap-3">
          <li>
            <a
              href="#hero"
              className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
            >
              Pricing
            </a>
          </li>
          <a
            href="#contact"
            className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
          >
            Contact
          </a>
        </ul>
      </div>
    </section>
  );
}
