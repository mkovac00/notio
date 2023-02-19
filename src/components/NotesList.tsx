import React from "react";
import "./NotesList.scss";

import Note from "./Note";

import { notes } from "../assets/data";

const NotesList = () => {
  return (
    <>
      <h1 className="notes-list-title">Notes</h1>
      <ul className="notes-list-content">
        {notes.map((note) => (
          <Note
            title={note.title}
            content={note.content}
            updated={note.updated}
            backgroundColor={note.backgroundColor}
          />
        ))}
      </ul>
    </>
  );
};

export default NotesList;
