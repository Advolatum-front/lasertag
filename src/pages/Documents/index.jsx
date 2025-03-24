import { Link } from "react-router-dom";

import "./index.css";

const Documents = () => {
  return (
    <article className="documents-container">
      <ul className="documents-container__list">
        <li className="documents-container__list-item">
          <div className="documents-container__doc-item-1">
            <div className="documents-container__doc-header">
              Устав организации
            </div>
            <div className="documents-container__doc-description">
              Краткое описание устава организации с некоторыми подробностями для
              масштабности текста
            </div>
            <Link to="/" className="documents-container__doc-link">
              Читать подробнее
            </Link>
          </div>
        </li>
      </ul>
    </article>
  );
};

export default Documents;
