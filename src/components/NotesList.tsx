import { useEffect, useState } from "react";
import "./NotesList.scss";

import { Link } from "react-router-dom";
// TODO - implement uuid library to generate unique id's for notes
// import { v4 as uuidv4 } from "uuid";

import Note from "./Note";
import { NoteSchema } from "../models/NoteSchema";

// import { notes } from "../assets/data";

const NotesList = () => {
  const [notesState, setNotesState] = useState<typeof NoteSchema[]>([]);

  const loadAllNotesFromLocalStorage = () => {
    let allNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotesState(allNotes);
  };

  useEffect(() => {
    loadAllNotesFromLocalStorage();
  }, []);

  return (
    <div className="notes-list-container">
      <h1 className="notes-list-title">Notes</h1>
      <ul className="notes-list-content">
        {notesState.length <= 0 && (
          <div className="notes-list_no-content">
            <p className="notes-list_no-content-message">
              No notes yet? Please write some :/
            </p>
          </div>
        )}
        {notesState.length !== 0 &&
          notesState.map((note) => (
            <li>
              <Link to={`/note/${note.id}`} className="notes-list-item">
                <Note
                  id={note.id}
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
