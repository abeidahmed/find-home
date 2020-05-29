import React, { useState, useContext } from "react";
import { addCategoryApi } from "@api/category/add-category";
import { InputField, TextField } from "@components/field";
import { ModalTop, ModalBottom, ModalWrapper } from "@components/modal";
import { ModalProvider } from "@/app";
import { useMutation, queryCache } from "react-query";

const AddCategory = () => {
  const { modalState, dispatch } = useContext(ModalProvider);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState([]);

  const isActive = modalState.modalType === "ADD_CATEGORY";

  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });

  const [mutate, { status }] = useMutation(addCategoryApi, {
    onSuccess: () => {
      queryCache.refetchQueries("categoryList");
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
            disabled={status === "loading"}
            onClick={handleSubmit}
            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            {status === "loading" ? "Adding..." : "Add category"}
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

export default AddCategory;
