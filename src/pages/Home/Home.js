import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto">
        <li className="nav-item">
          <b>vsaiprakash.me</b>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-dark"
              data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
              <img src='icons/github.svg'></img>
            </button>
            {/* <button type="button" className="btn btn-outline-success"
              data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
              <img src='icons/mailbox2.svg'></img>
            </button> */}
            <button type="button" className="btn btn-outline-primary"
              data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on top">
              <img src='icons/linkedin.svg'></img>
            </button>
            {/* <button type="button" className="btn btn-warning" disabled>Contact Me</button> */}
          </div>
        </li>
      </ul>
    </div>
    {/* <div className='d-flex flex-wrap py-3 mb-4'>
      <div className='row'>
        <div className='col-1'>
          vsaiprakash.me
        </div>
        <div className='col-1'>
          <button className="btn btn-warning" type="button">Contact Us</button>
        </div>
      </div>
    </div> */}

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
