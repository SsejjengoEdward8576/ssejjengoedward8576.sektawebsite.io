import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "../styles/main.css";
import "./Contacts.css";
import NavigationMenu from '../assets/NavigationMenu';
import Footer from "../assets/Footer";

const ContactUs = () => {
  return (
    <div>
      <h1 className="animated">Contact Us</h1> 
      <NavigationMenu />
      {/* Contents here */}
      <div className="contents">
        <section id="intro-content">
          <div className="contacts-container">
            <h2>Get in Touch</h2>
            <p className="contact-text">
              Have a question or need assistance? Contact us today! Our friendly
              team is here to help you find the perfect tech solution for your
              needs.
            </p>
            <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:sektatechsolutions@gmail.com">sektatechsolutions@gmail.com</a>
            </div>
            <div className="contact-item">
                <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
                <a href="https://wa.me/256706628094" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <div className="contacts-tel">
                <a href="tel:+256706629094">+256 706 628 094</a>
                <a href="tel:+256755138304">+256 755 138 304</a>
                <a href="tel:+256773808094">+256 773 808 094</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};


export default ContactUs;
