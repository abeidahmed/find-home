import React from "react";

const CategoryTable = ({ categories }) => {
  return (
    <div className="my-8 shadow overflow-hidden sm:rounded-lg">
      <div className="align-middle inline-block w-full overflow-x-auto border-b border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Post count
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Created on
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {categories.map(category => (
              <tr key={category.id} className="border-b border-gray-200">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 font-medium">
                  {category.title}
                </td>
                <td className="px-6 py-4 truncate max-w-xs whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {category.description}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {category.postCount}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {category.createdAt}
                </td>
                <td className="space-x-2 px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <button className="font-medium text-red-600 hover:text-red-900">Delete</button>
                  <a href="/" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;
