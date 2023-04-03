import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillCloseCircle } from "react-icons/ai";
import { ThemeContext } from "../context/theme-context";
import { buttonColors } from "../assets/variables";
import { motion, AnimatePresence } from "framer-motion";
import { useIsSmallScreen } from "../hooks/useMediaQuery";

import "./NewNote.scss";

const NewNote = () => {
  const { theme } = useContext(ThemeContext);
  const [isNewNoteMenuOpened, setIsNewNoteMenuOpened] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  const handleShown = () => {
    setIsNewNoteMenuOpened(!isNewNoteMenuOpened);
  };

  return (
    <div className="new-note-picker">
      {!isNewNoteMenuOpened && (
        <motion.div
          key="button-1-571029486"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <AiFillPlusCircle
            id="new-note-btn"
            className="new-note-btn"
            color={
              theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
            }
            onClick={handleShown}
            size={32}
          />
        </motion.div>
      )}

      {isNewNoteMenuOpened && (
        <motion.div
          key="button-2-009174832"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <AiFillCloseCircle
            id="new-note-btn-close"
            className="new-note-btn-close"
            color={
              theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
            }
            onClick={handleShown}
            size={32}
          />
        </motion.div>
      )}

      <Link to="/note/create/c4e95c/607341">
        <AnimatePresence>
          {isNewNoteMenuOpened && (
            <motion.div
              key="circle-1-943843109"
              initial={
                isSmallScreen ? { x: 0, opacity: 0 } : { y: 0, opacity: 0 }
              }
              animate={
                isSmallScreen
                  ? { x: "32px", opacity: 1 }
                  : { y: "32px", opacity: 1 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              exit={
                isSmallScreen
                  ? { x: "0px", opacity: 0 }
                  : { y: "0px", opacity: 0 }
              }
              id="cc-1"
              className="colored-circle colored-circle-1"
            ></motion.div>
          )}
        </AnimatePresence>
      </Link>
      <Link to="/note/create/ff9c96/603c3a">
        <AnimatePresence>
          {isNewNoteMenuOpened && (
            <motion.div
              key="circle-2-834463859"
              initial={
                isSmallScreen ? { x: 0, opacity: 0 } : { y: 0, opacity: 0 }
              }
              animate={
                isSmallScreen
                  ? { x: "72px", opacity: 1 }
                  : { y: "72px", opacity: 1 }
              }
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              exit={
                isSmallScreen
                  ? { x: "0px", opacity: 0 }
                  : { y: "0px", opacity: 0 }
              }
              id="cc-2"
              className="colored-circle colored-circle-2"
            ></motion.div>
          )}
        </AnimatePresence>
      </Link>
      <Link to="/note/create/6cedbe/3f705e">
        <AnimatePresence>
          {isNewNoteMenuOpened && (
            <motion.div
              key="circle-3-734123190"
              initial={
                isSmallScreen ? { x: 0, opacity: 0 } : { y: 0, opacity: 0 }
              }
              animate={
                isSmallScreen
                  ? { x: "112px", opacity: 1 }
                  : { y: "112px", opacity: 1 }
              }
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              exit={
                isSmallScreen
                  ? { x: "0px", opacity: 0 }
                  : { y: "0px", opacity: 0 }
              }
              id="cc-3"
              className="colored-circle colored-circle-3"
            ></motion.div>
          )}
        </AnimatePresence>
      </Link>
      <Link to="/note/create/deb4ff/614a73">
        <AnimatePresence>
          {isNewNoteMenuOpened && (
            <motion.div
              key="circle-4-745210008"
              initial={
                isSmallScreen ? { x: 0, opacity: 0 } : { y: 0, opacity: 0 }
              }
              animate={
                isSmallScreen
                  ? { x: "152px", opacity: 1 }
                  : { y: "152px", opacity: 1 }
              }
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
              exit={
                isSmallScreen
                  ? { x: "0px", opacity: 0 }
                  : { y: "0px", opacity: 0 }
              }
              id="cc-4"
              className="colored-circle colored-circle-4"
            ></motion.div>
          )}
        </AnimatePresence>
      </Link>
      <Link to="/note/create/9ceee9/397078">
        <AnimatePresence>
          {isNewNoteMenuOpened && (
            <motion.div
              key="circle-5-745317490"
              initial={
                isSmallScreen ? { x: 0, opacity: 0 } : { y: 0, opacity: 0 }
              }
              animate={
                isSmallScreen
                  ? { x: "192px", opacity: 1 }
                  : { y: "192px", opacity: 1 }
              }
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
              exit={
                isSmallScreen
                  ? { x: "0px", opacity: 0 }
                  : { y: "0px", opacity: 0 }
              }
              id="cc-5"
              className="colored-circle colored-circle-5"
            ></motion.div>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
};

export default NewNote;
