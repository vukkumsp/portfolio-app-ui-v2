import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    <div className="row">
      <div className="col-12">
      <button className="btn btn-warning" type="button">Contact Us</button>
      </div>
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
