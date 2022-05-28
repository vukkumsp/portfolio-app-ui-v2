import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

import HomePageHeader from '../../layout/HomePageHeader/HomePageHeader';

const Home = () => (
  <div className={styles.Home} data-testid="Home" id="home">
    <HomePageHeader></HomePageHeader>

    <div className='row'>
      <div className='col-6'>
        Hi!
      </div>
      <div className='col-6'>
        Img
      </div>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
