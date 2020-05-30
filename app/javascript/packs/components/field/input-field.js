import React from "react";
import { fieldValidation } from "@utils/field-validation";

export const InputField = ({ size, label, id, error, errorType, ...props }) => {
  return (
    <>
      <label htmlFor={id} className="text-sm text-gray-700 font-medium">
        {label}
      </label>
      <input
        id={id}
        className={`form-input ${fieldValidation(error, errorType) && "form-input-error"} ${
          size === "sm" ? "h-9" : "h-10"
        } mt-1 block w-full px-3 py-2 shadow`}
        {...props}
      />
      {fieldValidation(error, errorType) && (
        <p className="mt-1 text-sm font-medium text-red-700">{fieldValidation(error, errorType)}</p>
      )}
    </>
  );
};
