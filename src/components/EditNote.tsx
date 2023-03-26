import React from "react";
import { useParams } from "react-router-dom";
import "./EditNote.scss";

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

  return (
    <div className="edit-note_container">
      <h1 className="edit-note_container-title">Viewing note</h1>
      <div className="edit-note_section">
        <textarea className="edit-note_title">{currentNote.title}</textarea>
        <textarea className="edit-note_content">{currentNote.content}</textarea>
        <p className="edit-note_updated">{currentNote.updated}</p>
      </div>
    </div>
  );
};

export default EditNote;
