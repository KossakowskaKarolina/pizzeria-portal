import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Booking.module.scss';

const Booking = () => {
  let {id} = useParams();

  return(
    <div className={styles.component}>
      <h2>Booking view</h2>
      <h3>{id}</h3>
    </div>
  );
};

Booking.propTypes = {
  id: PropTypes.string,
};

export default Booking;
