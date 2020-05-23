import React, { useState } from "react";
import DesktopLinks from "./components/desktop-links";
import Icon from "@components/icon";
import { Link, withRouter } from "react-router-dom";
import LogoFull from "images/logo-full.svg";
import LogoMark from "images/logo-mark.svg";
import MobileLinks from "./components/mobile-links";

const Header = ({ location }) => {
  const [mobileActive, setMobileActive] = useState(false);

  const url = location.pathname;
  if (url.startsWith("/login") || url.startsWith("/signup")) {
    return null;
  }

  return (
    <header className="relative shadow h-16 flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={LogoFull} className="h-8 w-auto" alt="Find home" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <DesktopLinks />
        </div>
        <div className="-mr-2 flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileActive(true)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <Icon icon="menu" className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        className={`${
          mobileActive ? "block" : "hidden"
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden`}
      >
        <div className="rounded-lg shadow-md">
          <div className="rounded-lg bg-white shadow-xs overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link to="/">
                  <img className="h-8 w-auto" src={LogoMark} alt="Find home" />
                </Link>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={() => setMobileActive(false)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <Icon icon="close" className="h-6 w-6" />
                </button>
              </div>
            </div>
            <MobileLinks />
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
