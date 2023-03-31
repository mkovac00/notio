import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { ThemeContext } from "../../context/theme-context";
import { buttonColors } from "../../assets/variables";

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
          <AiFillHome
            className="desktop-nav-btn"
            size={30}
            color={
              theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
            }
          />
        </Link>

        <MdDarkMode
          className="desktop-theme-mode-btn desktop-nav-btn"
          size={30}
          color={
            theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
          }
          onClick={handleThemeChange}
        />
        <NewNote />
      </div>
    </div>
  );
};

export default DesktopHeader;
