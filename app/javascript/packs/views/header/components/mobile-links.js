import React from "react";
import { Link } from "react-router-dom";
import { links } from "./links";

const MobileLinks = () => {
  return (
    <>
      <div className="px-2 pt-2 pb-3">
        {links.map(link => (
          <Link
            key={link.title}
            to={link.path}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            {link.title}
          </Link>
        ))}

        <Link
          to="/login"
          className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-700 focus:outline-none focus:text-indigo-900 transition duration-150 ease-in-out"
        >
          Log in
        </Link>
      </div>
      <div>
        <Link
          to="/signup"
          className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
        >
          Sign up
        </Link>
      </div>
    </>
  );
};

export default MobileLinks;
