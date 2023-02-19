import React from "react";
import "./Note.scss";

type NoteProps = {
  title: string;
  content: string;
  updated: string;
  backgroundColor: string;
};

const Note = (props: NoteProps) => {
  return (
    <div
      className="note-container"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <h1 className="note-title">{props.title}</h1>
      <p className="note-content">{props.content}</p>
      <p className="note-date">{props.updated}</p>
    </div>
  );
};

export default Note;
