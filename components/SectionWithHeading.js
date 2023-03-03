import React, { Children } from "react";
import SectionContainer from "./SectionContainer";

export default function SectionWithHeading({ children, heading }) {
  return (
    <SectionContainer>
      <div className="border-l border-gray-700 py-8 xl:py-20">
        <div className="heading-with-leftborder">
          <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-snug lg:ml-24 2xl:ml-44 pl-4">
            {heading}
          </h2>
        </div>
        <div className="md:pr-12 pt-4 lg:ml-24 2xl:ml-44 pl-4 lg:text-xl 2xl:text-xl">
          {children}
        </div>
      </div>
    </SectionContainer>
  );
}
