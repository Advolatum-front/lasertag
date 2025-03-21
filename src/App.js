import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import "./App.css";
import "./my-styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="header">Тестиурем шрифт</header>
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Page1 />} />
            <Route exact path="/page1" element={<Page1 />} />
            <Route exact path="/page2" element={<Page2 />} />
          </Routes>
        </main>
        <footer className="footer"></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
