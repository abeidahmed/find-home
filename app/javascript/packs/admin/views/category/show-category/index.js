import React from "react";
import { AdminLayout } from "@components/layout";
import Icon from "@components/icon";
import { Link } from "react-router-dom";
import { SearchField } from "@components/search";

const ShowCategory = () => {
  return (
    <AdminLayout>
      <div className="sm:flex sm:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            Back End Developer
          </h2>
          <p className="text-gray-700 mt-1 max-w-2xl w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi explicabo dolores unde.
          </p>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
              <Icon icon="book-solid" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              25 posts
            </div>
            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
              <Icon icon="calendar-solid" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              Created on January 9, 2020
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium shadow-sm rounded-md rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
          >
            <Icon icon="pencil-solid" className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
            Edit
          </button>
        </div>
      </div>
      <div className="my-10">
        <h3 className="text-gray-700">Showing posts belonging to Horror category</h3>
        <div className="mt-4">
          <div className="max-w-md flex-1">
            <SearchField placeholder="Search posts by title" />
          </div>
        </div>
        <div className="my-8 shadow overflow-hidden sm:rounded-lg">
          <div className="align-middle inline-block w-full overflow-x-auto border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Tags
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Created on
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <Link
                      to=""
                      className="flex items-center text-sm leading-5 text-gray-900 font-medium hover:text-gray-600"
                    >
                      Post 1
                      <Icon icon="link" className="h-5 w-5 text-gray-500 pl-1" />
                    </Link>
                  </td>
                  <td className="px-6 py-4 truncate max-w-xs whitespace-no-wrap text-sm leading-5 text-gray-900">
                    Abeid Ahmed
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                    Tag1, Tag2, Tag3
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                    26 June, 2005
                  </td>
                  <td className="space-x-2 px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <button className="font-medium text-red-600 hover:text-red-900">Delete</button>
                    <a href="/" className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ShowCategory;
