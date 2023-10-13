import React from 'react';
import PropTypes from 'prop-types';
import styles from './SecondarySkills.module.css';

import PageHeader from '../../layout/PageHeader/PageHeader';

const SecondarySkills = () => (
  <div className={styles.SecondarySkills} data-testid="SecondarySkills">
    {/* <PageHeader></PageHeader> */}
    SecondarySkills Component
  </div>
);

SecondarySkills.propTypes = {};

SecondarySkills.defaultProps = {};

export default SecondarySkills;
