import React from "react";

const ProductReviewsSkeleton = () => {
  return (
    <div className="w-full">
      <div className="h-8 bg-slate-200 rounded w-48 mb-6 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse border border-[#00000017] bg-primary shadow-[0px_0px_10px_rgba(0,0,0,0.08)] rounded-[29px] p-6 flex flex-col gap-4"
          >
            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-5 h-5 bg-slate-200 rounded"></div>
              ))}
            </div>

            {/* Comment Lines */}
            <div className="space-y-2 flex-grow">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            </div>

            {/* Reviewer Info */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="h-4 bg-slate-200 rounded w-32"></div>
              <div className="h-3 bg-slate-200 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviewsSkeleton;
