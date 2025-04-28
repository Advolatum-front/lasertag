import { makeObservable, action, observable } from "mobx";

class NewsStore {
  initialNewsList = require("./data/news.json");
  newsList = [];

  constructor() {
    makeObservable(this, {
      newsList: observable,
      fetchNews: action,
    });
  }

  fetchNews = () => {
    this.newsList = this.initialNewsList;
  };

  fetchNewsItemById = (id) => {
    return this.newsList.find((item) => item.id === id);
  };
}

export default new NewsStore();
