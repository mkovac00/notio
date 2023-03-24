import React from "react";
import { useParams } from "react-router-dom";
import "./EditNote.scss";

import { notes } from "../assets/data";

const EditNote = () => {
  const { nid } = useParams();
  let currentNote = notes[0];

  notes.forEach((note) => {
    if (note.id === nid) {
      currentNote = note;
    }
  });

  return (
    <div className="edit-note_container">
      <h1 className="edit-note_container-title">Viewing note</h1>
      <div className="edit-note_section">
        <h1 className="edit-note_title">{currentNote.title}</h1>
        <p className="edit-note_content">{currentNote.content}</p>
        <p className="edit-note_updated">{currentNote.updated}</p>
      </div>
    </div>
  );
};

export default EditNote;
