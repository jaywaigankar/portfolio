import React, { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setFormVisible(false);
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <button className={styles.toggleButton} onClick={toggleFormVisibility}>
        {isFormVisible ? "Hide Form" : "Show Form"}
      </button>

      {isFormVisible && (
        <div className={styles.formContainer}>
          <form
            name="contact"
            action="https://getform.io/f/nbvvgelb"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                rows="10"
                placeholder="Enter your message"
                className={styles.textarea}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
            >
              Submit
            </button>
          </form>
        </div>
      )}

      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:jaywaigankar2@gmail.com">Email - jaywaigankar2@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a href="tel:+7506250130">Phone - 7506250130</a>
        </li>
      </ul>
    </footer>
  );
};