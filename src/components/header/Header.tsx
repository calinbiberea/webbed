import $ from "jquery";
import React, { useEffect } from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  /* Make sure that header height is equal to the browser height. */
  useEffect(() => {
    const height = $(window).height() || 0;

    $("header").css({
      height,
    });

    $(window).on("resize", () => {
      const resizeHeight = $(window).height() || 0;
      const resizeWidth = $(window).width() || 0;

      $("header").css({
        height: resizeHeight,
      });
      $("body").css({
        width: resizeWidth,
      });
    });
  }, []);

  return (
    <header id="home">
      <div className="row homeBody">
        <div className="homeText">
          <h1 className="homeTitle">Hi! I&apos;m Calin.</h1>
          <h3>
            I am a Computing MEng student based in <span>London</span>. My current interests include
            machine learning, particularly computer vision (medical imaging).
          </h3>
          <hr />
          <ul className="homeSocial">
            <li>
              <a href="https://www.facebook.com/calinbiberea">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="https://github.com/calinbiberea">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/calinbiberea/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="scrolldown">
        <Link id="toAbout" to="about" spy smooth duration={500}>
          <i className="icon-down-circle" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
