import React from "react";

function Overview() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <h1 className="text-blue-950 text-3xl md:text-4xl lg:text-5xl font-bold">Project Overview</h1>
      <p className="text-sm md:text-base leading-relaxed">
        <span className="text-cyan-700 text-lg font-bold">T</span>his product is a demand service marketplace that connects buyers, sellers & delivery agents on its platform.
      </p>

      <div className="flex justify-center mt-6">
        <img
          src="/assets/Casestudies/Food-Application/Food-app-model.png"
          alt="Food App Model"
          className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl "
        />
      </div>
    </div>
  );
}

export default Overview;
