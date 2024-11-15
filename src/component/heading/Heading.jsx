import React from "react";

const Heading = () => {
  return (
    <div className="container mx-auto">
    <div className="bg-gray-light text-gray-dark p-5 flex justify-center">
      <div className="flex justify-center flex-col">
        <h1 className="text-center font-bold text-2xl uppercase">Income</h1>
        <p>
          Enter your salary, adjust the settings and see the results in the
          summary below.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Heading;
