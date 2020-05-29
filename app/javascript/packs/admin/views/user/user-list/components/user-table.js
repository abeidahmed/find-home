import React, { useContext } from "react";
import Icon from "@components/icon";
import { Link } from "react-router-dom";
import { ModalProvider } from "@/app";

const UserTable = ({ users }) => {
  const { dispatch } = useContext(ModalProvider);

  return (
    <div className="my-8 shadow overflow-hidden sm:rounded-lg">
      <div className="align-middle inline-block w-full overflow-x-auto border-b border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Joined on
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map(user => (
              <tr key={user.id} className="border-b border-gray-200">
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.avatar}
                        alt={user.fullName}
                      />
                    </div>
                    <div className="ml-4">
                      <Link
                        to=""
                        className="flex items-center text-sm leading-5 text-gray-900 font-medium hover:text-gray-600"
                      >
                        {user.fullName}
                        <Icon icon="link" className="h-5 w-5 text-gray-500 pl-1" />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {user.admin ? "Admin" : "User"}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {user.createdAt}
                </td>
                <td className="space-x-2 px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "OPEN_MODAL",
                        modalType: "DELETE_USER",
                        modalProps: {
                          id: user.id,
                          title: `Delete ${user.fullName}`,
                          content:
                            "Are you sure you want to delete this user? Once you click on delete, there's no going back."
                        }
                      })
                    }
                    className={`${user.admin &&
                      "hidden"} font-medium text-red-600 hover:text-red-900`}
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

export default UserTable;
