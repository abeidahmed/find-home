import React from "react";

export const Checkbox = ({ title, ...props }) => {
  return (
    <label className="inline-flex items-center">
      <input {...props} type="checkbox" className="form-checkbox" />
      <span className="ml-2 text-gray-700">{title}</span>
    </label>
  );
};
