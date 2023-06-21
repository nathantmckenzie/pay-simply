import React, { useState, useEffect } from "react";
import "./nav-bar.css";

function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayHamburgerIcon, setDisplayHamburgerIcon] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setDisplayHamburgerIcon(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={
        displayHamburgerIcon
          ? isExpanded
            ? "drop-down-nav-bar-container"
            : "narrow-nav-bar-container"
          : "nav-bar-container"
      }
    >
      <img
        src="/pay-simply-logo.png"
        alt="Pay Simply Logo"
        onClick={() => (window.location.href = "https://www.paysimply.ca/Default.aspx")}
        className={
          displayHamburgerIcon ? "pay-simply-logo-opposite-side" : "pay-simply-logo"
        }
      />
      <div>
        {displayHamburgerIcon ? (
          <div className="hamburger-menu-icon" onClick={toggleNavbar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        ) : null}
        <div
          className={
            displayHamburgerIcon
              ? isExpanded
                ? "drop-down-navigation-links"
                : "hide-navigation-links"
              : "navigation-links"
          }
        >
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="search-input"
            placeholder="Search for a bill..."
          />
          <nav
            className={
              displayHamburgerIcon
                ? isExpanded
                  ? "drop-down-navigation-list"
                  : null
                : "navigation-list"
            }
          >
            <a
              href="https://www.paysimply.ca/PaymentStatus/Default.aspx"
              className={isExpanded ? "drop-down-navigation-link" : "navigation-link"}
            >
              Payment Status
            </a>
            <a
              href="https://www.paysimply.ca/About/Default.aspx"
              className={isExpanded ? "drop-down-navigation-link" : "navigation-link"}
            >
              About
            </a>
            <a
              href="https://help.paymentsource.net/paysimply/en/categories"
              className={isExpanded ? "drop-down-navigation-link" : "navigation-link"}
            >
              Help
            </a>
            <a
              href="#"
              className={isExpanded ? "drop-down-navigation-link" : "navigation-link"}
            >
              Language
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
