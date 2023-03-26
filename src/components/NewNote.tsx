import React from "react";
import { Link } from "react-router-dom";
import "./NewNote.scss";

import { AiFillPlusCircle } from "react-icons/ai";

const NewNote = () => {
  return (
    <div className="new-note-picker">
      <AiFillPlusCircle className="new-note-btn" />
      <Link to="/note/create/c4e95c">
        <div className="colored-circle colored-circle-1"></div>
      </Link>
      <Link to="/note/create/ff9c96">
        <div className="colored-circle colored-circle-2"></div>
      </Link>
      <Link to="/note/create/6cedbe">
        <div className="colored-circle colored-circle-3"></div>
      </Link>
      <Link to="/note/create/deb4ff">
        <div className="colored-circle colored-circle-4"></div>
      </Link>
      <Link to="/note/create/9ceee9">
        <div className="colored-circle colored-circle-5"></div>
      </Link>
    </div>
  );
};

export default NewNote;
