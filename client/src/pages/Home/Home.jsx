import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar/SlideBar';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.sass';
import carouselConstants from '../../carouselConstants';
import Spinner from '../../components/Spinner/Spinner';
import HomeWhySquadhelp from '../../components/HomeWhySquadhelp';
import LargestCollection from '../../components/LargestCollection/LargestCollection';
import FAQ from '../../components/FAQ/FAQ';
import HowDoNameContestWork from '../../components/HowDoNameContestWork/HowDoNameContestWork';
import FindPerfectName from '../../components/FindPerfectName/FindPerfectName';
import AdvertisingSection from '../../components/AdvertisingSection/AdvertisingSection';
import DashboardBtn from '../../components/DashboardBtn/DashboardBtn';
import IdeaStart from '../../components/IdeaStart/IdeaStart';

const Home = props => {
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
  const { isFetching } = props;
  return (
    <>
      <Header />
      {isFetching ? (
        <Spinner mtop />
      ) : (
        <>
          <div className={styles.container}>
            <FindPerfectName styleName={styleName} index={index} />
            <SlideBar images={carouselConstants.mainSliderImages} carouselType={carouselConstants.MAIN_SLIDER} />
            <LargestCollection />
            <HomeWhySquadhelp />
            <FAQ />
            <AdvertisingSection />
            <HowDoNameContestWork />
            <IdeaStart />


            <div className={styles.greyContainer}>
              <div className={styles.stepReverse}>
                <div>
                  <h3>Step 3: Rate Entries & Brainstorm with Creatives</h3>
                  <p>
                    <i className='fas fa-check' />
                    <span>Provide instant feedback on Names</span>
                  </p>
                  <p>
                    <i className='fas fa-check' />
                    <span>
                      Send private feedback or public messages to all creatives
                    </span>
                  </p>
                  <p>
                    <i className='fas fa-check' />
                    <span>
                      The more entries you rate - the submissions get better and
                      better
                    </span>
                  </p>
                </div>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}gif/3-compressed.gif`}
                  alt='compressed'
                />
              </div>
            </div>

            <div className={styles.headerBar}>
              <h3>Names For Sale</h3>
              <p className={styles.blueUnderline}>
                Not interested in launching a contest? Purchase a name instantly
                from our hand-picked collection of premium names. Price includes
                a complimentary Trademark Report, a Domain name as well as a
                Logo design
              </p>
            </div>

            <SlideBar images={carouselConstants.exampleSliderImages} carouselType={carouselConstants.EXAMPLE_SLIDER} />
            <DashboardBtn />

            <div className={styles.blueContainer}>
              <h2 className={styles.whiteUnderline}>What our customers say</h2>
              <SlideBar
                images={carouselConstants.feedbackSliderImages}
                carouselType={carouselConstants.FEEDBACK_SLIDER}
              />
            </div>
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
