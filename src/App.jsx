import { Routes, Route } from "react-router-dom";

import { useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

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
import ActivityViewer from "./pages/activities/ActivityViewer";

import IndexCabinet from "./pages/cabinet/IndexCabinet";

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
          <Route exact path="/activities/id" element={<ActivityViewer />} />
          <Route exact path="/gallery/slider" element={<GallerySliderPage />} />

          <Route path="/cabinet" element={<IndexCabinet />}>
            <Route index element={<p>Всё пусто...</p>} />
            <Route path="index1" element={<p>1</p>} />
            <Route path="index2" element={<p>Давай что-нибудь крутое</p>} />
          </Route>
        </Routes>
      </main>
      {footer}
    </>
  );
}

export default App;
