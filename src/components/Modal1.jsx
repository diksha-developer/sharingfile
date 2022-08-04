import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Modal1 = ({ showModal, setShowModal }) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
