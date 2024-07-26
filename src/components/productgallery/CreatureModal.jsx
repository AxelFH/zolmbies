import React from 'react';

const CreatureModal = ({ creature, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span> {}
        <h2>{creature.name}</h2>
        <p>{creature.description}</p>
      </div>
    </div>
  );
}

export default CreatureModal;
