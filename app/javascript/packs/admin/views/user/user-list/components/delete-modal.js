import React, { useContext } from "react";
import { deleteUserApi } from "@api/user/delete-user";
import { DeleteModal } from "@components/modal/types/delete-modal";
import { ModalProvider } from "@/app";
import { useMutation, queryCache } from "react-query";

const DeleteUser = () => {
  const { modalState, dispatch } = useContext(ModalProvider);

  const modalType = modalState.modalType;
  const modalProps = modalState.modalProps;

  const [mutate, { status }] = useMutation(deleteUserApi, {
    onSuccess: () => {
      queryCache.refetchQueries("userList");
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
      isActive={modalType === "DELETE_USER"}
      handleClose={handleClose}
      handleDelete={handleDelete}
      loading={status === "loading"}
      title={modalProps.title}
      description={modalProps.content}
    />
  );
};

export default DeleteUser;
