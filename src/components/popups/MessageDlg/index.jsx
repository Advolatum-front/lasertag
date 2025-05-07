import { createPortal } from "react-dom";

import { ReactComponent as Cross } from "../../../svg/cross-ico.svg";

import { PDT_ALERT, PDT_CONFIRM } from "../../../utils/popup-dialog-types";

import "./index.css";

const popupContainer = document.getElementById("popup");

const MessageDlg = ({ text, onYes, onNo, onClose, open, type }) => {
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
    ? "message-dlg-popup-overlay open"
    : "message-dlg-popup-overlay";

  const messageDlg = (
    <div className={overlayClassName}>
      <div className="message-dlg-popup">
        <button
          type="button"
          className="message-dlg-popup__button-close"
          onClick={handleClose}
        >
          <Cross />
        </button>
        <p className="message-dlg-popup__text">{text}</p>
        <div className="message-dlg-popup__buttons">
          {buttonYesNo}
          {buttonOk}
        </div>
      </div>
    </div>
  );

  return createPortal(messageDlg, popupContainer);
};

export default MessageDlg;
