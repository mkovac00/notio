import React from "react";
import "./DesktopHeader.scss";

import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";

import NewNote from "../../components/NewNote";

const DesktopHeader = () => {
  return (
    <div className="desktop-header">
      <div className="desktop-header-fixed">
        <Link to="/" className="desktop-header-logo_link">
          <p className="desktop-header-logo">Notio</p>
        </Link>
        <MdDarkMode size={30} />
        <NewNote />
      </div>
    </div>
  );
};

export default DesktopHeader;
