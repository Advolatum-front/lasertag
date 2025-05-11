import { makeObservable, action, observable } from "mobx";

class GalleryStore {
  initialMediaList = require("./data/gallery.json");

  mediaList = [];
  albumsList = [];

  constructor() {
    makeObservable(this, {
      albumsList: observable,
    });
  }

  fetchAlbumsByType = (type, limit = 3) => {
    this.albumsList = this.initialMediaList
      .filter((album) => album.type === type)
      .slice(0, limit);
  };
}

const galleryStore = new GalleryStore();
export default galleryStore;
