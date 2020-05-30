import React from "react";
import Icon from "@components/icon";
import ToggleButton from "./toggle-button";

const FeaturedImage = ({ handleToggle, menuActive }) => {
  return (
    <div className="border-b border-gray-300">
      <ToggleButton
        handleToggle={handleToggle}
        menuActive={menuActive}
        buttonTitle="Featured image"
      />
      <div className={`${menuActive ? "block" : "hidden"} pt-1 px-5 mb-4`}>
        <label htmlFor="add_book_file_type">
          <p className="my-1 py-3 px-2 flex flex-col items-center justify-center border border-dashed border-gray-400 rounded-md cursor-pointer">
            <Icon icon="add-image" className="h-6 w-6 text-gray-500" />
            <span className="text-xs text-indigo-700 font-medium">Upload a file</span>
          </p>
        </label>
        <input type="file" id="add_book_file_type" className="hidden" />
      </div>
    </div>
  );
};

export default FeaturedImage;
