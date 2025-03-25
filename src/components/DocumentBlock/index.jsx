import { Link } from "react-router-dom";

import "./index.css";

const DocumentBlock = (props) => {
  return (
    <div className="documents-container__doc-wrapper">
      <div className="documents-container__doc-header">Устав организации</div>
      <div className="documents-container__doc-description">
        Краткое описание устава организации с некоторыми подробностями для
        масштабности текста
      </div>
      <Link to="/" className="documents-container__doc-link">
        Читать подробнее
      </Link>
    </div>
  );
};

export default DocumentBlock;
