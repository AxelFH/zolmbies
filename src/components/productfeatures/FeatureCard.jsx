import React from 'react';


const FeatureCard = ({ title, description, imageSrc }) => {
  return (
    <div className="feature-card feature"  >
      <h2 className='feature-title'>{title}</h2>
      <div className="card-content">
        <img src={imageSrc} alt="Feature Image" />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
