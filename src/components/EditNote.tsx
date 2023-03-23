import React from "react";
import "./EditNote.scss";

type NoteProps = {
  title: string;
  content: string;
  updated: string;
  backgroundColor: string;
};

const EditNote = (props: NoteProps) => {
  return (
    <div className="edit-note_container">
      <h1 className="edit-note_container-title">Notes</h1>
      <div className="edit-note_section">
        <h1 className="edit-note_title">{props.title}</h1>
        <p className="edit-note_content">{props.content}</p>
        <p className="edit-note_updated">{props.updated}</p>
      </div>
    </div>
  );
};

export default EditNote;
