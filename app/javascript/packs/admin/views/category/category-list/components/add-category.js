import React, { useState } from "react";
import { addCategoryToList } from "@api/category/add-category";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { InputField, TextField } from "@components/field";
import { ModalTop, ModalBottom, ModalWrapper } from "@components/modal";

const AddCategory = ({ addCategoryToList, closeModal, error, modalType }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isActive = modalType === "ADD_CATEGORY";

  return (
    <ModalWrapper isActive={isActive} onOutsideClick={closeModal}>
      <ModalTop>
        <div className="mt-3 text-center sm:mt-0 sm:text-left">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Add category</h3>
        </div>
        <div className="mt-5">
          <div>
            <InputField
              id="add_category_modal_title"
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
              id="add_category_modal_description"
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
            onClick={() => addCategoryToList(title, description)}
            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Add category
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
    modalType: state.modal.modalType,
    error: state.categoryList.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCategoryToList: (title, description) => dispatch(addCategoryToList(title, description)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategory);