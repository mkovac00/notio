import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { getCurrentDate } from "../assets/functions";
import { ThemeContext } from "../context/theme-context";
import { buttonColors } from "../assets/variables";
import { AnimatePresence } from "framer-motion";
import Popup from "./Popup";

import "./CreateNote.scss";

const CreateNote = () => {
  const [isCreatedPopup, setIsCreatedPopup] = useState(false);
  const [isEmptyPopup, setIsEmptyPopup] = useState(false);
  const { color, colorDark } = useParams();
  const { theme } = useContext(ThemeContext);

  const placeholderDate = getCurrentDate();

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
          updated: getCurrentDate(),
          backgroundColor: {
            light: "#" + color,
            dark: "#" + colorDark,
          },
        };

        allNotes.push(createdNote);
        showNoteCreatedPopup();

        noteTitle.value = "";
        noteContent.value = "";
      } else {
        showNoteEmptyPopup();
      }
    } else {
      showNoteEmptyPopup();
    }

    localStorage.setItem("notes", JSON.stringify(allNotes));
  };

  const showNoteCreatedPopup = () => {
    setIsCreatedPopup(true);
    setTimeout(() => {
      setIsCreatedPopup(false);
    }, 1500);
  };

  const showNoteEmptyPopup = () => {
    setIsEmptyPopup(true);
    setTimeout(() => {
      setIsEmptyPopup(false);
    }, 1500);
  };

  return (
    <div className="create-note_container">
      <h1 className="create-note_container-title">Creating a note</h1>
      <AnimatePresence>
        {isCreatedPopup && <Popup content="Note created!" />}
        {isEmptyPopup && <Popup content="Enter all fields!" />}
      </AnimatePresence>
      <div
        className="create-note_section"
        style={
          theme === "light"
            ? {
                borderLeftColor: "#" + color,
                borderTopColor: "#" + color,
              }
            : {
                borderLeftColor: "#" + colorDark,
                borderTopColor: "#" + colorDark,
              }
        }
      >
        <AiOutlineCheckCircle
          size={25}
          className="create-note_btn"
          onClick={addNoteToLocalStorage}
          color={
            theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
          }
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
        <p className="create-note_updated">{placeholderDate}</p>
      </div>
    </div>
  );
};

export default CreateNote;
