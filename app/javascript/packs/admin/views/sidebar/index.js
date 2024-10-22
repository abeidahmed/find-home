import React from "react";
import { closeSidebar } from "@actions/sidebar";
import { connect } from "react-redux";
import Icon from "@components/icon";
import { Link } from "react-router-dom";
import Links from "./components/links";
import LogoFull from "images/logo-full.svg";

const Sidebar = ({ closeSidebar, isActive }) => {
  return (
    <aside
      className={`${
        isActive ? "translate-x-0" : "-translate-x-full"
      } transform lg:translate-x-0 fixed top-0 lg:sticky w-64 z-50 h-screen overflow-y-hidden flex flex-col border-r border-gray-200 bg-white flex-shrink-0 transition duration-150 ease-in-out`}
    >
      <div className="h-16 flex flex-shrink-0 items-center justify-between px-3">
        <Link to="/">
          <img src={LogoFull} className="h-8 w-auto" alt="Find home" />
        </Link>
        <button
          onClick={closeSidebar}
          className="lg:hidden p-1 -mr-2 rounded-md text-gray-700 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
        >
          <Icon icon="close" className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Links />
      </div>
    </aside>
  );
};

const mapStateToProps = state => {
  return {
    isActive: state.sidebar.isActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeSidebar: () => dispatch(closeSidebar())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
