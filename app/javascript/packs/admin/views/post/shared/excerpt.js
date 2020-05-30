import React from "react";
import { TextField } from "@components/field";
import ToggleButton from "./toggle-button";

const Excerpt = ({ handleToggle, menuActive, ...props }) => {
  return (
    <div className="border-b border-gray-300">
      <ToggleButton handleToggle={handleToggle} menuActive={menuActive} buttonTitle="Excerpt" />
      <div className={`${menuActive ? "block" : "hidden"} pt-1 px-5 mb-4`}>
        <TextField label="Write an excerpt (optional)" id="add_post_excerpt" rows="5" {...props} />
      </div>
    </div>
  );
};

export default Excerpt;
