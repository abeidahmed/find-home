import React, { useState } from "react";
import { addCategoryApi } from "@api/category/add-category";
import { CategoryModal } from "@components/modal/types/category-modal";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { InputField, TextField } from "@components/field";
import { ModalTop, ModalBottom, ModalWrapper } from "@components/modal";
import { useMutation, queryCache } from "react-query";

const AddCategory = ({ modalType, closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState([]);

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
    <CategoryModal
      isActive={modalType === "Add_CATEGORY"}
      closeModal={closeModal}
      modalTitle="Add category"
      error={error}
      onTitleChange={e => setTitle(e.target.value)}
      onDescriptionChange={e => setDescription(e.target.value)}
      disabled={status === "loading"}
      handleSubmit={handleSubmit}
      primaryButtonText={status === "loading" ? "Adding..." : "Add category"}
      title={title}
      description={description}
    />
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
)(AddCategory);
