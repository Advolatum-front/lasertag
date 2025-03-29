import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Contacts from "./pages/Contacts";
import Documents from "./pages/Documents";
import RestorePassword from "./pages/RestorePassword";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AlbumSelector from "./pages/AlbumSelector";

import "./App.css";
import "./my-styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Page1 />} />
            <Route exact path="/page1" element={<Page1 />} />
            <Route exact path="/page2" element={<Page2 />} />
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
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
