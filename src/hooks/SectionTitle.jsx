import React from "react";

const SectionTitle = ({heading}) => {
  return (
    <div className="text-center max-w-[80%] mx-auto mb-14">
      <p className="text-gray-600 block uppercase mb-2 text-xl font-bold">
        --- {heading} ---
      </p>
    </div>
  );
};


export default SectionTitle;