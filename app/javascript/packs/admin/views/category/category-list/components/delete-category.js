import React, { useState, useContext } from "react";
import axios from "axios";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { DeleteModal } from "@components/modal/types/delete-modal";
import { deleteCategory } from "@api/category/delete-category";
import { ModalProvider } from "@/app";
import { useQuery, useMutation, queryCache } from "react-query";
import { authToken } from "@/middleware/auth-token";

const DeleteCategory = () => {
  const { modalState, dispatch } = useContext(ModalProvider);

  const modalType = modalState.modalType;
  const modalProps = modalState.modalProps;

  const deleteCategoryApi = async () => {
    const res = await axios.delete(`/api/v1/categories/${modalProps.id}`, authToken());
    return res;
  };

  const [mutate] = useMutation(deleteCategoryApi, {
    onSuccess: () => {
      queryCache.refetchQueries("deleteCategory");
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    mutate();
    closeModal();
  };

  const todoListQuery = useQuery("deleteCategory", deleteCategoryApi);
  console.log(todoListQuery);

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <DeleteModal
      isActive={modalType === "DELETE_CATEGORY"}
      handleClose={handleClose}
      handleDelete={handleDelete}
      loading={isLoading}
      title={modalProps.title}
      description={modalProps.content}
    />
  );
};

export default DeleteCategory;
