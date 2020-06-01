import React, { useState } from "react";
import { editTagApi } from "@api/tag/edit-tag";
import { closeModal } from "@actions/modal";
import { connect } from "react-redux";
import { InputField, TextField } from "@components/field";
import { ModalTop, ModalBottom, ModalWrapper } from "@components/modal";
import { TagModal } from "@components/modal/types/tag-modal";
import { useMutation, queryCache } from "react-query";

const EditTag = ({ id, modalType, closeModal, tagTitle, tagContent, refetch }) => {
  const [title, setTitle] = useState(tagTitle);
  const [description, setDescription] = useState(tagContent);
  const [error, setError] = useState([]);

  const [mutate, { status }] = useMutation(editTagApi, {
    onSuccess: () => {
      queryCache.refetchQueries(refetch);
      closeModal();
    },
    throwOnError: true
  });

  const handleSubmit = async () => {
    try {
      await mutate({
        id,
        title,
        description
      });
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <TagModal
      isActive={modalType}
      closeModal={closeModal}
      modalTitle="Edit tag"
      error={error}
      onTitleChange={e => setTitle(e.target.value)}
      onDescriptionChange={e => setDescription(e.target.value)}
      disabled={status === "loading"}
      handleSubmit={handleSubmit}
      primaryButtonText={status === "loading" ? "Saving..." : "Save changes"}
      title={title}
      description={description}
    />
  );
};

const mapStateToProps = state => {
  const { id, title, content, refetch } = state.modal.modalProps;
  return {
    modalType: state.modal.modalType,
    id,
    tagTitle: title,
    tagContent: content,
    refetch
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
)(EditTag);
