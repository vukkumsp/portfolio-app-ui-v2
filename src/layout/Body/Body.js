import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.module.css';

// Pages
import Home from './../../pages/Home/Home';
import PrimarySkills from './../../pages/PrimarySkills/PrimarySkills';
import SecondarySkills from './../../pages/SecondarySkills/SecondarySkills';

const Body = () => (
  <div className={styles.Body} data-testid="Body">
    <Home></Home>
    <PrimarySkills></PrimarySkills>
    <SecondarySkills></SecondarySkills>
  </div>
);

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
