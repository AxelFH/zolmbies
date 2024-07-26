import React from 'react';


const CreatureCard = ({ name, description, imageSrc }) => {
  return (
    <div className="creature-card">
      <img src={imageSrc} alt={'Pokegochi'} />
    </div>
  );
}


export default CreatureCard;