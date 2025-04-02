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
          <p className="news-block__text"></p>
          <div className="news-block__footer">
            <div className="news-block__additional-text">
              Именно эта команда и пойдёт дальше отстаивать первенство лазерного
              боя. Поздравим «Лунных зайцев»!
            </div>
            <Link to="/" className="news-block__link-prev"></Link>
          </div>
        </div>
      </div>
      <div className="current-news-date">21.05</div>
    </section>
  );
};

export default NewsItemPage;
