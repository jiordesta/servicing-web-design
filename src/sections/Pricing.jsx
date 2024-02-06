import React from "react";
import { tick } from "../assets/icons";
import { pricing } from "../exports";
import PriceGrid from "../components/PriceGrid";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full bg-slate-200 flex-col lg:flex-row justify-center items-start h-fit px-7 py-14 lg:p-20 gap-5"
    >
      <div className="mb-5">
        <h1 className="text-green-500 font-bold text-6xl lg:mb-10 mb-2">
          Pricing Table
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full"></div>
        <p className="text-slate-950 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          quidem facere! Quam laboriosam maxime delectus ut eius tempora
          suscipit molestiae!
        </p>
      </div>
      <div className="w-full flex justify-around items-center flex-wrap gap-10 lg:mt-[100px]">
        {pricing.map((price) => {
          return (
            <div className="w-96" key={price.plan}>
              <PriceGrid {...price} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
