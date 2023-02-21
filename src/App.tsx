import React from "react";
import "./App.scss";

import NotesList from "./components/NotesList";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <div className="header-section">
        <Header />
      </div>

      <div className="main-section">
        <NotesList />
      </div>
    </div>
  );
};

export default App;
