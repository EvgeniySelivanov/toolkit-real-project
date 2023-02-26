import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DashboardBtn.module.sass';
const DashboardBtn = () => {
  return (
    <div className={styles.button}>
                <Link className={styles.button__link} to='/dashboard'>
                  DASHBOARD
                </Link>
              </div>
  );
}

export default DashboardBtn;
