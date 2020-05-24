import React, { useState, useRef } from "react";
import { AvatarWithButton } from "@components/avatar";
import Icon from "@components/icon";
import ProfileLink from "./components/profile-link";
import { useOnOutsideClick } from "@utils/on-outside-click";

const Header = () => {
  const [profileActive, setProfileActive] = useState(false);
  const ref = useRef();
  useOnOutsideClick(ref, () => setProfileActive(false));

  return (
    <header className="px-4 bg-white h-16 z-40 flex items-center border-b border-gray-200">
      <button className="lg:hidden p-1 -ml-2 rounded-md text-gray-700 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">
        <Icon icon="menu" className="h-6 w-6" />
      </button>
      <div ref={ref} className="relative ml-auto">
        <AvatarWithButton toggleDropdown={setProfileActive} dropdownState={profileActive} />
        <ProfileLink profileActive={profileActive} setProfileActive={setProfileActive} />
      </div>
    </header>
  );
};

export default Header;
