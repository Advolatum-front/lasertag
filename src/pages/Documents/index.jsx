import DocumentBlock from "../../components/DocumentBlock";

import "./index.css";

const Documents = () => {
  return (
    <article className="documents-container">
      <ul className="documents-container__list">
        <li className="documents-container__list-item">
          <DocumentBlock />
        </li>
      </ul>
    </article>
  );
};

export default Documents;
