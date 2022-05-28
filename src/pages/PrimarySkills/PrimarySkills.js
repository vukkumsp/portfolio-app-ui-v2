import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrimarySkills.module.css';

const PrimarySkills = () => (
  <div className={styles.PrimarySkills} data-testid="PrimarySkills">
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto">
        <li className="nav-item">
          <b>vsaiprakash.me</b>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item">
          asdf
      </li>
      </ul>
    </div>
  </div>
);

PrimarySkills.propTypes = {};

PrimarySkills.defaultProps = {};

export default PrimarySkills;
