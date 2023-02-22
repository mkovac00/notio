import React from "react";
import "./NewNote.scss";

import { AiFillPlusCircle } from "react-icons/ai";

const NewNote = () => {
  return (
    <div className="new-note-picker">
      <AiFillPlusCircle className="new-note-btn" />
      <div className="colored-circle"></div>
      <div className="colored-circle"></div>
      <div className="colored-circle"></div>
      <div className="colored-circle"></div>
      <div className="colored-circle"></div>
    </div>
  );
};

export default NewNote;
