import React from "react";
import { fb, insta, twitter, yt } from "../assets/icons";

export default function Footer() {
  return (
    <section className="w-full bg-slate-600 text-white flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:py-28 lg:px-20">
      <div className="flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]">
        <h1 className="text-green-500 font-bold text-4xl">CodeHub</h1>
        <p className="text-lg text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          suscipit tempore nesciunt soluta cupiditate nulla quisquam maxime,
          ducimus perspiciatis nisi.
        </p>
        <div className="flex justify-center items-center gap-4 mt-7">
          <span className="bg-white p-2 rounded-full cursor-pointer hover:bg-green-600">
            <img src={fb} alt="fb" width={20} height={20} />
          </span>
          <span className="bg-white p-2 rounded-full cursor-pointer hover:bg-green-600">
            <img src={insta} alt="instagram" width={20} height={20} />
          </span>
          <span className="bg-white p-2 rounded-full cursor-pointer hover:bg-green-600">
            <img src={twitter} alt="twitter" width={20} height={20} />
          </span>
          <span className="bg-white p-2 rounded-full cursor-pointer hover:bg-green-600">
            <img src={yt} alt="youtube" width={20} height={20} />
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start lg:items-center w-full lg:2-[20%]">
        <ul className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-2xl font-semibold">Pages</h1>
          <li className="text-white cursor-pointer hover:text-green-100">
            Home
          </li>
          <li className="text-white cursor-pointer hover:text-green-100">
            Services
          </li>
          <li className="text-white cursor-pointer hover:text-green-100">
            Testimonials
          </li>
          <li className="text-white cursor-pointer hover:text-green-100">
            Pricing
          </li>
          <li className="text-white cursor-pointer hover:text-green-100">
            Contact
          </li>
        </ul>
      </div>
    </section>
  );
}
