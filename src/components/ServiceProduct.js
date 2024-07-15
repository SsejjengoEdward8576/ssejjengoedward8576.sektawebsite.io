import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import './ServiceProduct.css';
import NavigationMenu from "../assets/NavigationMenu";
import Footer from "../assets/Footer";

// Importing images
import edward from '../../public/Images/edward.jpg';
import touchTech from '../../public/Images/touch-tech.jpg';
import webServices from '../../public/Images/webservices.jpeg';

const ServicesProducts = () => {
  return (
    <div className="service-product-body">
      <NavigationMenu />
      <div className="header">
        <h1 className="animated">Our Services and Products</h1>
      </div>
      <div className="contents">
        <section className="intro-section section">
          <div className="intro-content">
            <h2>Welcome to the Service/Product Portal</h2>
            <p>We offer a wide range of services and products to cater to your tech needs:</p>
            <ol>
              <li>Training in various IT-related skills</li>
              <li>Develop Information Management Systems</li>
              <li>Custom Software Development</li>
              <li>IT Consultancy</li>
            </ol>
          </div>
        </section>

        <section className="services-section section">
          <h3>Our Services</h3>
          <div className="service">
            <h4>IT Training</h4>
            <p>We provide professional training in various IT skills to help you stay ahead in the tech world.</p>
            <h4>Information Systems Development</h4>
            <p>We specialize in creating custom information management systems tailored to your business needs.</p>
            <h4>Custom Software Development</h4>
            <p>Our team of expert developers can create custom software solutions to meet your unique requirements.</p>
            <h4>IT Consultancy</h4>
            <p>We offer expert IT consultancy services to help you make informed decisions and optimize your tech strategy.</p>
          </div>
        </section>

        <section className="products-section section">
          <h3>Featured Products</h3>
          <div className="product-grid">
            <div className="product-item">
              <img src={edward} alt="Edward" />
              <div className="product-info">
                <h4>Product 1</h4>
                <p>Description of Product 1.</p>
                <a href="#" className="btn">Buy Now</a>
              </div>
            </div>

            <div className="product-item">
              <img src={touchTech} alt="Touch Technology" />
              <div className="product-info">
                <h4>Product 2</h4>
                <p>Description of Product 2.</p>
                <a href="#" className="btn">Buy Now</a>
              </div>
            </div>

            <div className="product-item">
              <img src={webServices} alt="Web Services" />
              <div className="product-info">
                <h4>Product 3</h4>
                <p>Description of Product 3.</p>
                <a href="#" className="btn">Buy Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-section section">
          <h3>What Our Clients Say</h3>
          <div className="testimonial">
            <p>"SEKTA TECH. SOLUTIONS transformed our business with their innovative solutions. Their team is incredibly knowledgeable and professional." - Client A</p>
          </div>
          <div className="testimonial">
            <p>"The custom software developed by SEKTA TECH. SOLUTIONS has streamlined our operations and improved our efficiency significantly." - Client B</p>
          </div>
        </section>

        <section className="case-studies-section section">
          <h3>Case Studies</h3>
          <div className="case-study">
            <h4>Case Study 1: Enterprise Resource Planning System</h4>
            <p>We developed a comprehensive ERP system for a large corporation, which integrated various business processes and improved overall productivity.</p>
          </div>
          <div className="case-study">
            <h4>Case Study 2: E-Commerce Platform</h4>
            <p>We created a custom e-commerce platform for a retail client, enabling them to reach a wider audience and increase their sales.</p>
          </div>
        </section>

        <section className="faqs-section section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq">
            <h4>What services do you offer?</h4>
            <p>We offer IT training, information systems development, custom software development, and IT consultancy services.</p>
          </div>
          <div className="faq">
            <h4>How can I get started?</h4>
            <p>You can contact us through our website or give us a call to discuss your needs and get a customized solution.</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesProducts;
