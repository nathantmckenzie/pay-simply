import React, { useState, useEffect } from "react";
import "./header.css";
// import HamburgerMenu from "./HamburgerMenu";

function Header2() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayHamburgerIcon, setDisplayHamburgerIcon] = useState(false);
  const [displayEndIcon, setDisplayEndIcon] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      console.log(displayHamburgerIcon);
      setDisplayHamburgerIcon(window.innerWidth < 992);
    };

    const displayEnd = () => {
      console.log(window.innerWidth);
      console.log(displayEndIcon);
      setDisplayEndIcon(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    window.addEventListener("resize", displayEnd);
    displayEnd();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", displayEnd);
    };
  }, []);

  return (
    <header
      //   className={isExpanded ? "header-hamburger" : "header"}
      className={
        displayHamburgerIcon
          ? isExpanded
            ? "header-hamburger"
            : "header-not-expanded"
          : "header"
      }
    >
      <img
        src="/pay-simply-logo.png"
        alt="Pay Simply Logo"
        height="35"
        className="pay-simply-logo"
      />
      {displayHamburgerIcon ? (
        <div className="hamburger-menu" onClick={toggleNavbar}>
          Hamburger
        </div>
      ) : null}
      {/* <HamburgerMenu /> */}
      <div
        className={
          displayHamburgerIcon
            ? isExpanded
              ? null
              : "not-displayed"
            : "navigation-right"
        }
      >
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for a bill..."
          />
        </div>
        <nav
          className={
            displayHamburgerIcon
              ? isExpanded
                ? "navigation-hamburger"
                : null
              : "navigation"
          }
        >
          <a href="#" className="nav-link">
            Payment Status
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Help
          </a>
          <a href="#" className="nav-link">
            Language
          </a>
        </nav>
      </div>
      {/* {setDisplayEndIcon ? <div>End</div> : null} */}
    </header>
  );
}

export default Header2;
