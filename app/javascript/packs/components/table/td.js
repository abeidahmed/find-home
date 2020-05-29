import React from "react";

export const Td = ({ children, textRight, ...props }) => {
  return (
    <td
      className={`${textRight &&
        "text-right space-x-2 font-medium"} px-6 py-4 truncate max-w-xs whitespace-no-wrap text-sm leading-5 text-gray-900`}
      {...props}
    >
      {children}
    </td>
  );
};
