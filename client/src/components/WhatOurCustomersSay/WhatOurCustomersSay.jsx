import React from 'react';
import SliderBar from '../SlideBar/SlideBar';
import styles from './WhatOurCustomersSay.module.scss';
import carouselConstants from '../../carouselConstants';


const WhatOurCustomersSay = () => {
  return (
    <div className={styles.blueContainer}>
    <h2 className={styles.whiteUnderline}>What our customers say</h2>
    <SliderBar
      images={carouselConstants.feedbackSliderImages}
      carouselType={carouselConstants.FEEDBACK_SLIDER}
    />
  </div>
  );
}

export default WhatOurCustomersSay;

