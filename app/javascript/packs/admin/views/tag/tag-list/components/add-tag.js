import React, { useState } from "react";
import { addTagApi } from "@api/tag/add-tag";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { InputField, TextField } from "@components/field";
import { ModalTop, ModalBottom, ModalWrapper } from "@components/modal";
import { useMutation, queryCache } from "react-query";

const AddTag = ({ modalType, closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState([]);

  const [mutate, { status }] = useMutation(addTagApi, {
    onSuccess: () => {
      queryCache.refetchQueries("tagList");
      closeModal();
    },
    throwOnError: true
  });

  const handleSubmit = async () => {
    try {
      await mutate({
        title,
        description
      });
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <ModalWrapper isActive={modalType === "ADD_TAG"} onOutsideClick={closeModal}>
      <ModalTop>
        <div className="mt-3 text-center sm:mt-0 sm:text-left">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Add Tag</h3>
        </div>
        <div className="mt-5">
          <div>
            <InputField
              id="add_tag_modal_title"
              label="Title"
              error={error}
              errorType="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <TextField
              resizeNone
              id="add_tag_modal_description"
              label="Description"
              error={error}
              errorType="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>
      </ModalTop>
      <ModalBottom>
        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button
            type="button"
            disabled={status === "loading"}
            onClick={handleSubmit}
            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            {status === "loading" ? "Adding..." : "Add tag"}
          </button>
        </span>
        <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            type="button"
            onClick={closeModal}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Cancel
          </button>
        </span>
      </ModalBottom>
    </ModalWrapper>
  );
};

const mapStateToProps = state => {
  return {
    modalType: state.modal.modalType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTag);
