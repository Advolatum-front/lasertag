import { createPortal } from "react-dom";

import { ReactComponent as Cross } from "../../../svg/cross-ico.svg";

import { PDT_ALERT, PDT_CONFIRM } from "../../../utils/popup-dialog-types";

import "./index.css";

const popupContainer = document.getElementById("popup");

const Confirm = ({ text, onYes, onNo, onClose, open, type }) => {
  const handleYes = () => {
    onYes?.();
  };

  const handleNo = () => {
    onNo?.();
  };

  const handleClose = () => {
    onClose?.();
  };

  const buttonYesNo = type === PDT_CONFIRM && (
    <>
      <button type="button" onClick={handleYes}>
        Да
      </button>
      <button type="button" onClick={handleNo}>
        Нет
      </button>
    </>
  );

  const buttonOk = type === PDT_ALERT && (
    <button type="button" onClick={handleClose}>
      OK
    </button>
  );

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
          {buttonYesNo}
          {buttonOk}
        </div>
      </div>
    </div>
  );

  return createPortal(confirm, popupContainer);
};

export default Confirm;
