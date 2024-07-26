import React from 'react';

const ContactTitle = ({ title, text }) => {
  return (
    <div className="contact-title-component">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default ContactTitle;
