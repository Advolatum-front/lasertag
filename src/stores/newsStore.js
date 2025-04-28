import { makeObservable, action, observable } from "mobx";

class NewsStore {
  initialNewsList = require("./data/news.json");
  newsList = [];
  fetchedNewsItem = null;

  constructor() {
    makeObservable(this, {
      newsList: observable,
      fetchedNewsItem: observable,

      fetchNews: action,
      fetchNewsItemById: action,
    });
  }

  fetchNews = () => {
    this.newsList = this.initialNewsList;
  };

  fetchNewsItemById = (id) => {
    this.fetchNews();
    this.fetchedNewsItem = this.newsList.find((item) => item.id === id);
  };
}

export default new NewsStore();
