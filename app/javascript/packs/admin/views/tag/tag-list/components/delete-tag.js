import React from "react";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { deleteTagApi } from "@api/tag/delete-tag";
import { DeleteModal } from "@components/modal/types/delete-modal";
import { useMutation, queryCache } from "react-query";

const DeleteTag = ({ id, title, content, closeModal, modalType }) => {
  const [mutate, { status }] = useMutation(deleteTagApi, {
    onSuccess: () => {
      queryCache.refetchQueries("tagList");
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
      isActive={modalType === "DELETE_TAG"}
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
)(DeleteTag);
