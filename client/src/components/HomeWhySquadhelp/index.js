import React from 'react';
import styles from './HomeWhySquadhelp.module.sass';
import data from './data.json';
import CardArticle from './CardArticle';
const HomeWhySquadhelp = () => {
  
const mapArticle=({imgPath,alt,title,description},i)=> <CardArticle key={i} imgPath={imgPath} alt={alt} title={title} description={description}/>
  return (
    <div className={styles.container__description}>
      <h2 className={styles.blueUnderline}>{data.heading}</h2>
      <div className={styles.cardContainer}>
      {
        data.articles.map(mapArticle)
      }
     </div>
    </div>
  );
}

export default HomeWhySquadhelp;
