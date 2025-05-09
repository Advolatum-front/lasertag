import "./index.css";

import { useDocumentTitle } from "../../../../hooks/useDocumentTitle";

const Index = () => {
  useDocumentTitle("Личный кабинет");

  return (
    <div className="cabinet-index">
      <span className="cabinet-index__caption">
        Добро пожаловать в Ваш личный кабинет. Выберите интересующий Вас пункт
        меню.
      </span>
    </div>
  );
};

export default Index;
