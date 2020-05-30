import React from "react";
import Icon from "@components/icon";

const ToggleButton = ({ handleToggle, menuActive, buttonTitle }) => {
  return (
    <button
      onClick={handleToggle}
      className="px-4 py-3 text-gray-700 flex items-center justify-between w-full hover:text-gray-900 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
    >
      {buttonTitle}
      <Icon
        icon="chevron-right"
        className={`${menuActive &&
          "transform rotate-90"} h-5 w-5 transition duration-150 ease-in-out`}
      />
    </button>
  );
};

export default ToggleButton;
