import { makeObservable, action, observable } from "mobx";
import { getAdjacentByIndex } from "../utils/arrays/functions";

class NewsStore {
  initialNewsList = require("./data/news.json");
  newsList = [];
  fetchedNewsItem = null;
  adjacentNewsIds = [];

  constructor() {
    makeObservable(this, {
      newsList: observable,
      fetchedNewsItem: observable,
      adjacentNewsIds: observable,

      fetchNews: action,
      fetchNewsItemById: action,
      fetchAdjacentNewsIdsById: action,
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
}

export default new NewsStore();
