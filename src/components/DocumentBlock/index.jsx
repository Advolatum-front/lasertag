import { Link } from "react-router-dom";

import "./index.css";

const DocumentBlock = (props) => {
  return (
    <div className="document-block">
      <div className="document-block__header">Устав организации</div>
      <div className="document-block__description">
        Краткое описание устава организации с некоторыми подробностями для
        масштабности текста
      </div>
      <Link to="/" className="document-block__link">
        Читать подробнее
      </Link>
    </div>
  );
};

export default DocumentBlock;
