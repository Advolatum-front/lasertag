import DocumentBlock from "../../components/DocumentBlock";

import "./index.css";

const Documents = () => {
  return (
    <article className="documents-container">
      <ul className="documents-container__list">
        <li className="documents-container__list-item">
          <DocumentBlock
            headerContent="Устав организации"
            headerClass="document-block__header"
            descriptionClass="document-block__description"
            descriptionContent="Краткое описание устава организации с некоторыми подробностями для
        масштабности текста"
            link="/"
            linkClass="document-block__link"
          />
        </li>
      </ul>
    </article>
  );
};

export default Documents;
