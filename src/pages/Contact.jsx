import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nl9vl33', 'template_xzph0b6', form.current, 'teeDJTqinzN27fbQi')
      .then(() => alert('Message sent!'))
      .catch(() => alert('Failed to send message.'));
  };
  
  

  return (
    <section className="email1">
      <div className="contact-info">
  <p>📧 <a href="mailto:kiruthikank29@gmail.com">kiruthikank29@gmail.com</a></p>
  <p>📞 075 326 00 11</p>
</div>

      <form ref={form} onSubmit={sendEmail} className="email3">
        <input type="text" name="name" placeholder="Name" required className="email4" />
        <input type="email" name="email" placeholder="Email" required className="email5" />
        <textarea name="message" rows="4" placeholder="Message" required className="email6"></textarea>
        <button type="submit" className="email7">Send</button>
      </form>
    </section>
  );
};

export default Contact;