import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { ThemeContext } from "../../context/theme-context";
import { buttonColors } from "../../assets/variables";
import { motion } from "framer-motion";

import NewNote from "../../components/NewNote";

import "./DesktopHeader.scss";

const DesktopHeader = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
  };

  return (
    <div className="desktop-header">
      <div className="desktop-header-fixed">
        <p className="desktop-header-logo">Notio</p>
        <Link to="/">
          <motion.div
            key="button-4-901924829"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <AiFillHome
              className="desktop-nav-btn"
              size={30}
              color={
                theme === "light"
                  ? buttonColors.lightMode
                  : buttonColors.darkMode
              }
            />
          </motion.div>
        </Link>

        {theme === "light" && (
          <motion.div
            key="button-3-362167930"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <MdDarkMode
              className="desktop-theme-mode-btn desktop-nav-btn"
              size={30}
              color={buttonColors.lightMode}
              onClick={handleThemeChange}
            />
          </motion.div>
        )}
        {theme === "dark" && (
          <motion.div
            key="button-4-192857774"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <BsFillSunFill
              className="desktop-theme-mode-btn desktop-nav-btn"
              size={30}
              color={buttonColors.darkMode}
              onClick={handleThemeChange}
            />
          </motion.div>
        )}
        <NewNote />
      </div>
    </div>
  );
};

export default DesktopHeader;
