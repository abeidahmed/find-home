import React from "react";
import { AdminLayout } from "@components/layout";
import Icon from "@components/icon";
import { SearchField } from "@components/search";
import TagTable from "./components/tag-table";

const TagList = () => {
  return (
    <AdminLayout>
      <div className="flex items-center justify-between space-x-4">
        <div className="max-w-md flex-1">
          <SearchField placeholder="Search tags by title" />
        </div>
        <div>
          <button className="group flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            <span className="-ml-1 pr-1">
              <Icon
                icon="plus"
                className="h-5 w-5 text-gray-200 group-hover:text-white transition ease-in-out duration-150"
              />
            </span>
            Add tag
          </button>
        </div>
      </div>
      <TagTable />
    </AdminLayout>
  );
};

export default TagList;
