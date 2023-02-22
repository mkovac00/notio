import React from "react";
import "./MobileHeader.scss";

import { MdDarkMode } from "react-icons/md";

const MobileHeader = () => {
  return (
    <div className="mobile-header">
      <h1 className="mobile-header-logo">Notio</h1>
      <MdDarkMode className="mobile-dark-mode-btn" />
    </div>
  );
};

export default MobileHeader;
