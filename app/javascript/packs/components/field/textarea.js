import React from "react";
import { fieldValidation } from "@utils/field-validation";

export const TextField = ({ label, id, error, errorType, resizeNone, ...props }) => {
  return (
    <>
      <label htmlFor={id} className="text-sm text-gray-700 font-medium">
        {label}
      </label>
      <textarea
        id={id}
        rows="10"
        className={`form-input ${fieldValidation(error, errorType) &&
          "form-input-error"} ${resizeNone && "resize-none"} mt-1 block w-full px-3 py-2 shadow`}
        {...props}
      />
      {fieldValidation(error, errorType) && (
        <p className="mt-1 text-sm font-medium text-red-700">{fieldValidation(error, errorType)}</p>
      )}
    </>
  );
};
