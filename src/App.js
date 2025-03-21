import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./my-styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="header"></header>
        <main className="main"></main>
        <footer className="footer"></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
