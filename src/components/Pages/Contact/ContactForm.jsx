import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <div className="contact-form-page">
      <div className="form-container">
        <form
          onSubmit={submitForm}
          action="https://formspree.io/f/mwkwzdzr"
          method="POST"
          className="contact-form"
        >
          <div className="contact-header-message">Send me a message</div>
          <br />
          <label className="contact-label">Your Email*</label>
          <br />
          <input
            className="email-box"
            type="email"
            name="_replyto"
            placeholder="example@email.com"
            autoComplete="off"
          />
          <br />
          <br />
          <br />
          <label className="contact-label">Message</label>
          <br />
          <textarea
            className="message-box"
            type="text"
            name="message"
            autoComplete="off"
            placeholder="Enter message here"
          />
          <br />
          <br />
          {status === "SUCCESS" ? (
            <p className="contact-label">Thanks!</p>
          ) : (
            <button className="landing-btn submit-btn">
              Send Message <FontAwesomeIcon icon={faPaperPlane} size="m" />
            </button>
          )}
          {status === "ERROR" && (
            <p className="contact-label">Oops! There was an error.</p>
          )}
        </form>
        <div className="contact-information">
          <div className="contact-info-message">Contact Information</div>
          <br />
          <p className="contact-info-text">
            Feel free to reach out in whatever way works best for you!
          </p>
          <br />
          <br />
          <p className="contact-info-option phone">
            <FontAwesomeIcon icon={faPhone} size="m" /> (317) 697 1411
          </p>
          <br />
          <br />
          <p className="contact-info-option">
            <FontAwesomeIcon icon={faEnvelope} size="m" /> Tristan.oshier2000@gmail.com
          </p>
          <br />
          <br />
          <p className="contact-info-option">
            <FontAwesomeIcon icon={faLinkedin} size="lg" /> @tristanoshier
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContactForm);
