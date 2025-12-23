import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/1">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-gray-600 rounded-full animate-spin" />
    </div>
  );
}
