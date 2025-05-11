import { makeObservable, action, observable } from "mobx";

class GalleryStore {
  initialAlbumsList = require("./data/gallery.json");

  albumsList = [];
  fetchedAlbum = null;

  constructor() {
    makeObservable(this, {
      fetchedAlbum: observable,

      fetchAlbumsByType: action,
      fetchAlbumById: action,
    });
  }

  fetchAlbumsByType = (type, limit = 3) => {
    this.albumsList = this.initialAlbumsList
      .filter((album, index) => album.type === type)
      .slice(0, limit);
  };

  fetchAlbumById = (albumId) => {
    this.fetchedAlbum =
      this.initialAlbumsList.find((album) => album.id === albumId) || null;
  };
}

const galleryStore = new GalleryStore();
export default galleryStore;
