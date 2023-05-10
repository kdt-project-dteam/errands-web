import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchAddress from "./SearchAddress";

export default function ModalAddress() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        주소 입력
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>주소 입력</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SearchAddress />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark">입력</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
