import { makeObservable, action, observable } from "mobx";

class GalleryStore {
  initialAlbumsList = require("./data/gallery.json");

  items = [];
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

  fetchAlbumItems = (albumId) => {
    this.items =
      this.initialAlbumsList.find((album) => album.id === albumId)?.items || [];
  };
}

const galleryStore = new GalleryStore();
export default galleryStore;
