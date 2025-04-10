import { createPortal } from "react-dom";

import { ReactComponent as Cross } from "../../../svg/cross-ico.svg";

import "./index.css";

const popupContainer = document.getElementById("popup");

const Confirm = ({ text, onYes, onNo, onClose, open }) => {
  const handleYes = () => {
    if (onYes) {
      onYes();
    }
  };

  const handleNo = () => {
    if (onNo) {
      onNo();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const overlayClassName = open
    ? "confirm-popup-overlay open"
    : "confirm-popup-overlay";

  const confirm = (
    <div className={overlayClassName}>
      <div className="confirm-popup">
        <button
          type="button"
          className="confirm-popup__button-close"
          onClick={handleClose}
        >
          <Cross />
        </button>
        <p className="confirm-popup__text">{text}</p>
        <div className="confirm-popup__buttons">
          <button type="button" onClick={handleYes}>
            Да
          </button>
          <button type="button" onClick={handleNo}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(confirm, popupContainer);
};

export default Confirm;
