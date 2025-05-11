import { makeObservable, action, observable, toJS } from "mobx";

class GalleryStore {
  initialAlbumsList = require("./data/gallery.json");

  mediaList = [];
  albumsList = [];

  constructor() {
    makeObservable(this, {
      albumsList: observable,

      fetchAlbumsByType: action,
    });
  }

  fetchAlbumsByType = (type, limit = 3) => {
    this.albumsList = this.initialAlbumsList
      .filter((album, index) => album.type === type)
      .slice(0, limit);
  };
}

const galleryStore = new GalleryStore();
export default galleryStore;
