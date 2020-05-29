import React from "react";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { deleteCategoryApi } from "@api/category/delete-category";
import { DeleteModal } from "@components/modal/types/delete-modal";
import { useMutation, queryCache } from "react-query";

const DeleteCategory = ({ id, title, content, closeModal, modalType }) => {
  const [mutate, { status }] = useMutation(deleteCategoryApi, {
    onSuccess: () => {
      queryCache.refetchQueries("categoryList");
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
      isActive={modalType === "DELETE_CATEGORY"}
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
)(DeleteCategory);
