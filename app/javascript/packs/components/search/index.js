import React from "react";
import Icon from "@components/icon";

export const SearchField = ({ size, show, clear, ...props }) => {
  return (
    <div className="relative">
      <input
        className={`${
          size === "sm" ? "h-9" : size === "lg" ? "h-10" : ""
        } block w-full form-input pl-9 pr-3 text-sm border-gray-300`}
        {...props}
      />
      <div className="pointer-events-none absolute inset-y-0 flex items-center left-0 pl-3">
        <Icon icon="search" className="h-4 w-4 text-gray-500" />
      </div>
      {show && (
        <div className="absolute flex items-center inset-y-0 right-0 mr-3">
          <button
            onClick={clear}
            className="w-5 h-5 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            <Icon icon="close" className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};
