import { ReactComponent as PhoneIco } from "../../svg/phone-ico.svg";
import { ReactComponent as MailIco } from "../../svg/mail-ico.svg";

import presidentPhoto from "../../img/contacts/president.webp";

import "./index.css";

const Contacts = () => {
  return (
    <>
      <article className="contacts">
        <div className="contacts__baddge">
          <img src={presidentPhoto} alt="" className="contacts__photo" />
          <div className="contacts__info">
            <div className="contacts__status">
              Председатель Регионального отделения Всероссийской общественной
              организации развития лазерного боя «Федерация Лазертага России» в
              Санкт-Петербурге
            </div>

            <div className="contacts__fullname">РЯБЕНКО ДЕНИС ВИКТОРОВИЧ</div>
            <ul className="contacts__list">
              <li>
                <a href="tel:+79999999999" className="contacts__list-link">
                  <span>8 (999) 999-99-99</span>
                  <PhoneIco className="contacts__link-ico" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:lazertagooo@gmail.com"
                  className="contacts__list-link"
                >
                  <span>lazertagooo@gmail.com</span>
                  <MailIco className="contacts__link-ico" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default Contacts;
