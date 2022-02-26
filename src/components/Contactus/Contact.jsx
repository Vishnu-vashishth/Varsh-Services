import React from 'react';
import "./Contactus.css";

export default function Contact() {
  // Formspree code

  return (
    <>
    <section className="contact section" id="contact">
      <h1 className="section_title">Contact Us</h1>
      <span className="section_subtitle">
        Want to connect? Our inbox is always open!!
      </span>

      <div className="contact_container container grid">
        <div>
          <a href="mailto:pgupta@duck.com" target="_blank" rel="noreferrer">
            <div className="contact_info">
              <i className="uil uil-envelope-alt contact_icon"></i>
              <div>
                <h3 className="contact_title">Email</h3>
                <span className="contact_subtitle">pgupta@duck.com</span>
              </div>
            </div>
          </a>

          <a href="https://calendly.com/singhdikshit69/30min" target="_blank" rel="noreferrer">
            <div className="contact_info">
              <i className="uil uil-calendar-alt contact_icon"></i>
              <div>
                <h3 className="contact_title">Online Meet</h3>
                <span className="contact_subtitle">Schedule an Online Meet</span>
              </div>
            </div>
          </a>

          <a href="https://twitter.com/Dannysingh6913" target="_blank" rel="noreferrer">
            <div className="contact_info">
              <i className="uil uil-twitter-alt contact_icon"></i>
              <div>
                <h3 className="contact_title">Twitter</h3>
                <span className="contact_subtitle">Vishal Services</span>
              </div>
            </div>
          </a>

          <a href="https://goo.gl/maps/AbkrLpc6JepJcrSL8" target="_blank" rel="noreferrer">
            <div className="contact_info">
              <i className="uil uil-location-point contact_icon"></i>
              <div>
                <h3 className="contact_title">Location</h3>
                <span className="contact_subtitle">Haryana, India</span>
              </div>
            </div>
          </a>
        </div>

        <form action="https://formspree.io/f/xyyozeaq" className="contact_form grid" id="contact-form" method="POST">
          <div id="alert" className="alert_style"></div>
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label className="contact_label">Name</label>
              <input type="text" name="name" className="contact_input" id="name" required />
            </div>
            <div className="contact_content">
              <label htmlFor="email" className="contact_label">Email</label>
              <input type="email" name="email" className="contact_input" id="email" required />
            </div>
          </div>
          <div className="contact_content">
            <label htmlFor="subject" className="contact_label">Subject</label>
            <input type="text" name="subject" className="contact_input" id="subject" required />
          </div>
          <div className="contact_content">
            <label htmlFor="message" className="contact_label">Message</label>
            <textarea name="message" id="" cols="0" rows="7" className="contact_input message" required></textarea>
          </div>

          <div>
            <button type="submit" className="button button-flex">
              Send Message
              <i className="uil uil-message button_icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  </>
  );
}