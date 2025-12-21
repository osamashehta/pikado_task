import React from "react";

const ProductContentSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-10 bg-slate-200 rounded w-3/4"></div>

      <div className="space-y-2">
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-2/3"></div>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-8 bg-slate-200 rounded w-24"></div>
        <div className="h-6 bg-slate-200 rounded-full w-20"></div>
      </div>

      <div className="space-y-3">
        <div className="h-4 bg-slate-200 rounded w-1/3"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        <div className="h-4 bg-slate-200 rounded w-1/4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/3"></div>
        <div className="h-4 bg-slate-200 rounded w-2/3"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/3"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default ProductContentSkeleton;
