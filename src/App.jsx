import { Routes, Route } from "react-router-dom";

import { useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import IndexPage from "./pages/IndexPage";
import Contacts from "./pages/Contacts";
import Documents from "./pages/Documents";
import RestorePassword from "./pages/RestorePassword";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AlbumSelector from "./pages/AlbumSelector";
import AlbumContent from "./pages/AlbumContent";
import GallerySliderPage from "./pages/GallerySliderPage";
import News from "./pages/News";
import CurrentNews from "./pages/CurrentNews";
import CurrentActivityPage from "./pages/activities/CurrentActivityPage";

import IndexCabinet from "./pages/cabinet/IndexCabinet";
import Index from "./pages/cabinet/cabinet-views/Index";
import MyProfile from "./pages/cabinet/cabinet-views/MyProfile";
import Favorites from "./pages/cabinet/cabinet-views/Favorites";
import ActivitiesList from "./pages/cabinet/cabinet-views/activities/ActivitiesList";
import CabinetActivityPage from "./pages/cabinet/cabinet-views/activities/CabinetActivityPage";

import "./App.css";
import "./my-styles.css";

function App() {
  const footer = !useLocation().pathname.startsWith("/cabinet") ? (
    <Footer />
  ) : null;

  /*
<Route path="/cabinet" element={<IndexCabinet />}>
  <Route exact path="index" element={<IndexCabinet />} />
  <Route exact path="activities" element={<IndexCabinet />} />
  <Route exact path="myprofile" element={<IndexCabinet />} />
  <Route exact path="favorites" element={<IndexCabinet />} />
</Route>
  */

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/news/current" element={<CurrentNews />} />
          <Route exact path="/restorepassword" element={<RestorePassword />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/documents" element={<Documents />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/gallery" element={<AlbumSelector />} />
          <Route exact path="/gallery/album" element={<AlbumContent />} />
          <Route
            exact
            path="/activities/id"
            element={<CurrentActivityPage />}
          />
          <Route exact path="/gallery/slider" element={<GallerySliderPage />} />

          <Route path="/cabinet" element={<IndexCabinet />}>
            <Route index element={<Index />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="activities" element={<ActivitiesList />} />
            <Route path="activities/id" element={<CabinetActivityPage />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </main>
      {footer}
    </>
  );
}

export default App;
