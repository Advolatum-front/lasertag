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
      <button className="popup-container__button-close">
        <Cross />
      </button>
      <div className="popup-container">{children}</div>
    </div>
  );

  return createPortal(popup, popupContainer);
};

export default PopupChildren;
