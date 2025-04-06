import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import ActivityViewer from "./pages/activities/ActivityViewer";

import "./App.css";
import "./my-styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<IndexPage />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/news/current" element={<CurrentNews />} />
            <Route
              exact
              path="/restorepassword"
              element={<RestorePassword />}
            />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/documents" element={<Documents />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/gallery" element={<AlbumSelector />} />
            <Route exact path="/gallery/album" element={<AlbumContent />} />
            <Route exact path="/activities/id" element={<ActivityViewer />} />
            <Route
              exact
              path="/gallery/slider"
              element={<GallerySliderPage />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
