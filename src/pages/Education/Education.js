import React from 'react';
import PropTypes from 'prop-types';
import styles from './Education.module.css';

import PageHeader from '../../layout/PageHeader/PageHeader';

const Education = () => (
  <div className={styles.Education} data-testid="Education">
    <PageHeader></PageHeader>
    Education Component
  </div>
);

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
