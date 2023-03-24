import React from "react";
import "./NotesList.scss";

import { Link } from "react-router-dom";

import Note from "./Note";

import { notes } from "../assets/data";

const NotesList = () => {
  return (
    <div className="notes-list-container">
      <h1 className="notes-list-title">Notes</h1>
      <ul className="notes-list-content">
        {notes.map((note) => (
          <li>
            <Link to="/note" className="notes-list-item">
              <Note
                title={note.title}
                content={note.content}
                updated={note.updated}
                backgroundColor={note.backgroundColor}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
