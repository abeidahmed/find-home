import React, { useContext } from "react";
import { deleteCategoryApi } from "@api/category/delete-category";
import { DeleteModal } from "@components/modal/types/delete-modal";
import { ModalProvider } from "@/app";
import { useMutation, queryCache } from "react-query";

const DeleteCategory = () => {
  const { modalState, dispatch } = useContext(ModalProvider);

  const modalType = modalState.modalType;
  const modalProps = modalState.modalProps;

  const [mutate, { status }] = useMutation(deleteCategoryApi, {
    onSuccess: () => {
      queryCache.refetchQueries("categoryList");
    },
    throwOnError: true
  });

  const handleDelete = async () => {
    try {
      await mutate({ id: modalProps.id });
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => dispatch({ type: "CLOSE_MODAL" });

  return (
    <DeleteModal
      isActive={modalType === "DELETE_CATEGORY"}
      handleClose={handleClose}
      handleDelete={handleDelete}
      loading={status === "loading"}
      title={modalProps.title}
      description={modalProps.content}
    />
  );
};

export default DeleteCategory;
