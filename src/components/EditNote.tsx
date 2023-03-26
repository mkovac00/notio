import React from "react";
import { useParams } from "react-router-dom";
import "./EditNote.scss";

import { AiOutlineCheckCircle } from "react-icons/ai";

const EditNote = () => {
  const { nid } = useParams();
  let currentNote = {
    id: "1234567890",
    title: "Something went wrong.",
    content: "Something really went wrong.",
    updated: "January 1, 1000",
    backgroundColor: "#DEB4FF",
  };

  let allNotes = JSON.parse(localStorage.getItem("notes") || "[]");
  allNotes.forEach((note: any) => {
    if (note.id.toString() === nid) {
      currentNote = note;
    }
  });

  const saveNoteToLocalStorage = () => {
    let allNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    let currentNoteIndex = 0;
    allNotes.forEach((note: any) => {
      if (note.id.toString() === nid) {
        currentNote = note;
        currentNoteIndex = allNotes.indexOf(note);
      }
    });

    const noteTitle = document.getElementById(
      "edit-note_title-id"
    ) as HTMLInputElement;
    const noteContent = document.getElementById(
      "edit-note_content-id"
    ) as HTMLInputElement;

    if (noteTitle.value != null && noteTitle.value !== "") {
      if (noteContent.value != null && noteContent.value !== "") {
        currentNote.title = noteTitle.value;
        currentNote.content = noteContent.value;
      }
    }

    if (currentNoteIndex !== -1) {
      allNotes[currentNoteIndex] = currentNote;
    }

    localStorage.setItem("notes", JSON.stringify(allNotes));
  };

  return (
    <div className="edit-note_container">
      <h1 className="edit-note_container-title">Viewing note</h1>
      <div className="edit-note_section">
        <AiOutlineCheckCircle
          size={25}
          className="edit-note_btn"
          onClick={saveNoteToLocalStorage}
        />
        <textarea id="edit-note_title-id" className="edit-note_title">
          {currentNote.title}
        </textarea>
        <textarea id="edit-note_content-id" className="edit-note_content">
          {currentNote.content}
        </textarea>
        <p className="edit-note_updated">{currentNote.updated}</p>
      </div>
    </div>
  );
};

export default EditNote;
