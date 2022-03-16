import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';

const ShoppingCartPopUp = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <button 
     onClick={handleShow}
     className="shoppingCart">
         My shopping cart </button>
        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">My shopping cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>No items found</Modal.Body>
      </Modal>
    </>
  );
};

export default ShoppingCartPopUp;
