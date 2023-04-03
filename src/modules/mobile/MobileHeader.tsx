import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { ThemeContext } from "../../context/theme-context";
import { buttonColors } from "../../assets/variables";
import { motion } from "framer-motion";

import "./MobileHeader.scss";

const MobileHeader = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
  };

  return (
    <div className="mobile-header">
      <h1 className="mobile-header-logo">Notio</h1>
      <div className="mobile-header-nav">
        <Link to="/">
          <motion.div
            key="button-5-019274625"
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
              className="mobile-nav-btn"
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
            key="button-7-019275832"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <MdDarkMode
              className="mobile-theme-mode-btn mobile-nav-btn"
              size={30}
              color={buttonColors.lightMode}
              onClick={handleThemeChange}
            />
          </motion.div>
        )}
        {theme === "dark" && (
          <motion.div
            key="button-6-377719378"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <BsFillSunFill
              className="mobile-theme-mode-btn mobile-nav-btn"
              size={30}
              color={buttonColors.darkMode}
              onClick={handleThemeChange}
            ></BsFillSunFill>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
