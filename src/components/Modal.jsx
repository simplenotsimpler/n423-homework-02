import ModalStyles from "../styles/Modal.module.css";
import { useState } from "react";

const Modal = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  console.log(isOpen);
  return (
    <>
      <div onClick={openModal} className={ModalStyles.trigger}>
        {trigger}
      </div>
      {isOpen ? (
        <div onClick={closeModal} className={ModalStyles.modal}>
          <button onClick={closeModal}>X</button>
          <div>{children}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
