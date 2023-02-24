import React from 'react';
import CONSTANTS from '../../../constants';
import styles from '../HomeWhySquadhelp.module.sass';
const CardArticle = (props) => {
  const { imgPath, alt, title, description } = props
  return (
    <article className={styles.card}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${imgPath}`} alt={alt} />
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </article>
  );
}

export default CardArticle;
