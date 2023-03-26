import React from "react";
import { useParams } from "react-router-dom";
import "./CreateNote.scss";

import { AiOutlineCheckCircle } from "react-icons/ai";

const CreateNote = () => {
  const { color } = useParams();

  const addNoteToLocalStorage = () => {
    let allNotes = JSON.parse(localStorage.getItem("notes") || "[]");

    const noteTitle = document.getElementById(
      "create-note_title-id"
    ) as HTMLInputElement;
    const noteContent = document.getElementById(
      "create-note_content-id"
    ) as HTMLInputElement;

    if (noteTitle.value != null && noteTitle.value !== "") {
      if (noteContent.value != null && noteContent.value !== "") {
        let createdNote = {
          id: Date.now(),
          title: noteTitle.value,
          content: noteContent.value,
          updated: "February 17, 2023",
          backgroundColor: "#" + color,
        };

        allNotes.push(createdNote);
      }
    }

    localStorage.setItem("notes", JSON.stringify(allNotes));

    noteTitle.value = "";
    noteContent.value = "";
  };

  return (
    <div className="create-note_container">
      <h1 className="create-note_container-title">Creating a note</h1>
      <div className="create-note_section">
        <AiOutlineCheckCircle
          size={25}
          className="create-note_btn"
          onClick={addNoteToLocalStorage}
        />
        <textarea
          id="create-note_title-id"
          className="create-note_title"
          placeholder="Give your note a title"
        ></textarea>
        <textarea
          id="create-note_content-id"
          className="create-note_content"
          placeholder="Write something inside your note"
        ></textarea>
        <p className="create-note_updated">February 17, 2023</p>
      </div>
    </div>
  );
};

export default CreateNote;
