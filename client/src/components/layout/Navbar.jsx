import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CovidContext from "../../context/covid/covidContext";

const Navbar = () => {
  const covidContext = useContext(CovidContext);

  const { darkMode, setDarkMode } = covidContext;

  return (
    <Fragment>
      <nav className="nav-extended blue-grey darken-3">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left-align">
            COVID 19 Tracker{" "}
          </Link>
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* Mode toggle */}
            <li>
              <button
                className="btn-mode-toggle"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <span className="yellow-text">
                    <i className="fas fa-sun"></i>
                  </span>
                ) : (
                  <span className="white-text">
                    <i className="fas fa-moon"></i>
                  </span>
                )}
              </button>
            </li>
            {/* About */}
            <li>
              <a
                className="nav-button waves-effect waves-light modal-trigger"
                href="#aboutModal"
              >
                <span>
                  <i className="far fa-question-circle"></i>
                </span>{" "}
                About
              </a>
            </li>
            {/* Myth Busters */}
            <li>
              <a
                className="nav-button waves-effect waves-light"
                target="blank"
                href="https://coronamythbusters.com"
              >
                <span>
                  <i className="fas fa-viruses"></i>
                </span>{" "}
                Myth Busters
              </a>
            </li>
            {/* Telegram Bot */}
            <li>
              <a
                className="nav-button waves-effect waves-light"
                target="blank"
                href="https://t.me/KeralaCovid19Bot"
              >
                <span>
                  <i class="fab fa-telegram-plane"></i>
                </span>{" "}
                Telegram Bot
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidenav */}
      <ul
        className={"sidenav " + (darkMode ? "dark-mode" : "light-mode")}
        id="mobile-demo"
      >
        {/* About */}
        <li>
          <a
            className="waves-effect waves-light modal-trigger"
            href="#aboutModal"
          >
            About
          </a>
        </li>
        {/* Myth Busters */}
        <li>
          <a
            className="waves-effect waves-light"
            target="blank"
            href="https://coronamythbusters.com"
          >
            Myth Busters
          </a>
        </li>
        {/* Telegram Bot */}
        <li>
          <a
            className="waves-effect waves-light"
            target="blank"
            href="https://t.me/KeralaCovid19Bot"
          >
            Telegram Bot
          </a>
        </li>
        {/* Toggle Mode */}
        <li>
          <button
            className="btn-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <span className="yellow-text">
                <i className="fas fa-3x fa-sun center-align"></i>
              </span>
            ) : (
              <span className="blue-grey-text">
                <i className="fas fa-3x fa-moon"></i>
              </span>
            )}
          </button>
        </li>
      </ul>

      {/* About modal */}
      <div
        id="aboutModal"
        className={"modal " + (darkMode ? "dark-mode" : "light-mode")}
      >
        <div className="modal-content">
          <h4>About this site</h4>
          <div className="qna">
            <p className="about-question">
              <i className="fas fa-question-circle orange-text"></i> Why was
              this site created?
            </p>
            <p className="about-answer">
              <i className="fas fa-pen green-text"></i> This is an unofficial
              site created in public interest to track the COVID 19 cases across
              the state of Kerala.
            </p>
          </div>

          <div className="qna">
            <p className="about-question">
              <i className="fas fa-question-circle orange-text"></i> From where
              is all the information sourced?
            </p>
            <p className="about-answer">
              <i className="fas fa-pen green-text"></i> The data is collated
              from the API open sourced by the team at{" "}
              <a href="https://covid19india.org" target="blank" rel="noopener">
                COVID19INDIA.ORG
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
