import React from "react";

export const AvatarWithButton = ({ toggleDropdown, dropdownState }) => {
  return (
    <div>
      <button
        className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-500 transition duration-150 ease-in-out"
        id="user-menu"
        aria-label="User menu"
        aria-haspopup="true"
        onClick={() => toggleDropdown(!dropdownState)}
      >
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>
  );
};
