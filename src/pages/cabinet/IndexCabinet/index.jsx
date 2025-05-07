import { useState } from "react";
import { inject, observer } from "mobx-react";
import {
  Link,
  useLocation,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";

import { ReactComponent as Cross } from "../../../svg/cross-ico.svg";
import NO_PHOTO_URL from "../../../img/cabinet/no-photo.webp";

import MessageDlg from "../../../components/popups/MessageDlg";

import { PDT_CONFIRM } from "../../../utils/popup-dialog-types";

import "./index.css";

const IndexCabinet = inject("UsersStore")(
  observer(({ UsersStore }) => {
    const { logoutUser, isAuthenticated, currentUser, users } = UsersStore;
    const navigate = useNavigate();

    const locationPathname = useLocation().pathname;
    const [cabinetMenuOpened, setCabinetMenuOpened] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const openCabinetMenu = () => {
      setCabinetMenuOpened(true);
    };

    const closeCabinetMenu = () => {
      setCabinetMenuOpened(false);
    };

    const openConfirm = () => {
      setConfirmOpen(true);
    };

    const closeConfirm = () => {
      setConfirmOpen(false);
    };

    const comfirmLogout = () => {
      setConfirmOpen(false);
      setCabinetMenuOpened(false);
      logoutUser();
      navigate("/");
    };

    const cabinetMenuClassName = cabinetMenuOpened
      ? "cabinet-menu opened"
      : "cabinet-menu";

    const menuDataLinks = [
      {
        caption: "Мероприятия",
        link: "/cabinet/activities",
      },
      {
        caption: "Избранное",
        link: "/cabinet/favorites",
      },
      {
        caption: "Мой профиль",
        link: "/cabinet/myprofile",
      },
    ];

    const menuLinkItems = menuDataLinks.map((item, index) => {
      const { caption, link } = item;
      const linkClassName = locationPathname.includes(link)
        ? "cabinet-menu__link-active"
        : "cabinet-menu__link";

      return (
        <li className="cabinet-menu__list-item" key={index}>
          <Link to={link} className={linkClassName} onClick={closeCabinetMenu}>
            {caption}
          </Link>
        </li>
      );
    });

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    const { name, surname, photo = NO_PHOTO_URL, email } = currentUser;
    const userFullName = `${name} ${surname}`;

    const userId = users.findIndex((user) => user.email === email);
    const visibleId = `id: ${userId}`;

    const pathToPhoto = photo || NO_PHOTO_URL;

    return (
      <div className="index-cabinet">
        <div className="index-cabinet__bugrer-button-menu-container">
          <button
            className="index-cabinet__bugrer-button"
            onClick={openCabinetMenu}
          >
            <i></i>
            <i></i>
            <i></i>
          </button>
        </div>
        <aside className={cabinetMenuClassName}>
          <button
            className="cabinet-menu__button-close"
            onClick={closeCabinetMenu}
          >
            <Cross />
          </button>
          <div className="cabinet-menu__user-card">
            <img src={pathToPhoto} alt="" className="cabinet-menu__user-pic" />
            <div className="cabinet-menu__user-name">{userFullName}</div>
            <div className="cabinet-menu__user-id">{visibleId}</div>
          </div>
          <ul className="cabinet-menu__nav-list">
            {menuLinkItems}
            <li className="cabinet-menu__list-item">
              <button
                className="cabinet-menu__button-logout"
                onClick={openConfirm}
              >
                Выход
              </button>
            </li>
          </ul>
        </aside>
        <MessageDlg
          type={PDT_CONFIRM}
          text="Вы уверены, что хотите выйти?"
          open={confirmOpen}
          onYes={comfirmLogout}
          onNo={closeConfirm}
          onClose={closeConfirm}
        />
        <Outlet />
      </div>
    );
  }),
);

export default IndexCabinet;
