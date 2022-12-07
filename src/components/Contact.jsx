import React, { useRef } from "react";
import "./contact.css";
import Layout from "./Layout";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j5knz8k",
        "template_ufpibq6",
        form.current,
        "7o7FsvKBfmW-bqzd4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Layout />
      <main className="contact">
        <div className="container">
          <div className="cmn-heading">
            <h1 className="title">
              my <span className="heading-last-word">get in touch</span>
            </h1>
            <span className="title-bg">contact</span>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h2>don't be shy!</h2>
              <p className="contact-sub-details">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <div className="contact-intro">
                <div className="contact-inner">
                  <i className="bx bx-current-location"></i>
                  <p>address</p>
                  <p>dhaka 1205, bangladesh</p>
                </div>
                <div className="contact-inner">
                  <i className="bx bxs-envelope"></i>
                  <p>mail</p>
                  <p>
                    <a href="mailto:mr.rubelshahriar@gmail.com">
                      mr.rubelshahriar@gmail.com
                    </a>
                  </p>
                </div>
                <div className="contact-inner">
                  <i className="bx bxs-phone"></i>
                  <p>call me</p>
                  <p>+01793977498</p>
                </div>
                <div className="contact-icons">
                  <a href="https://github.com/RubelShahriar">
                    <i className="bx bxl-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/mrrubelmia/">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/RubelShr">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/mdrubelshahriar/">
                    <i className="bx bxl-instagram-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <form ref={form} onSubmit={sendMail} className="contact-inputs">
              <div className="input-text-mail">
                <div>
                  <input type="text" placeholder="Your Name" name="name" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" name="name" />
                </div>
              </div>
              <input type="text" placeholder="Your Subject" name="subject" />
              <textarea
                rows="10"
                placeholder="Your Message"
                name="message"
              ></textarea>
              <div className="btn-main">
                <button type="submit" className="button">
                  <span className="btn-span-text">send message</span>
                </button>
                <i className="bx bxs-paper-plane btn-arrow"></i>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
