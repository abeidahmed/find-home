import React from "react";

const CustomInput = ({ ...props }) => {
  return (
    <input
      className="py-3 px-3 block w-full text-2xl font-medium border border-transparent hover:border-gray-300 focus:border-gray-300 focus:outline-none"
      {...props}
    />
  );
};

export default CustomInput;
