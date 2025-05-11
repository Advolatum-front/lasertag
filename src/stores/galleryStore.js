import { makeObservable, action, observable } from "mobx";

class GalleryStore {
  initialMediaList = require("./data/gallery.json");

  mediaList = [];

  constructor() {
    makeObservable(this, {});
  }
}

const galleryStore = new GalleryStore();
export default galleryStore;
