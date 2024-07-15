import React from 'react';
import '../styles/main.css';
import './About.css';
import NavigationMenu from '../assets/NavigationMenu';
import edward from '../../public/Images/edward.jpg';
import Footer from '../assets/Footer';

const AboutUs = () => {
  return (
    <div className="body">
      <h1 className="animated">About Us</h1>
      <NavigationMenu />
      <div className="contents">
        <section id="intro-content">
          <div className="main-content">
            <h2>Brief Company Background:</h2>
            <h4>Company CEO</h4>
            <div className="image-text-wrapper">
              <img src={edward} alt="Company CEO" className="ceo-image" />
              <p>
                The company was pioneered by two great thinkers (Mr. Eddieson S. & K.K. Winters) in the year 2018.
                The two started as ICT trainers in Mukono Town Council and by the year 2020, 
                they decided to invest bigger by transforming themselves as tech. generals in Mukono district. 
                Eddieson is the co-founder of this great company.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
