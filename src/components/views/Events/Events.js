import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Events.module.scss';

const Events = () => {
  let {id} = useParams();

  return(
    <div className={styles.component}>
      <h2>Events view</h2>
      <h3>{id}</h3>
    </div>
  );
};



export default Events;
