import { useState } from "react";
import { Header } from "./component/header";
import Heading from "./component/heading/Heading";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
      <div className="flex justify-center flex-col mx-auto px-5">
        {" "}
        <Heading />
        <div className="container">
          <h1 className="text-center p-5 text-blue-600">Tax Calculator</h1>
          <div>
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
        </div>
      </div>
    </>
  );
}

export default App;
