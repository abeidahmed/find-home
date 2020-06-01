import React, { useState } from "react";
import { CategoryModal } from "@components/modal/types/category-modal";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { editCategoryApi } from "@api/category/edit-category";
import { InputField, TextField } from "@components/field";
import { ModalTop, ModalBottom, ModalWrapper } from "@components/modal";
import { useMutation, queryCache } from "react-query";

const EditCategory = ({ id, modalType, closeModal, categoryTitle, categoryContent }) => {
  const [title, setTitle] = useState(categoryTitle);
  const [description, setDescription] = useState(categoryContent);
  const [error, setError] = useState([]);

  const [mutate, { status }] = useMutation(editCategoryApi, {
    onSuccess: () => {
      queryCache.refetchQueries("categoryList");
      closeModal();
    },
    throwOnError: true
  });

  const handleSubmit = async () => {
    try {
      await mutate({
        id,
        title,
        description
      });
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <CategoryModal
      isActive={modalType === "EDIT_CATEGORY"}
      closeModal={closeModal}
      modalTitle="Edit category"
      error={error}
      onTitleChange={e => setTitle(e.target.value)}
      onDescriptionChange={e => setDescription(e.target.value)}
      disabled={status === "loading"}
      handleSubmit={handleSubmit}
      primaryButtonText={status === "loading" ? "Saving..." : "Save changes"}
      title={title}
      description={description}
    />
  );
};

const mapStateToProps = state => {
  const { id, title, content } = state.modal.modalProps;
  return {
    modalType: state.modal.modalType,
    id,
    categoryTitle: title,
    categoryContent: content
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
)(EditCategory);
