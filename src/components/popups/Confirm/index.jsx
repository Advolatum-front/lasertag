import { createPortal } from "react-dom";

import { ReactComponent as Cross } from "../../../svg/cross-ico.svg";

import "./index.css";

const popupContainer = document.getElementById("popup");

const Confirm = () => {
  const confirm = (
    <div className="confirm-popup-overlay opened">
      <div className="confirm-popup">
        <button type="button" className="confirm-popup__button-close">
          <Cross />
        </button>
        <p className="confirm-popup__text">
          Вы точно хотите Вы точно хотите Вы точно хотите Вы точно хотите Вы
          точно хотите Вы точно хотите Вы точно хотите ?
        </p>
        <div className="confirm-popup__buttons">
          <button type="button">Да</button>
          <button type="button">Нет</button>
        </div>
      </div>
    </div>
  );

  return createPortal(confirm, popupContainer);
};

export default Confirm;
