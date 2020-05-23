import React from "react";
import { Link } from "react-router-dom";
import LogoMark from "images/logo-mark.svg";

const Header = () => {
  return (
    <div>
      <img className="mx-auto h-12 w-auto lg:m-0" src={LogoMark} alt="Find homes" />
      <h1 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900 lg:text-left">
        Sign up and get started
      </h1>
      <p className="mt-2 text-center text-sm leading-5 text-gray-600 lg:text-left">
        Existing customer?{" "}
        <Link
          to="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Header;
