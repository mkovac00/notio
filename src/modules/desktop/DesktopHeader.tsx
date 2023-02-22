import React from "react";
import "./DesktopHeader.scss";

import NewNote from "../../components/NewNote";

const DesktopHeader = () => {
  return (
    <div className="desktop-header">
      <p className="desktop-header-logo">Notio</p>
      <NewNote />
    </div>
  );
};

export default DesktopHeader;
