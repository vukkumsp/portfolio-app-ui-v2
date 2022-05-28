import React from 'react';
import PropTypes from 'prop-types';
import styles from './WorkExperience.module.css';

import PageHeader from '../../layout/PageHeader/PageHeader';

const WorkExperience = () => (
  <div className={styles.WorkExperience} data-testid="WorkExperience">
    <PageHeader></PageHeader>
    WorkExperience Component
  </div>
);

WorkExperience.propTypes = {};

WorkExperience.defaultProps = {};

export default WorkExperience;
