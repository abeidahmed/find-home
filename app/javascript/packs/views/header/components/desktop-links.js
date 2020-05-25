import React, { useState, useRef } from "react";
import { AvatarWithButton } from "@components/avatar";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { links, profileLinks } from "./links";
import { logoutUser } from "@actions/current-user";
import { useOnOutsideClick } from "@utils/on-outside-click";

const DesktopLinks = ({ logoutUser, currentUser }) => {
  const [profileActive, setProfileActive] = useState(false);
  const ref = useRef();
  useOnOutsideClick(ref, () => setProfileActive(false));

  const history = useHistory();
  const handleLogout = () => {
    logoutUser();
    history.push("/");
  };

  return (
    <nav className="flex items-center space-x-8">
      {links.map(link => (
        <Link
          key={link.title}
          to={link.path}
          className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
        >
          {link.title}
        </Link>
      ))}

      {Object.keys(currentUser).length > 0 ? (
        <div ref={ref} className="relative">
          <AvatarWithButton
            userInfo={currentUser}
            toggleDropdown={setProfileActive}
            dropdownState={profileActive}
          />

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
              {profileLinks.map(profileLink => (
                <Link
                  key={profileLink.title}
                  to={profileLink.path}
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  {profileLink.title}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-md shadow px-5 py-2 border border-transparent leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Sign up
          </Link>
        </>
      )}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesktopLinks);
