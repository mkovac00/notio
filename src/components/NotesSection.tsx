import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotesSection.scss";

import Note from "./Note";
import { NoteSchema } from "../models/NoteSchema";
import { removeDuplicates } from "../assets/functions";

let searchedNotes: typeof NoteSchema[] = [];

const FixTry = () => {
  const [searchValue, setSearchValue] = useState("");
  const [notesState, setNotesState] = useState<typeof NoteSchema[]>([]);

  const loadAllNotesFromLocalStorage = () => {
    let allNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    searchedNotes = [];

    if (searchValue !== "") {
      allNotes.forEach((note: typeof NoteSchema) => {
        // Setting both toLowerCase so notes are searched whether they
        // are written with uppercase letters or lowercase letters
        if (note.title.toLowerCase().includes(searchValue.toLowerCase())) {
          searchedNotes.push(note);
        }
      });

      searchedNotes = removeDuplicates(searchedNotes);

      setNotesState(searchedNotes);
    } else {
      setNotesState(allNotes);
    }
  };

  useEffect(() => {
    loadAllNotesFromLocalStorage();
  }, [searchValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        id="search-input"
        className="search"
        type="text"
        placeholder="Search for a note..."
        onChange={handleInputChange}
      ></input>
      <div className="notes-list-container">
        {searchValue === "" && <h1 className="notes-list-title">All notes</h1>}
        {searchValue !== "" && (
          <h1 className="notes-list-title">Searched notes</h1>
        )}
        {notesState.length <= 0 && searchValue === "" && (
          <div className="notes-list_no-content">
            <p className="notes-list_no-content-message">
              No notes yet? Please write some :/
            </p>
          </div>
        )}
        {notesState.length <= 0 && searchValue !== "" && (
          <div className="notes-list_no-content">
            <p className="notes-list_no-content-message">
              No notes match your search message :/
            </p>
          </div>
        )}

        <ul className="notes-list-content">
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
          {}
        </ul>
      </div>
    </>
  );
};

export default FixTry;
