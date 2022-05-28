import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.module.css';

// Pages
import Home from './../../pages/Home/Home';
import PrimarySkills from './../../pages/PrimarySkills/PrimarySkills';
import SecondarySkills from './../../pages/SecondarySkills/SecondarySkills';
import WorkExperience from './../../pages/WorkExperience/WorkExperience';
import PersonalProjects from './../../pages/PersonalProjects/PersonalProjects';
import Education from './../../pages/Education/Education';

const Body = () => (
  <div className={styles.Body} data-testid="Body">
    <Home></Home>
    <PrimarySkills></PrimarySkills>
    <SecondarySkills></SecondarySkills>
    <WorkExperience></WorkExperience>
    <PersonalProjects></PersonalProjects>
    <Education></Education>
  </div>
);

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
