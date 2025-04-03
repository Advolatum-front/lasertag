import { Link } from "react-router-dom";

import "./index.css";

const CurrentNews = () => {
  return (
    <section className="current-news-section">
      <div className="news-block">
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
            <Link to="/" className="news-block__link-prev">
              Предыдущая новость
            </Link>
            <div className="news-block__additional-text">
              Именно эта команда и пойдёт дальше отстаивать первенство лазерного
              боя. Поздравим «Лунных зайцев»!
            </div>
            <Link to="/" className="news-block__link-next">
              Следующая новость
            </Link>
          </div>
        </div>
        <div className="current-news-date">
          <span>21.05</span>
        </div>
      </div>
    </section>
  );
};

export default CurrentNews;
