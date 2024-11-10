// components/Contact.tsx
"use client"

import React from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Contact.module.css'; // Import the CSS module

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactHeading}>Contact Me</h2>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <input type="text" placeholder="Name" className={styles.contactInput} />
        <input type="email" placeholder="Email" className={styles.contactInput} />
        <textarea placeholder="Message" className={styles.contactTextarea}></textarea>
        <button className={styles.contactButton}>Send</button>
      </form>
    </section>
  );
}

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm('service_kunq00r', 'template_qux048l', e.target as HTMLFormElement, '_ZnQpOGZBkFc6qDlV')
      .then((result) => {
          console.log('Email sent successfully!', result.text);
      }, (error) => {
          console.error('Failed to send email.', error.text);
      });
};

export default Contact;
