import React from "react";

const PriceDisplay = () => {
  return (
    <div className="p-2 bg-yellow w-full">
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Price
      </label>
      <div className="relative mt-2 rounded-md shadow-sm max-w-40">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          id="price"
          name="price"
          type="text"
          placeholder="0.00"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default PriceDisplay;
