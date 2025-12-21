import React from "react";

const ProductSkeletonCard = () => {
  return (
    <div className="animate-pulse border border-[#00000017] bg-primary shadow-[0px_0px_10px_rgba(0,0,0,0.08)] rounded-[29px] px-4 py-5 flex flex-col items-center gap-3 relative  h-100">
      <div className="w-full h-100 bg-slate-200 rounded-[29px]"></div>
      <h2 className="font-semibold  md:text-lg mt-4 text-center text-secondary w-full h-10 bg-slate-200 "></h2>
      <div className="w-full flex items-center justify-center gap-3 ">
        <span className="text-secondary font-medium text-xl w-10 h-4 bg-slate-200"></span>
        <span className="text-sm bg-slate-200 px-2 py-1 w-8 h-4"></span>
      </div>
      <div className="text-secondary  text-[14px] line-clamp-2 w-full h-18 bg-slate-200 "></div>
    </div>
  );
};

export default ProductSkeletonCard;
