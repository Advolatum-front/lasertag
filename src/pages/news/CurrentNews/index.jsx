import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect } from "react";

import NoData from "../../../components/NoData";

import "./index.css";
// полученные данные оборачивать в toJS

const CurrentNews = inject("NewsStore")(
  observer(({ NewsStore }) => {
    const {
      fetchedNewsItem,
      fetchNewsItemById,
      adjacentNewsIds,
      fetchAdjacentNewsIdsById,
    } = NewsStore;
    const newsId = useParams().newsId;

    useEffect(() => {
      fetchNewsItemById(newsId);
      fetchAdjacentNewsIdsById(newsId);
    }, [fetchNewsItemById, newsId, fetchAdjacentNewsIdsById]);

    if (!fetchedNewsItem) {
      return (
        <section className="current-news-section">
          <div className="news-block">
            <NoData />
          </div>
        </section>
      );
    }

    const { id, title, img, fullText, additionalText, date } = fetchedNewsItem;
    const paragraphs = fullText
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);

    return (
      <section className="current-news-section">
        <div className="news-block">
          <img src={img} alt="" className="news-block__photo" />
          <div className="news-block__info">
            <h1 className="news-block__header">{title}</h1>
            <div className="news-block__text">{paragraphs}</div>
            <div className="news-block__footer">
              <Link to="/" className="news-block__link-prev" />
              <div className="news-block__additional-text">
                {additionalText}
              </div>
              <Link to="/" className="news-block__link-next" />
            </div>
          </div>
          <div className="current-news-date">
            <span>{date}</span>
          </div>
        </div>
      </section>
    );
  }),
);

// const CurrentNews = ;

export default CurrentNews;
