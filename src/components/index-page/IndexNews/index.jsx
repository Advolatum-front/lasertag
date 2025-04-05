import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../../svg/arrow-triangle.svg";

import "./index.css";

const IndexNews = () => {
  return (
    <section className="index-news">
      <h2 className="index-news__header">Новости</h2>
      <ul className="index-news__list">
        <li className="index-news__list-item">
          <Link to="/" className="index-news__news-img-container">
            <img
              src="/news/small/news-1.webp"
              alt=""
              className="index-news__news-img"
            />
          </Link>
          <div className="index-news__info">
            <div className="index-news__news-header-container">
              <Link to="/" className="index-news__news-header">
                Региональные соревнования
              </Link>
              <div className="index-news__news-date">21.05</div>
            </div>
            <div className="index-news__news-announce">
              С 20-21 мая прошли отборочные региональные соревнования по
              лазерному бою.
            </div>
            <Link to="/" className="index-news__links-more">
              <Arrow />
            </Link>
          </div>
        </li>
        <li className="index-news__list-item">
          <Link to="/" className="index-news__news-img-container">
            <img
              src="/news/small/news-1.webp"
              alt=""
              className="index-news__news-img"
            />
          </Link>
          <div className="index-news__info">
            <div className="index-news__news-header-container">
              <Link to="/" className="index-news__news-header">
                Региональные соревнования
              </Link>
              <div className="index-news__news-date">21.05</div>
            </div>
            <div className="index-news__news-announce">
              С 20-21 мая прошли отборочные региональные соревнования по
              лазерному бою.
            </div>
            <Link to="/" className="index-news__links-more">
              <Arrow />
            </Link>
          </div>
        </li>
        <li className="index-news__list-item">
          <Link to="/" className="index-news__news-img-container">
            <img
              src="/news/small/news-1.webp"
              alt=""
              className="index-news__news-img"
            />
          </Link>
          <div className="index-news__info">
            <div className="index-news__news-header-container">
              <Link to="/" className="index-news__news-header">
                Региональные соревнования
              </Link>
              <div className="index-news__news-date">21.05</div>
            </div>
            <div className="index-news__news-announce">
              С 20-21 мая прошли отборочные региональные соревнования по
              лазерному бою.
            </div>
            <Link to="/" className="index-news__links-more">
              <Arrow />
            </Link>
          </div>
        </li>
      </ul>
      <Link to="/" className="index-news__link-to-all-news">
        Все новости
      </Link>
    </section>
  );
};

export default IndexNews;
