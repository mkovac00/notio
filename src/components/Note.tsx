import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

import "./Note.scss";

type NoteProps = {
  id: string;
  title: string;
  content: string;
  updated: string;
  backgroundColor: {
    light: string;
    dark: string;
  };
};

const Note = (props: NoteProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="note-container"
      style={
        theme === "light"
          ? { backgroundColor: props.backgroundColor.light }
          : { backgroundColor: props.backgroundColor.dark }
      }
    >
      <h1 className="note-title">{props.title}</h1>
      <div className="note-content-wrapper">
        <p className="note-content">{props.content}</p>
      </div>
      <p className="note-date">{props.updated}</p>
    </div>
  );
};

export default Note;
