import { useContext } from "react";
import "./MobileHeader.scss";

import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../context/theme-context";

const buttonColors = {
  lightMode: "#000000",
  darkMode: "#e0e0e0",
};

const MobileHeader = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
  };

  return (
    <div className="mobile-header">
      <Link to="/" className="mobile-header-logo_link">
        <h1 className="mobile-header-logo">Notio</h1>
      </Link>
      <MdDarkMode
        className="mobile-theme-mode-btn"
        size={30}
        color={
          theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
        }
        onClick={handleThemeChange}
      />
    </div>
  );
};

export default MobileHeader;
