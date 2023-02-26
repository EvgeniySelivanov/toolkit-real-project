import React from 'react';
import styles from './NameForSale.module.scss';
const NameForSale = () => {
  return (
    <div className={styles.headerBar}>
    <h3>Names For Sale</h3>
    <p className={styles.blueUnderline}>
      Not interested in launching a contest? Purchase a name instantly
      from our hand-picked collection of premium names. Price includes
      a complimentary Trademark Report, a Domain name as well as a
      Logo design
    </p>
  </div>
  );
}

export default NameForSale;
