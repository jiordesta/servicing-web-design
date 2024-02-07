import React, { useEffect, useState } from "react";
import { close, menu } from "../assets/icons";

export default function Header() {
  const [navIconToggle, setNavIconToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const scrollToSection = (target) => {
    const targetElement = document.querySelector(target);
    const top = targetElement.getBoundingClientRect().top;
    const scrollY = window.scrollY;

    window.scrollTo({
      top: scrollY + top - document.querySelector("#navigation").scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setMenuClass(
      navIconToggle
        ? "transition-opacity ease-in-out duration-500 transform translate-y-0 opacity-100"
        : "transition-opacity ease-in-out duration-300 transform -translate-y-full opacity-0"
    );
  }, [navIconToggle]);

  return (
    <section
      id="navigation"
      className="w-full text-white flex justify-between items-center px-8 py-6 sticky top-0 z-40"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
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
          </li>
          <li>
            <a
              type="button"
              onClick={() => scrollToSection("#about")}
              className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
            >
              Services
            </a>
          </li>
          <li>
            <a
              type="button"
              onClick={() => scrollToSection("#testimonials")}
              className="text-lg text-black cursor-pointer rounded-sm px-5 py-2 hover:text-green-500 active:underline"
            >
              Testimonials
            </a>
          </li>
          <li>
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
        <div
          className="burger-menu text-green-500"
          onClick={() => {
            setNavIconToggle(!navIconToggle);
            document.querySelector(".burger-menu").classList.toggle("active");
          }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {navIconToggle && (
          <div
            className={`bg-white py-4 absolute top-[88px] right-0 w-full ${menuClass}`}
          >
            <ul className="text-end text-green-500 px-5 font-semibold text-2xl">
              <li>
                <a
                  type="button"
                  onClick={() => scrollToSection("#hero")}
                  className="cursor-pointer rounded-sm px-5 py-2 hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  type="button"
                  onClick={() => scrollToSection("#about")}
                  className="cursor-pointer rounded-sm px-5 py-2 hover:underline"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  type="button"
                  onClick={() => scrollToSection("#testimonials")}
                  className="cursor-pointer rounded-sm px-5 py-2 hover:underline"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  type="button"
                  onClick={() => scrollToSection("#pricing")}
                  className="cursor-pointer rounded-sm px-5 py-2 hover:underline"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  type="button"
                  onClick={() => scrollToSection("#contact")}
                  className="cursor-pointer rounded-sm px-5 py-2 hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
