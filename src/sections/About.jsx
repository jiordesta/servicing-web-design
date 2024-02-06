import React from "react";
import { aboutgrids } from "../exports";
import AboutGrid from "../components/AboutGrid";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit px-7 py-4 lg:px-16 lg:py-12"
    >
      <div className="flex justify-center items-start flex-col gap-8 lg:w-1/2">
        <h1 className="text-green-500 font-bold text-6xl">
          Hosting Solutions with benifits
        </h1>
        <div className="text-slate-05 text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestias
          culpa asperiores provident, dolores doloremque eveniet aperiam maiores
          iusto commodi!
        </div>
        <div className="flex justify-center items-center gap-7">
          <button className="bg-green-800 text-white px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer">
            Read more
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center w-full lg:w-1/2 flex-wrap">
        {aboutgrids.map((grid) => {
          return (
            <div key={grid.heading} className="w-full lg:w-1/2">
              <AboutGrid {...grid} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
