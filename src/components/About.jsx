import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const About = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g7u2q9o', 'template_3ayxz9n', form.current, {
        publicKey: '0Lhh7Jn9AsmNrq9an',
      })
      .then(
        () => {
          setSuccess(true);  // Set success state to true
          setError(false);   // Ensure error state is false
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);    // Set error state to true
          setSuccess(false); // Ensure success state is false
        },
      );
  };

  return (
    <div>
      {success && <div><h1>Success</h1></div>}
      {error && <div><h1>Failed to send email</h1></div>}
      {!success && !error && (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>
      )}
    </div>
  );
};

export default About;
