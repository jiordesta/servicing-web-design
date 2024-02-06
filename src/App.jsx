import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
