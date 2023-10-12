import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePageHeader.module.css';

const HomePageHeader = () => (
  <div className={styles.HomePageHeader} data-testid="HomePageHeader">
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
    <a className="navbar-brand clickable">Portfolio</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link clickable home-button">
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link clickable skills-button">Skills</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Work
                </a>
                <div className="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item clickable">Work Experience</a>
                    <a className="dropdown-item clickable personal-projects-button">Personal Projects</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item clickable disabled">Coming Soon ...</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link clickable education-button">Education</a>
            </li>
            <li className="nav-item">
                <a className="nav-link clickable contact-me-button">Contact Me</a>
            </li>

        </ul>
    </div>
</nav>
  </div>
);

HomePageHeader.propTypes = {};

HomePageHeader.defaultProps = {};

export default HomePageHeader;
