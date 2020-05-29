import React from "react";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { deleteUserApi } from "@api/user/delete-user";
import { DeleteModal } from "@components/modal/types/delete-modal";
import { useMutation, queryCache } from "react-query";

const DeleteUser = ({ id, title, content, modalType, closeModal }) => {
  const [mutate, { status }] = useMutation(deleteUserApi, {
    onSuccess: () => {
      queryCache.refetchQueries("userList");
    },
    throwOnError: true
  });

  const handleDelete = async () => {
    try {
      await mutate({ id });
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DeleteModal
      isActive={modalType === "DELETE_USER"}
      handleClose={closeModal}
      handleDelete={handleDelete}
      loading={status === "loading"}
      title={title}
      description={content}
    />
  );
};

const mapStateToProps = state => {
  const { id, title, content } = state.modal.modalProps;
  return {
    modalType: state.modal.modalType,
    id,
    title,
    content
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
)(DeleteUser);
