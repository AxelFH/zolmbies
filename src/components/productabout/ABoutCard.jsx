// AboutCard.js
import React from 'react';

const AboutCard = ({ title, imageSrc, detail, link, linktext, refer }) => {
  return (
    <div className="about-card">      
      <h3 className="about-card-title">{title}</h3>
      <img className="about-card-image" src={imageSrc} alt="About" />
      <p className="about-card-detail">{detail}
        <br />
        <a className='about-card-detail' target='_blank' href={link}>
          {linktext} <strong className='link'>{refer}</strong></a>
      </p>
      
    </div>
  );
}

export default AboutCard;
