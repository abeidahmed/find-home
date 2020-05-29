import React, { useContext } from "react";
// import { connect } from "react-redux";
import AddCategory from "@admin/views/category/category-list/components/add-category";
import DeleteCategory from "@admin/views/category/category-list/components/delete-category";
import DeleteUser from "@admin/views/user/user-list/components/delete-modal";
import { ModalProvider } from "@/app";

const MODAL_COMPONENTS = {
  ADD_CATEGORY: AddCategory,
  DELETE_CATEGORY: DeleteCategory,
  DELETE_USER: DeleteUser
};

const ModalRoot = () => {
  const { modalState } = useContext(ModalProvider);

  const modalType = modalState.modalType;
  const modalProps = modalState.modalProps;

  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

export default ModalRoot;

// const mapStateToProps = state => {
//   return {
//     modalType: state.modal.modalType,
//     modalProps: state.modal.modalProps
//   };
// };

// export default connect(
//   mapStateToProps,
//   null
// )(ModalRoot);
