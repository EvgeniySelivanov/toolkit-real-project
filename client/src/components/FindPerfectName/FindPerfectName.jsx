import React,{useState,useEffect} from 'react';
import CONSTANTS from '../../constants';
import DashboardBtn from '../DashboardBtn/DashboardBtn';
import styles from './FindPerfectName.module.scss';

const FindPerfectName = (props) => {
  const [index, setIndex] = useState(0);
  const [styleName, setStyle] = useState(styles.headline__static);
  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex(index + 1);
      setStyle(styles.headline__isloading);
    }, 3000);
    return () => {
      setStyle(styles.headline__static);
      clearInterval(timeout);
    };
  });
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
