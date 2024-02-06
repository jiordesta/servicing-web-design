import React, { useState } from "react";
import { close, menu } from "../assets/icons";
export default function Header() {
  const [navIconToggle, setNavIconToggle] = useState(false);
  const scrollToSection = (target) => {
    const targetElement = document.querySelector(target);
    const top = targetElement.getBoundingClientRect().top;
    const scrollY = window.scrollY;

    window.scrollTo({
      top: scrollY + top - document.querySelector("#navigation").scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="navigation"
      className="w-full text-white flex justify-between items-center px-8 py-6 sticky top-0 z-40"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
    >
      <h1 className="text-green-500 text-3xl font-bold">PlantHUB</h1>
      <div className="hidden lg:flex justify-end items-center gap-2">
        <ul className="flex justify-center items-center gap-3">
          <li>
            <a
              type="button"
              onClick={() => scrollToSection("#hero")}
              className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
            >
              Home
            </a>
            <a
              type="button"
              onClick={() => scrollToSection("#about")}
              className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
            >
              Services
            </a>
            <a
              type="button"
              onClick={() => scrollToSection("#testimonials")}
              className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
            >
              Testimonials
            </a>
            <a
              type="button"
              onClick={() => scrollToSection("#pricing")}
              className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
            >
              Pricing
            </a>
          </li>
          <a
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
          >
            Contact
          </a>
        </ul>
      </div>
      <div className="flex lg:hidden flex-col text-black">
        {navIconToggle ? (
          <>
            <img
              src={close}
              alt="close"
              width={40}
              height={40}
              onClick={() => setNavIconToggle(!navIconToggle)}
            />
          </>
        ) : (
          <>
            <img
              src={menu}
              alt="menu"
              width={40}
              height={40}
              onClick={() => setNavIconToggle(!navIconToggle)}
            />
          </>
        )}
      </div>
    </section>
  );
}
