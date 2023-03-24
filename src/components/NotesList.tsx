import React from "react";
import "./NotesList.scss";

import { Link } from "react-router-dom";
// TODO - implement uuid library to generate unique id's for notes
// import { v4 as uuidv4 } from "uuid";

import Note from "./Note";

import { notes } from "../assets/data";

const NotesList = () => {
  return (
    <div className="notes-list-container">
      <h1 className="notes-list-title">Notes</h1>
      <ul className="notes-list-content">
        {notes.map((note) => (
          <li>
            <Link to={`/note/${note.id}`} className="notes-list-item">
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
