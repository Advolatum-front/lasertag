import { Link } from "react-router-dom";

import "./index.css";

const DocumentBlock = (props) => {
  const {
    wrapperClass,
    headerClass,
    headerContent,
    descriptionClass,
    descriptionContent,
    link,
    href,
    linkClass,
  } = props;

  const linkToDocument = link ? (
    <Link to={link} className={linkClass}>
      Читать подробнее
    </Link>
  ) : (
    <a href={href} className={linkClass}>
      Читать подробнее
    </a>
  );

  return (
    <div className={wrapperClass}>
      <div className={headerClass}>{headerContent}</div>
      <div className={descriptionClass}>{descriptionContent}</div>
      <Link to={link} className={linkClass}>
        Читать подробнее
      </Link>
    </div>
  );
};

export default DocumentBlock;
