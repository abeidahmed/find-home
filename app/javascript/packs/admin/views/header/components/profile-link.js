import React from "react";
import { Link } from "react-router-dom";

const ProfileLinks = ({ profileActive, setProfileActive }) => {
  const links = [
    {
      title: "Profile",
      path: "/"
    },
    {
      title: "Settings",
      path: "/"
    }
  ];

  return (
    <div
      className={`${
        profileActive ? "block" : "hidden"
      } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}
    >
      <div
        className="py-1 rounded-md bg-white shadow-xs"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        {links.map(link => (
          <Link
            key={link.title}
            to={link.path}
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            {link.title}
          </Link>
        ))}
        <button className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default ProfileLinks;
