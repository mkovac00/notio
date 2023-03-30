import React from "react";
import "./App.scss";

import { Route, Routes } from "react-router-dom";
import Media from "react-media";
import MobileHeader from "./modules/mobile/MobileHeader";
import DesktopHeader from "./modules/desktop/DesktopHeader";
import NewNote from "./components/NewNote";
import EditNote from "./components/EditNote";
import CreateNote from "./components/CreateNote";
import NotesSection from "./components/NotesSection";

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
                          <NewNote />
                          <NotesSection />
                        </>
                      }
                    ></Route>
                    <Route path="/note/:nid" element={<EditNote />}></Route>
                    <Route
                      path="/note/create/:color"
                      element={<CreateNote />}
                    ></Route>
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
                    <Route path="/" element={<NotesSection />}></Route>
                    <Route path="/note/:nid" element={<EditNote />}></Route>
                    <Route
                      path="/note/create/:color"
                      element={<CreateNote />}
                    ></Route>
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
