import React, { useContext } from "react";
import Icon from "@components/icon";
import { Link } from "react-router-dom";
import { ModalProvider } from "@/app";

const CategoryTable = ({ categories }) => {
  const { dispatch } = useContext(ModalProvider);

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
                <td className="px-6 py-4 whitespace-no-wrap">
                  <Link
                    to={`/admin/categories/${category.id}`}
                    className="flex items-center text-sm leading-5 text-gray-900 font-medium hover:text-gray-600"
                  >
                    {category.title}
                    <Icon icon="link" className="h-5 w-5 text-gray-500 pl-1" />
                  </Link>
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
                  <button
                    onClick={() =>
                      dispatch({
                        type: "OPEN_MODAL",
                        modalType: "DELETE_CATEGORY",
                        modalProps: {
                          id: category.id,
                          title: `Delete ${category.title}`,
                          content:
                            "Are you sure you want to delete this category? Once you click on delete, there's no going back."
                        }
                      })
                    }
                    className="font-medium text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
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
