import React, { useState } from 'react';
import CreatureCard from './CreatureCard';
import CreatureModal from './CreatureModal'; // Importa el componente modal

const CreatureGallery = ({ creatures }) => {
  const [selectedCreature, setSelectedCreature] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = (creature) => {
    setSelectedCreature(creature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="creature-gallery">
      {creatures.map((creature, index) => (
        <div key={index}> {}
          <CreatureCard
            imageSrc={creature.imageSrc}
          />
        </div>
      ))}

    </div>
  );
}

export default CreatureGallery;
