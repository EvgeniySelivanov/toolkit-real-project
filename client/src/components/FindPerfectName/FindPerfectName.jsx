import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../constants';
import DashboardBtn from '../DashboardBtn/DashboardBtn';
import styles from './FindPerfectName.module.sass';

const FindPerfectName = (props) => {
  const {styleName,index}=props;
  const text =
    CONSTANTS.HEADER_ANIMATION_TEXT[
    index % CONSTANTS.HEADER_ANIMATION_TEXT.length
    ];
  
  return (
    <>
       <div className={styles.headerBar}>
              <div className={styles.headline}>
                <span>Find the Perfect Name for </span>
                <span className={styleName}>{text}</span>
              </div>
              <p>
                Launch a naming contest to engage hundreds of naming experts as
                you’re guided through our agency-level naming process. Or,
                explore our hand-picked collection of premium names available
                for immediate purchase
              </p>
           
              <DashboardBtn/>
            </div>
    </>
  );
}

export default FindPerfectName;
