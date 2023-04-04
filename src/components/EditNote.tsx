import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import { getCurrentDate } from "../assets/functions";
import { ThemeContext } from "../context/theme-context";
import { buttonColors } from "../assets/variables";
import { AnimatePresence } from "framer-motion";
import Popup from "./Popup";

import "./EditNote.scss";

const EditNote = () => {
  const [isSavedPopup, setIsSavedPopup] = useState(false);
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

  const loadCurrentNoteFromLocalStorage = () => {
    let allNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    allNotes.forEach((note: any) => {
      if (note.id.toString() === nid) {
        currentNote = note;
      }
    });
  };

  loadCurrentNoteFromLocalStorage();

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
    showNoteSavedPopup();
  };

  const deleteNoteFromLocalStorage = () => {
    let allNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    let currentNoteIndex = 0;
    allNotes.forEach((note: any) => {
      if (note.id.toString() === nid) {
        currentNoteIndex = allNotes.indexOf(note);
      }
    });

    if (currentNoteIndex !== -1) {
      allNotes.splice(currentNoteIndex, 1);
    }

    localStorage.setItem("notes", JSON.stringify(allNotes));
  };

  const showNoteSavedPopup = () => {
    setIsSavedPopup(true);
    setTimeout(() => {
      setIsSavedPopup(false);
    }, 1500);
  };

  return (
    <div className="edit-note_container">
      <h1 className="edit-note_container-title">Viewing note</h1>
      <AnimatePresence>
        {isSavedPopup && <Popup content="Note saved!" />}
      </AnimatePresence>
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
          className="edit-note_save-btn"
          onClick={saveNoteToLocalStorage}
          color={
            theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
          }
        />
        <Link to="/">
          <AiOutlineDelete
            size={25}
            className="edit-note_delete-btn"
            onClick={deleteNoteFromLocalStorage}
            color={
              theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
            }
          />
        </Link>

        <textarea
          id="edit-note_title-id"
          className="edit-note_title"
          defaultValue={currentNote.title}
        ></textarea>
        <textarea
          id="edit-note_content-id"
          className="edit-note_content"
          defaultValue={currentNote.content}
        ></textarea>
        <p className="edit-note_updated">{currentNote.updated}</p>
      </div>
    </div>
  );
};

export default EditNote;
