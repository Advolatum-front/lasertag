import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";

import NoData from "../../../components/NoData";

import { ReactComponent as Arrow } from "../../../svg/arrow-triangle.svg";

import "./index.css";

const LAST_INDEX_NEWS_COUNT = 3;

const IndexNews = inject("NewsStore")(
  observer(({ NewsStore, props }) => {
    const { fetchLastNews, lastNews } = NewsStore;

    useEffect(() => {
      fetchLastNews(LAST_INDEX_NEWS_COUNT);
    }, [fetchLastNews]);

    // const { className = "" } = props;
    // const sectionClassName = className
    //   ? `index-news ${className}`
    //   : `index-news`;

    const sectionClassName = "index-news";

    if (lastNews.length === 0) {
      return (
        <section className={sectionClassName}>
          <h2 className="index-news__header">Новости</h2>
          <NoData />
        </section>
      );
    }

    const lastNewsListItems = lastNews.map((item) => {
      const { id, title, announce, img, date } = item;
      const url = `/news/${id}`;

      return (
        <li className="index-news__list-item" key={id}>
          <Link to={url} className="index-news__news-img-container">
            <img src={img} alt="" className="index-news__news-img" />
          </Link>
          <div className="index-news__info">
            <div className="index-news__news-header-container">
              <Link to={url} className="index-news__news-header">
                {title}
              </Link>
              <div className="index-news__news-date">{date}</div>
            </div>
            <div className="index-news__news-announce">{announce}</div>
            <Link to={url} className="index-news__links-more">
              <Arrow />
            </Link>
          </div>
        </li>
      );
    });

    return (
      <section className={sectionClassName}>
        <h2 className="index-news__header">Новости</h2>
        <ul className="index-news__list">{lastNewsListItems}</ul>
        <Link to="/" className="index-news__link-to-all-news">
          <span>Все новости</span>
        </Link>
      </section>
    );
  }),
);

export default IndexNews;
