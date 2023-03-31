import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { ThemeContext } from "../../context/theme-context";
import { buttonColors } from "../../assets/variables";

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
          <AiFillHome
            className="mobile-nav-btn"
            size={30}
            color={
              theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
            }
          />
        </Link>
        <MdDarkMode
          className="mobile-theme-mode-btn mobile-nav-btn"
          size={30}
          color={
            theme === "light" ? buttonColors.lightMode : buttonColors.darkMode
          }
          onClick={handleThemeChange}
        />
      </div>
    </div>
  );
};

export default MobileHeader;
