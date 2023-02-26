import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import SlideBar from '../../components/SlideBar/SlideBar';
import Footer from '../../components/Footer/Footer';
import carouselConstants from '../../carouselConstants';
import Spinner from '../../components/Spinner/Spinner';
import HomeWhySquadhelp from '../../components/HomeWhySquadhelp';
import LargestCollection from '../../components/LargestCollection/LargestCollection';
import FAQ from '../../components/FAQ/FAQ';
import FindPerfectName from '../../components/FindPerfectName/FindPerfectName';
import AdvertisingSection from '../../components/AdvertisingSection/AdvertisingSection';
import DashboardBtn from '../../components/DashboardBtn/DashboardBtn';
import StepTwo from '../../components/StepTwo/StepTwo';
import StepOne from '../../components/StepOne/StepOne';
import StepThree from '../../components/StepThree/StepThree';
import NameForSale from '../../components/NameForSale/NameForSale';
import WhatOurCustomersSay from '../../components/WhatOurCustomersSay/WhatOurCustomersSay';
import styles from './Home.module.sass';


const Home = props => {
  const { isFetching } = props;
  return (
    <>
      <Header />
      {isFetching ? (
        <Spinner mtop />
      ) : (
        <>
          <div className={styles.container}>
            <FindPerfectName />
            <SlideBar images={carouselConstants.mainSliderImages} carouselType={carouselConstants.MAIN_SLIDER} />
            <LargestCollection />
            <HomeWhySquadhelp />
            <FAQ />
            <AdvertisingSection />
            <StepOne />
            <StepTwo />
            <StepThree />
            <NameForSale />
            <SlideBar images={carouselConstants.exampleSliderImages} carouselType={carouselConstants.EXAMPLE_SLIDER} />
            <DashboardBtn />
            <WhatOurCustomersSay />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
const mapStateToProps = state => {
  const { isFetching } = state.userStore;
  return { isFetching };
};
export default connect(mapStateToProps, null)(Home);
