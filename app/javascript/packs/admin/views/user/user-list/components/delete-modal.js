import React, { useState } from "react";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { DeleteModal } from "@components/modal/types/delete-modal.js";
import { deleteUser } from "@api/user/delete-user";

const DeleteUser = ({ title, content, closeModal, deleteUser, modalType }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    deleteUser();
    setIsLoading(false);
    closeModal();
  };

  return (
    <DeleteModal
      isActive={modalType === "DELETE_USER"}
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
    deleteUser: () => dispatch(deleteUser()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteUser);
