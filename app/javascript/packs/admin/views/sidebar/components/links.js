import React from "react";
import Icon from "@components/icon";
import { NavLink } from "react-router-dom";

const Links = () => {
  const navLinks = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: "home"
    },
    {
      title: "Posts",
      path: "/admin/posts",
      icon: "pen"
    },
    {
      title: "Categories",
      path: "/admin/categories",
      icon: "slider"
    },
    {
      title: "Tags",
      path: "/admin/tags",
      icon: "tag"
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
        <NavLink
          key={link.title}
          to={link.path}
          activeClassName="bg-gray-200 text-gray-600"
          className="my-1 flex items-center px-2 bg-transparent rounded-md py-2 hover:text-gray-600 transition duration-150"
        >
          <Icon icon={link.icon} className="h-6 w-6" />
          <span className="leading-5 pl-2 text-gray-500">{link.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Links;
