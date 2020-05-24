import React, { useRef, useState } from "react";
import Icon from "@components/icon";
import { Link } from "react-router-dom";
import { useOnOutsideClick } from "@utils/on-outside-click";

const FilterButton = ({ match }) => {
  const [filterActive, setFilterActive] = useState(false);
  const ref = useRef();
  useOnOutsideClick(ref, () => setFilterActive(false));

  return (
    <span ref={ref} className="relative shadow-sm rounded-md">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
        id="menu"
        aria-haspopup="true"
        onClick={() => setFilterActive(!filterActive)}
      >
        Filter
        <Icon icon="chevron-down" className="-mr-1 ml-2 h-5 w-5 text-gray-500" />
      </button>
      <div
        className={`${
          filterActive ? "block" : "hidden"
        } origin-top-right absolute right-0 mt-2 -mr-1 w-32 rounded-md shadow-lg`}
        aria-labelledby="menu"
        role="menu"
      >
        <div className="py-1 rounded-md bg-white shadow-xs">
          <Link
            to={`${match.path}`}
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            role="menuitem"
          >
            All
          </Link>
          <Link
            to={`${match.path}?user_role=admin`}
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            role="menuitem"
          >
            Admin
          </Link>
          <Link
            to={`${match.path}?user_role=user`}
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            role="menuitem"
          >
            Users
          </Link>
        </div>
      </div>
    </span>
  );
};

export default FilterButton;
