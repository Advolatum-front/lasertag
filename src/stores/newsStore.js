import { makeObservable, action, observable } from "mobx";
import { getAdjacentByIndex } from "../utils/arrays/functions";

class NewsStore {
  initialNewsList = require("./data/news.json");
  newsList = [];
  fetchedNewsItem = null;
  adjacentNewsIds = [];
  lastNews = [];

  constructor() {
    makeObservable(this, {
      newsList: observable,
      fetchedNewsItem: observable,
      adjacentNewsIds: observable,
      lastNews: observable,

      fetchNews: action,
      fetchNewsItemById: action,
      fetchAdjacentNewsIdsById: action,
      fetchLastNews: action,
    });
  }

  fetchNews = () => {
    this.newsList = this.initialNewsList;
  };

  fetchNewsItemById = (id) => {
    this.fetchNews();
    this.fetchedNewsItem = this.newsList.find((item) => item.id === id);
  };

  fetchAdjacentNewsIdsById = (id) => {
    this.fetchNews();
    const index = this.newsList.findIndex((item) => item.id === id);
    this.adjacentNewsIds = getAdjacentByIndex(this.newsList, index).map(
      (item) => item.id,
    );
  };

  fetchLastNews = (count) => {
    this.fetchNews();

    this.lastNews = this.newsList
      .toSorted((a, b) => {
        const [dateNumA, dateNumB] = [a.date, b.date].map((date) => {
          return Number(date.replace(".", ""));
        });

        return dateNumA - dateNumB;
      })
      .slice(-count);
  };
}

export default new NewsStore();
