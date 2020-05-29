import React from "react";
import { connect } from "react-redux";
import Icon from "@components/icon";
import { Link } from "react-router-dom";
import { openModal } from "@actions/modal";
import { TableWrapper, Th, Td } from "@components/table";

const TagTable = ({ tags, openModal }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <Th>Title</Th>
          <Th>Description</Th>
          <Th>Post count</Th>
          <Th>Created on</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {tags.map(tag => (
          <tr key={tag.id} className="border-b border-gray-200">
            <Td>
              <Link
                to=""
                className="flex items-center text-sm leading-5 text-gray-900 font-medium hover:text-gray-600"
              >
                {tag.title}
                <Icon icon="link" className="h-5 w-5 text-gray-500 pl-1" />
              </Link>
            </Td>
            <Td>{tag.description}</Td>
            <Td>{tag.postCount}</Td>
            <Td>{tag.createdAt}</Td>
            <Td textRight>
              <button
                onClick={() =>
                  openModal("DELETE_TAG", {
                    id: tag.id,
                    title: `Delete ${tag.title}`,
                    content:
                      "Are you sure you want to delete this tag? Once you click on delete, there's no going back."
                  })
                }
                className="font-medium text-red-600 hover:text-red-900"
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
)(TagTable);
