import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Events</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
  </div>
);

export default Tables;
