import React from "react";

export default function SectionContainer({ children }) {
  return (
    <div className="border-t border-gray-700">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 xl:px-0">
        {children}
      </div>
    </div>
  );
}
