import { Link, useLocation } from "react-router-dom";

import "./index.css";

const GalleryNavigator = (props) => {
  const { className } = props;
  const pathName = useLocation().pathname;

  const galleryNavigatorClassName = className
    ? `gallery-navigator ${className}`
    : `gallery-navigator`;

  const navData = [
    {
      link: "/gallery/photo",
      caption: "Фото",
    },
    {
      link: "/gallery/video",
      caption: "Видео",
    },
    {
      link: "/gallery/favorites",
      caption: "Избранное",
    },
  ];

  const linkItems = navData.map((item, index) => {
    const { link, caption } = item;
    const linkClassName = pathName.includes(link)
      ? "gallery-navigator__link-active"
      : "gallery-navigator__link";

    return (
      <li className="gallery-navigator__list-item">
        <Link to={link} className={linkClassName}>
          {caption}
        </Link>
      </li>
    );
  });

  return (
    <div className={galleryNavigatorClassName}>
      <ul className="gallery-navigator__list">{linkItems}</ul>
    </div>
  );
};

export default GalleryNavigator;
