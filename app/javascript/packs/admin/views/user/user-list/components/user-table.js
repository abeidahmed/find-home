import React, { useContext } from "react";
import { connect } from "react-redux";
import Icon from "@components/icon";
import { Link } from "react-router-dom";
import { openModal } from "@actions/modal";
import { TableWrapper, Th, Td } from "@components/table";

const UserTable = ({ users, openModal }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>Joined on</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {users.map(user => (
          <tr key={user.id} className="border-b border-gray-200">
            <td className="px-6 py-4 whitespace-no-wrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full" src={user.avatar} alt={user.fullName} />
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
            <Td>{user.email}</Td>
            <Td>{user.admin ? "Admin" : "User"}</Td>
            <Td>{user.createdAt}</Td>
            <Td textRight>
              <button
                onClick={() =>
                  openModal("DELETE_USER", {
                    id: user.id,
                    title: `Delete ${user.fullName}`,
                    content:
                      "Are you sure you want to delete this user? Once you click on delete, there's no going back."
                  })
                }
                className={`${user.admin && "hidden"} font-medium text-red-600 hover:text-red-900`}
              >
                Delete
              </button>
              <a href="/" className="text-indigo-600 hover:text-indigo-900">
                Edit
              </a>
            </Td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modalType, modalProps) => dispatch(openModal(modalType, modalProps))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserTable);
