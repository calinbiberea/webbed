import $ from "jquery";
import React, { useEffect, useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import { Link } from "react-scroll";

const NavigationMenu: React.FC = () => {
  /* Mobile navigation handling. */
  const [menuOpen, setMenuOpen] = useState(false);
  const menuDisplay = menuOpen ? "Show Navigation" : "Hide Navigation";

  /* Parameter to check if the menu on big screens has to be restored. */
  const menuDisplayCheck = useMediaPredicate("(max-width: 767px)");

  /* Colour the navigation bar and fade it out around header scroll. */
  useEffect(() => {
    $(window).on("scroll", () => {
      const headerHeight = $("header").height() || 0;
      const headerDistance = $(window).scrollTop() || 0;
      const windowOuterWidth = $(window).outerWidth() || 0;
      const navigationBar = $("#nav-wrapper");

      if (
        headerDistance > headerHeight * 0.2 &&
        headerDistance < headerHeight &&
        windowOuterWidth > 768
      ) {
        navigationBar.fadeOut("fast");
      } else if (headerDistance < headerHeight * 0.2) {
        navigationBar.removeClass("opaque").fadeIn("fast");
      } else {
        navigationBar.addClass("opaque").fadeIn("fast");
      }
    });

    if (menuDisplayCheck) {
      $("#nav-wrapper > ul#nav").css({
        display: "none",
      });
      setMenuOpen(false);
    } else {
      $("#nav-wrapper > ul#nav").css({
        display: "block",
      });
      setMenuOpen(false);
    }
  }, [menuDisplayCheck]);

  const menuToggle = () => {
    if (menuOpen) {
      $("#nav-wrapper > ul#nav").css({
        display: "none",
      });
      setMenuOpen(false);
    } else {
      $("#nav-wrapper > ul#nav").css({
        display: "block",
        padding: "30px 20px 48px 20px",
        background: "#1f2024",
        margin: "0 30px",
        clear: "both",
      });
      setMenuOpen(true);
    }
  };

  return (
    <nav id="nav-wrapper">
      <div className="menuButton" title={menuDisplay} onClick={menuToggle} aria-hidden="true">
        <div className="menuBarTop" />
        <div className="menuBarMiddle" />
        <div className="menuBarBottom" />
      </div>

      <ul id="nav" className="nav">
        <li>
          <Link id="toHome" activeClass="current" to="home" spy smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link id="toAbout" activeClass="current" to="about" spy smooth duration={500} offset={1}>
            About
          </Link>
        </li>
        <li>
          <Link
            id="toPortfolio"
            activeClass="current"
            to="portfolio"
            spy
            smooth
            duration={500}
            offset={1}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            id="toContact"
            activeClass="current"
            to="contact"
            spy
            smooth
            duration={500}
            offset={1}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
