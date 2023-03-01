import React, { useState } from 'react';
import data from './data.json';
import styles from './LargestCollection.module.scss';
const LargestCollection = () => {

  const [btnState, setStateBtn] = useState(data.articles);

  const btnMap=(elem, i) => <button key={i} className={elem.isPush ? styles.buttonActive : styles.button} onClick={handleClick}>{elem.title}</button>

  const handleClick = ({ target: { innerText } }) => {
    setStateBtn(btnState.map((elem) => {
      return {
        ...elem,
        isPush: (innerText === elem.title ? true : false)
      }
    }
    ));
  }
  return (
    <section className={styles.section}>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>Largest Collection of Brandable Names</h3>
        <p>Explore themed brand name collections created by our experienced team of branding experts</p>
      </div>
      <div className={styles.collectionBtn}>
        {btnState.map(btnMap)}
      </div>
    </section>
  );
}
export default LargestCollection;
