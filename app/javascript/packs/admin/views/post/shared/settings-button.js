import React from "react";
import Icon from "@components/icon";

const SettingsButton = ({ handleToggle, toggleState }) => {
  return (
    <button
      onClick={handleToggle}
      className={`${toggleState &&
        "bg-gray-100"} p-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out`}
    >
      <Icon icon="cog" className="h-5 w-5" />
    </button>
  );
};

export default SettingsButton;
