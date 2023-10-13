import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePageHeader.module.css';
import './HomePageHeader.css';

const HomePageHeader = () => (  
    <div className={styles.HomePageHeader} data-testid="HomePageHeader">
        <a className="navbar-brand navbar-light clickable" >Portfolio</a>
        {/* "navbar-brand navbar-light clickable "   */}
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link clickable home-button" href="#home">
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link clickable skills-button" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link clickable work-experience-button" href="#work-experience">Work</a>
            </li>
            <li className="nav-item">
                <a className="nav-link clickable personal-projects-button" href="#personal-projects">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link clickable education-button" href="#education">Education</a>
            </li>
            <li className="nav-item">
                <a className="nav-link clickable contact-me-button" href="#contact-us">Contact Me</a>
            </li>

        </ul>
    </div>
);

HomePageHeader.propTypes = {};

HomePageHeader.defaultProps = {};

export default HomePageHeader;
