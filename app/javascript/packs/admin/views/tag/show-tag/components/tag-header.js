import React from "react";
import { connect } from "react-redux";
import Icon from "@components/icon";
import { openModal } from "@actions/modal";

const TagHeader = ({ id, title, description, postCountInWords, createdAt, openModal }) => {
  return (
    <>
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          {title}
        </h2>
        <p className="text-gray-700 mt-1 max-w-2xl w-full">{description}</p>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
            <Icon icon="book-solid" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
            {postCountInWords}
          </div>
          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
            <Icon icon="calendar-solid" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
            Created on {createdAt}
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-0 sm:ml-4">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium shadow-sm rounded-md rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
          onClick={() =>
            openModal("EDIT_TAG", {
              id,
              title,
              content: description,
              refetch: "showTag"
            })
          }
        >
          <Icon icon="pencil-solid" className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
          Edit
        </button>
      </div>
    </>
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
)(TagHeader);
