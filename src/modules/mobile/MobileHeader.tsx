import React from "react";
import "./MobileHeader.scss";

import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";

const MobileHeader = () => {
  return (
    <div className="mobile-header">
      <Link to="/" className="mobile-header-logo_link">
        <h1 className="mobile-header-logo">Notio</h1>
      </Link>
      <MdDarkMode className="mobile-dark-mode-btn" />
    </div>
  );
};

export default MobileHeader;
