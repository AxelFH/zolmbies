import React from 'react';


const ContactCard = ({ imageSrc, linkText, linkHref, className }) => {
  return (
    <div className={className}>
      <a className='c-link' target='_blank' href={linkHref}>{linkText}<img src={imageSrc} alt="Card Image" /></a>
    </div>
  );
}

export default ContactCard;