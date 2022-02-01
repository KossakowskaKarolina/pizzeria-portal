import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Order.module.scss';

const Order = () => {
  let {id} = useParams();

  return(
    <div className={styles.component}>
      <h2>Order view</h2>
      <h3>{id}</h3>
    </div>
  );
};


export default Order;
