import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageHeader.module.css';

const PageHeader = () => (
  <div className={styles.PageHeader} data-testid="PageHeader">
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto">
        <li className="nav-item">
          
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item">
          <a href="#home">Back</a>
      </li>
      </ul>
    </div>
  </div>
);

PageHeader.propTypes = {};

PageHeader.defaultProps = {};

export default PageHeader;
