import DocumentBlock from "../../components/DocumentBlock";

import "./index.css";

const Documents = () => {
  return (
    <article className="documents-container">
      <div className="documents-container__bg"></div>
      <ul className="documents-container__list">
        <li className="documents-container__list-item-1">
          <DocumentBlock
            wrapperClass="documents-container__document"
            headerContent="Устав организации"
            headerClass="document-block__header"
            descriptionClass="document-block__description"
            descriptionContent="Краткое описание устава организации с некоторыми подробностями для
        масштабности текста"
            href="docs/ustav.pdf"
            linkClass="document-block__link"
          />
        </li>
        <li className="documents-container__list-item-2">
          <DocumentBlock
            wrapperClass="documents-container__document-2"
            headerContent="Устав организации"
            headerClass="document-block__header-2"
            descriptionClass="document-block__description-2"
            descriptionContent="Краткое описание устава организации с некоторыми подробностями для
        масштабности текста"
            href="docs/ustav.pdf"
            linkClass="document-block__link-2"
          />
        </li>
      </ul>
    </article>
  );
};

export default Documents;
