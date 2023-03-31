import { useContext } from "react";
import { useParams } from "react-router-dom";
import "./EditNote.scss";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { getCurrentDate } from "../assets/functions";
import { ThemeContext } from "../context/theme-context";

const buttonColors = {
  lightMode: "#000000",
  darkMode: "#e0e0e0",
};

const EditNote = () => {
  const { nid } = useParams();
  const { theme } = useContext(ThemeContext);

  let currentNote = {
    id: "1234567890",
    title: "Something went wrong.",
    content: "Something really went wrong.",
    updated: "January 1, 1000",
    backgroundColor: {
      light: "#c4e95c",
      dark: "#607341",
    },
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
        currentNote.updated = getCurrentDate();
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
      <div
        className="edit-note_section"
        style={
          theme === "light"
            ? {
                borderLeftColor: currentNote.backgroundColor.light,
                borderTopColor: currentNote.backgroundColor.light,
              }
            : {
                borderLeftColor: currentNote.backgroundColor.dark,
                borderTopColor: currentNote.backgroundColor.dark,
              }
        }
      >
        <AiOutlineCheckCircle
          size={25}
          className="edit-note_btn"
          onClick={saveNoteToLocalStorage}
          color={
            theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
          }
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
