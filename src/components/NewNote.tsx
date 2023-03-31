import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { ThemeContext } from "../context/theme-context";

import "./NewNote.scss";

const NewNote = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="new-note-picker">
      <AiFillPlusCircle
        className="new-note-btn"
        color={theme === "light" ? "#000000" : "#e0e0e0"}
      />
      <Link to="/note/create/c4e95c/607341">
        <div className="colored-circle colored-circle-1"></div>
      </Link>
      <Link to="/note/create/ff9c96/603c3a">
        <div className="colored-circle colored-circle-2"></div>
      </Link>
      <Link to="/note/create/6cedbe/3f705e">
        <div className="colored-circle colored-circle-3"></div>
      </Link>
      <Link to="/note/create/deb4ff/614a73">
        <div className="colored-circle colored-circle-4"></div>
      </Link>
      <Link to="/note/create/9ceee9/397078">
        <div className="colored-circle colored-circle-5"></div>
      </Link>
    </div>
  );
};

export default NewNote;
