import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrimarySkills.module.css';

import PageHeader from '../../layout/PageHeader/PageHeader';

const PrimarySkills = () => (
  <div className={styles.PrimarySkills} data-testid="PrimarySkills" id="skills">
    <PageHeader></PageHeader>
    Primary Skills
  </div>
);

PrimarySkills.propTypes = {};

PrimarySkills.defaultProps = {};

export default PrimarySkills;
