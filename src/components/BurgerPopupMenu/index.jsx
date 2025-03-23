import { createPortal } from "react-dom";

import "./index.css";

const popupContainer = document.getElementById("popup");

const BurgerPopupMenu = () => {
  const dd = <div className="pop"></div>;

  return createPortal(dd, popupContainer);
};

export default BurgerPopupMenu;
