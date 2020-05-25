import React from "react";

export const AvatarWithButton = ({ userInfo, toggleDropdown, dropdownState }) => {
  return (
    <div>
      <button
        className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-500 transition duration-150 ease-in-out"
        id="user-menu"
        aria-label="User menu"
        aria-haspopup="true"
        onClick={() => toggleDropdown(!dropdownState)}
      >
        <img className="h-8 w-8 rounded-full" src={userInfo.avatar} alt={userInfo.fullName} />
      </button>
    </div>
  );
};
