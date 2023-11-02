import React from "react";
import shoe from "./shoe.jpg";

function Main() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-10 ml-10 p-4">
      <div className="col-span-1">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold uppercase">
          Your Feet Deserve The Best
        </h1>
        <p className="text-stone-500 pl-2 font-sans uppercase mt-5 pt-4 sm:w-96 md:w-96">
          We offer a wide range of products that are designed to provide you
          with the best quality and comfort. We offer a wide range of products
          that are designed to provide you with the best quality and comfort.
        </p>
        <div className="flex flex-row w-full sm:w-72 md:w-72 pl-2 space-x-5 sm:space-x-10 mt-5">
          <button className="bg-red-500 text-white py-2 px-3 rounded-lg hover:bg-red-600">
            Shop now
          </button>
          <button className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600">
            Category
          </button>
        </div>
      </div>
      <div className="col-span-1 ml-4">
        <img
          src={shoe}
          alt="photo of shoe"
          className="w-full max-w-md max-h-1/2 sm:w-full sm:max-h-1/2 md:w-full md:max-h-1/2 object-contain"
        />
      </div>
    </section>
  );
}

export default Main;
