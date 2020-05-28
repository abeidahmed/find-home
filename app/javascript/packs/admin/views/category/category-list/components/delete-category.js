import React, { useState } from "react";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { DeleteModal } from "@components/modal/types/delete-modal";
import { deleteCategory } from "@api/category/delete-category";

const DeleteCategory = ({ title, content, closeModal, delCategory, modalType }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    delCategory();
    setIsLoading(false);
    closeModal();
  };

  return (
    <DeleteModal
      isActive={modalType === "DELETE_CATEGORY"}
      handleClose={closeModal}
      handleDelete={handleDelete}
      loading={isLoading}
      title={title}
      description={content}
    />
  );
};

const mapStateToProps = state => {
  const { title, content } = state.modal.modalProps;
  return {
    modalType: state.modal.modalType,
    title,
    content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delCategory: () => dispatch(deleteCategory()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategory);
