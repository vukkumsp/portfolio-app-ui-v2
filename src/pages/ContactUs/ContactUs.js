import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactUs.module.css';

import PageHeader from '../../layout/PageHeader/PageHeader';

const ContactUs = () => (
  <div className={styles.ContactUs} data-testid="ContactUs" id="contact-us">
    <PageHeader></PageHeader>
    ContactUs Component
  </div>
);

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
