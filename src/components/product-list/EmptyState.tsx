import React from "react";

const EmptyState = () => {
  return (
    <div className="col-span-4  w-full h-80 flex justify-center items-center ">
      <h3 className="bg-amber-200 text-amber-900 px-6 h-14 rounded-2xl flex items-center justify-center text-lg font-medium">
        No Products Found
      </h3>
    </div>
  );
};

export default EmptyState;
