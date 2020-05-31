import React from "react";

const CustomTextarea = ({ ...props }) => {
  return (
    <textarea
      {...props}
      style={{ height: "calc(100vh - 250px)" }}
      className="py-3 px-3 block w-full text-base font-medium border border-transparent resize-none hover:border-gray-300 focus:border-gray-300 focus:outline-none"
    />
  );
};

export default CustomTextarea;
