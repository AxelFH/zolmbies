import React from 'react';


const OverviewImage = ({ imageUrl }) => {
  return (
    <div className="overview-image-container">
      <img src={imageUrl} alt="GIF" />
    </div>
  );
}

export default OverviewImage;