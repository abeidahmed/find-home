import React from "react";
import { connect } from "react-redux";
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
                to={`/admin/tags/${tag.id}`}
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                {tag.title}
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
                      "Are you sure you want to delete this tag? Once you click on delete, there's no going back.",
                    refetch: "tagList"
                  })
                }
                className="font-medium text-red-600 hover:text-red-900"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  openModal("EDIT_TAG", {
                    id: tag.id,
                    title: tag.title,
                    content: tag.description
                  })
                }
                className="font-medium text-indigo-600 hover:text-indigo-900"
              >
                Edit
              </button>
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
