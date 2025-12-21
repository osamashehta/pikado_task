import React from "react";

const ErrorState = () => {
  return (
    <div className="col-span-4 w-full h-80 flex justify-center items-center ">
      <h3 className="bg-red-200 text-red-900 px-6 h-14 rounded-2xl flex items-center justify-center text-lg font-medium">
        Failed to load products. Please try again.
      </h3>
    </div>
  );
};

export default ErrorState;
