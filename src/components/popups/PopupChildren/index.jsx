import { createPortal } from "react-dom";

import { ReactComponent as Cross } from "../../../svg/cross-ico.svg";

import "./index.css";

const popupContainer = document.getElementById("popup");

const PopupChildren = (props) => {
  const { open, onClose, children } = props;
  const overlayClass = open
    ? "popup-container-overlay open"
    : "popup-container-overlay";

  const popup = (
    <div className={overlayClass}>
      <div className="popup-container">
        <button className="popup-container__button-close" onClick={onClose}>
          <Cross />
        </button>
        <div className="popup-container__children-container">{children}</div>
      </div>
    </div>
  );

  return createPortal(popup, popupContainer);
};

export default PopupChildren;
