import React from "react";
import { connect } from "react-redux";
import AddCategory from "@admin/views/category/category-list/components/add-category";
import DeleteUser from "@admin/views/user/user-list/components/delete-modal";

const MODAL_COMPONENTS = {
  ADD_CATEGORY: AddCategory,
  DELETE_USER: DeleteUser
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

const mapStateToProps = state => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps
  };
};

export default connect(
  mapStateToProps,
  null
)(ModalRoot);
