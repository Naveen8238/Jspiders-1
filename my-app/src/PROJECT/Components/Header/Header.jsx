import React, { useState } from "react";
import logo from "../Images/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import "../Header/Header.css";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter h-container paddings innerWidth">
        <img src={logo} alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <a href="#">Home</a>
            <a href="#">Our Value</a>
            <a href="#">Contact Us</a>
            <a href="#">Get started</a>
            <button className="button">
              <a href="#">contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
