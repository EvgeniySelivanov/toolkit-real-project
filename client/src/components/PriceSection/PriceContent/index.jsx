import React, { useState, useEffect } from 'react';
import styles from './PriceContent.module.scss';
import cx from 'classnames';
import PriceContentDownParagraph from '../PriceContentDownParagraph/PriceContentDownParagraph';


const PriceContent = (props) => {

  const [width, setWidth] = useState(window.innerWidth);
  const {
    priceContent: {
      id,
      title,
      subTitle,
      price: { currency, amount },
      optionsBefore,
      optionsMedium,
      items,
      optionsAfter,
    },
    color,
    isOpen: { isOpen },
    handleClick,
  } = props;



  useEffect(() => {
    const handleSize = () => {

      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);



  const optionsMap = (item, i) => {

    const proof = /Validation Services & Upgrades/gm;
    console.log(item.content);
    console.log(proof.test(item.content));

    if (!proof.test(item.content)) {
      var classNameOnlyThis = cx(styles.options, styles.optionsBorder);
    }
    if (proof.test(item.content)) {
      classNameOnlyThis = cx(styles.options, styles.optionsNoBorder);
    }
    return (<li key={i} data-tooltip={item.tooltip} className={classNameOnlyThis} >
      {item.content}
    </li>)
  };

  const className = cx({ [styles.itemsBorder]: isOpen });

  const itemMap = (item, i) => {

    if (item.item !== null) {
      return (<li key={i} data-tooltip={item.dataContent} className={styles.items}>
        <i className="fa fa-check"></i>
        {item.item}</li>)
    }
  }

    ;

  return (
    <li
      style={{ border: '5px transparent solid', borderColor: color.value }}
      onClick={() => handleClick(id)}
      className={styles.cardPrice}
    >
      <div className={styles.titleHD} style={{ border: '10px transparent solid', borderColor: color.value }}>
        <h2 className={styles.title} style={{ color: color.value }}>
          {title.charAt(0).toUpperCase() + title.slice(1)}&nbsp;

          {!isOpen ? (
            <i className="fa fa-plus"></i>
          ) : (
            <i className="fa fa-minus"></i>
          )}
        </h2>
        <p className={styles.subTitle}>{width > 760 ? subTitle : !isOpen}</p>
        <h3 className={styles.title} style={{ color: color.value }}>
          {currency}
          {amount}
        </h3>
      </div>

      <ul >
        {width > 760 ? optionsBefore.map(optionsMap) : isOpen && optionsBefore.map(optionsMap)}
      </ul>


      <ul>
        {width > 760 ? optionsMedium.map(optionsMap) : isOpen && optionsMedium.map(optionsMap)}
      </ul>

      <ul className={className}>
        {width > 760 ? items.map(itemMap) : isOpen && items.map(itemMap)}
      </ul>

      <ul >
        {width > 760 ? optionsAfter.map(optionsMap) : isOpen && optionsAfter.map(optionsMap)}
      </ul>



      {
        width > 760 ?

          (
            <button className={styles.button} style={{ backgroundColor: color.value, border: `1px solid ${color.value}` }}>
              <i className="fa fa-check"></i>start
            </button>
          ) : isOpen && (
            <button className={styles.button} style={{ backgroundColor: color.value, border: `1px solid ${color.value}` }}>
              <i className="fa fa-check"></i>start
            </button>
          )}
    </li>
  );
};

export default PriceContent;
