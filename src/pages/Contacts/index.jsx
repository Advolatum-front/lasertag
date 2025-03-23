import presidentPhoto from "../../img/contacts/president.webp";

import "./index.css";

const Contacts = () => {
  return (
    <>
      <article className="contacts">
        <div className="contacts__baddge">
          <img src={presidentPhoto} alt="" className="contacts__photo" />
          <div className="contacts__info">
            <p className="contacts__status">
              Председатель Регионального отделения Всероссийской общественной
              организации развития лазерного боя «Федерация Лазертага в
              Санкт-Петербурге
            </p>

            <div className="contacts__fullname">РЯБЕНКО ДЕНИС ВИКТОРОВИЧ</div>
            <ul className="contacts__list">
              <li>
                <a href="tel:+79999999999">89999999999</a>
              </li>
              <li>
                <a href="mailto:lazertagooo@gmail.com">lazertagooo@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default Contacts;
