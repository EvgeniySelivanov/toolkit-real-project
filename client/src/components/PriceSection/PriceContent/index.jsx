import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './PriceContent.module.scss';

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

  const btnClassName = cx('button',
    {
      [styles.bronze]: color.name === 'bronze',
      [styles.gold]: color.name === 'gold',
      [styles.platinum]: color.name === 'platinum',
      [styles.managed]: color.name === 'managed',
    }

  );
  const titleClassName = cx('title',
    {
      [styles.bronzeTitle]: color.name === 'bronze',
      [styles.goldTittle]: color.name === 'gold',
      [styles.platinumTitle]: color.name === 'platinum',
      [styles.managedTitle]: color.name === 'managed',
    }

  );

const mainClassName=cx('main',{
  
})

  useEffect(() => {
    const handleSize = () => {

      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  const optionsMap = (item, i) => (
    <li key={i} data-tooltip={item.tooltip} className={styles.options}>
      {item.content}

    </li>
  );
  const optionsMapSpecial = (item, i) => (
    <div>
      <li key={i} data-tooltip={item.tooltip} className={styles.options}>
        {item.content}
      </li>
         {isOpen ? (<hr />) : false}
    </div>
  );
  const itemMap = (item, i) => (
    <li key={i} data-tooltip={item.dataContent} className={styles.items}>
      <i className="fa fa-check"></i>
      {item.item}
    </li>
  );

  return (
    <li 
      style={{ border: '5px transparent solid', borderColor: color.value, margin:'15px' }}
      onClick={() => handleClick(id)}
    >
      <div>
        <h2 className={titleClassName}>
          {title.charAt(0).toUpperCase() + title.slice(1)}&nbsp;
          <h3>
            {currency}
            {amount}
          </h3>
          {!isOpen ? (
            <i className="fa fa-plus"></i>
          ) : (
            <i className="fa fa-minus"></i>
          )}
        </h2>
        <p>{width > 760 ? subTitle : !isOpen}</p>

      </div>

      <ul >
        {width > 760 ? optionsBefore.map(optionsMap) : isOpen && optionsBefore.map(optionsMap)}
      </ul>
      {isOpen ? (<hr />) : false}

      <ul>
        {width > 760 ? optionsMedium.map(optionsMap) : isOpen && optionsMedium.map(optionsMap)}
      </ul>

      <ul>
        {width > 760 ? items.map(itemMap) : isOpen && items.map(itemMap)}
      </ul>
      {isOpen ? (<hr />) : false}
      <ul>
        {width > 760 ? optionsAfter.map(optionsMapSpecial) : isOpen && optionsAfter.map(optionsMapSpecial)}
      </ul>
    
      {
        width > 760 ?

          (
            <button className={btnClassName}>
              <i className="fa fa-check"></i>start
            </button>
          ) : isOpen && (
            <button className={btnClassName}>
              <i className="fa fa-check"></i>start
            </button>
          )}
    </li>
  );
};

export default PriceContent;
