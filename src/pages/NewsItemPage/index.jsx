import { Link } from "react-router-dom";

import "./index.css";

const NewsItemPage = () => {
  return (
    <section className="current-news-section">
      <div className="news-block">
        <Link to="/" className="news-block__link-prev"></Link>
        <img src="/news/big/photo-1.jpg" alt="" className="news-block__photo" />
        <div className="news-block__info">
          <h1 className="news-block__header">Региональные соревнования</h1>
          <div className="news-block__text">
            <p>
              С 20-21 мая прошли отборочные региональные соревнования по
              лазерному бою.
            </p>

            <p>
              Десять команд боролись за возможность пройти на уровень региона и
              защитить свою честь и честь всего состава.
            </p>

            <p>
              Полные решимости, участники команд выполняли тактические манёвры,
              перехватывали соперников, выбивали их с поля.
            </p>

            <p>
              Особенно выделилась команда “Лунных зайцев”, которая смогла
              одолеть противника за кратчайшее время - им понадобилось всего
              пятнадцать минут.
            </p>
          </div>
          <div className="news-block__footer">
            <div className="news-block__additional-text">
              Именно эта команда и пойдёт дальше отстаивать первенство лазерного
              боя. Поздравим «Лунных зайцев»!
            </div>
            <Link to="/" className="news-block__link-next"></Link>
          </div>
        </div>
      </div>
      <div className="current-news-date">21.05</div>
    </section>
  );
};

export default NewsItemPage;
