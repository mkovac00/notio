import React from "react";
import "./DesktopHeader.scss";

import { MdDarkMode } from "react-icons/md";

import NewNote from "../../components/NewNote";

const DesktopHeader = () => {
  return (
    <div className="desktop-header">
      <div className="desktop-header-fixed">
        <p className="desktop-header-logo">Notio</p>
        <MdDarkMode size={30} />
        <NewNote />
      </div>
    </div>
  );
};

export default DesktopHeader;
