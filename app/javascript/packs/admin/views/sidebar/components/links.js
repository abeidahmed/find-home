import React from "react";
import Icon from "@components/icon";
import { Link } from "react-router-dom";

const Links = () => {
  const navLinks = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: "home"
    },
    {
      title: "Posts",
      path: "/admin/dashboard",
      icon: "pen"
    },
    {
      title: "Categories",
      path: "/admin/categories",
      icon: "slider"
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: "users"
    }
  ];

  return (
    <nav className="mt-2 mb-4 px-1 text-gray-400 font-medium">
      {navLinks.map(link => (
        <Link
          key={link.title}
          to={link.path}
          className="my-1 flex items-center px-2 bg-transparent rounded-md py-2 hover:text-gray-600 transition duration-150"
        >
          <Icon icon={link.icon} className="h-6 w-6" />
          <span className="leading-5 pl-2 text-gray-500">{link.title}</span>
        </Link>
      ))}
      <Link
        to="/admin/dashboard"
        className="my-1 flex items-center px-2 bg-gray-200 text-gray-600 rounded-md py-2"
      >
        <Icon icon="zap" className="h-6 w-6" />
        <span className="leading-5 pl-2 text-gray-900">Profile</span>
      </Link>
    </nav>
  );
};

export default Links;
