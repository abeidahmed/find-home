import React from "react";
import { connect } from "react-redux";
import AddCategory from "@admin/views/category/category-list/components/add-category";
import DeleteCategory from "@admin/views/category/category-list/components/delete-category";
import EditCategory from "@admin/views/category/shared/edit-category";
import DeleteUser from "@admin/views/user/user-list/components/delete-modal";
import AddTag from "@admin/views/tag/tag-list/components/add-tag";
import DeleteTag from "@admin/views/tag/tag-list/components/delete-tag";
import EditTag from "@admin/views/tag/shared/edit-tag";

const MODAL_COMPONENTS = {
  ADD_CATEGORY: AddCategory,
  DELETE_CATEGORY: DeleteCategory,
  EDIT_CATEGORY: EditCategory,
  DELETE_USER: DeleteUser,
  ADD_TAG: AddTag,
  DELETE_TAG: DeleteTag,
  EDIT_TAG: EditTag
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
