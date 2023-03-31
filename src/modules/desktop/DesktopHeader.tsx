import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
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
        <Link to="/" className="desktop-header-logo_link">
          <p className="desktop-header-logo">Notio</p>
        </Link>
        <MdDarkMode
          className="desktop-theme-mode-btn"
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
