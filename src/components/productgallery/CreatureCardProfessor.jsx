import React from 'react';


const CreatureCardProfessor = ({ name, description, imageSrc }) => {
  return (
    <div className="creature-card professor">
      <img src={imageSrc} alt={'Pokegochi'} />
      <h3>Hi there! I am the professor</h3>
      <p>These are some of our Pokegochi</p>
    </div>
  );
}


export default CreatureCardProfessor;