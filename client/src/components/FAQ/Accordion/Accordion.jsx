import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import parse from 'html-react-parser';

const Accordion = (props) => {
  const {title,body}=props;
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }
  return (
    <div className={isActive? styles.open : styles.title}>
      <h3 className={isActive ? styles.titleOpen : styles.titleClose} onClick={handleClick}>{title}</h3>
      <div className={isActive ? styles.openParagraph : styles.close} >{parse(body)}</div>
   </div>
  );
};

export default Accordion;