import { createPortal } from "react-dom";

import "./index.css";

const popupContainer = document.getElementById("popup");

const BurgerPopupMenu = (props) => {
  const { open, onClosePopupMenu } = props;
  const popupMenu = (
    <div className="pop" onClick={() => onClosePopupMenu()}></div>
  );

  return open ? createPortal(popupMenu, popupContainer) : null;
};

export default BurgerPopupMenu;
