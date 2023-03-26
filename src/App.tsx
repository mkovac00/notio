import React from "react";
import "./App.scss";

import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Media from "react-media";

import { notes } from "./assets/data";

import NotesList from "./components/NotesList";
import MobileHeader from "./modules/mobile/MobileHeader";
import DesktopHeader from "./modules/desktop/DesktopHeader";
import NewNote from "./components/NewNote";
import Search from "./components/Search";
import EditNote from "./components/EditNote";
import CreateNote from "./components/CreateNote";

const App = () => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 1023px)",
          medium: "(min-width: 1024px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <div className="app">
                <div className="header-section">
                  <MobileHeader />
                </div>

                <div className="main-section">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <Search />
                          <Link to="/note/create">
                            <NewNote />
                          </Link>
                          <NotesList />
                        </>
                      }
                    ></Route>
                    <Route path="/note/:nid" element={<EditNote />}></Route>
                    <Route path="/note/create" element={<CreateNote />}></Route>
                  </Routes>
                </div>
              </div>
            )}
            {matches.medium && (
              <div className="app">
                <div className="header-section">
                  <DesktopHeader />
                </div>

                <div className="main-section">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <Search />
                          <NotesList />
                        </>
                      }
                    ></Route>
                    <Route path="/note/:nid" element={<EditNote />}></Route>
                    <Route path="/note/create" element={<CreateNote />}></Route>
                  </Routes>
                </div>
              </div>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default App;
