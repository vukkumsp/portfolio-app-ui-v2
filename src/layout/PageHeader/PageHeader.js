import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageHeader.module.css';
import './PageHeader.css';
import HomeIcon from './../../assets/icons/house-up-fill.svg';

const PageHeader = () => (
  <div className={styles.PageHeader} data-testid="PageHeader">
    <div className="container d-flex flex-wrap">
      <div className="me-auto">
      </div>
      <a href="#home">
        <img src={HomeIcon} alt="Go Home" className="homeButton" />
      </a>
    </div>
  </div>
);

PageHeader.propTypes = {};

PageHeader.defaultProps = {};

export default PageHeader;
