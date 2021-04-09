import React from "react";
import { animateScroll as scroll } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="footerSocial">
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

          <ul className="copyright">
            <li>&copy; Copyright 2021 Calin Biberea</li>
          </ul>
        </div>
        <div id="toTop" className="scrollup" onClick={scroll.scrollToTop} aria-hidden>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
