import React from 'react';
import PropTypes from 'prop-types';
import styles from './PersonalProjects.module.css';

import PageHeader from '../../layout/PageHeader/PageHeader';

const PersonalProjects = () => (
  <div className={styles.PersonalProjects} data-testid="PersonalProjects">
    <PageHeader></PageHeader>
    PersonalProjects Component
  </div>
);

PersonalProjects.propTypes = {};

PersonalProjects.defaultProps = {};

export default PersonalProjects;
