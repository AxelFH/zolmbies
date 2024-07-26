import React from 'react';
import bgImage from '../../assets/images/bgm.png'; // Ajusta la ruta a la imagen de fondo
import charImage from '../../assets/images/char.png'; // Ajusta la ruta a la imagen del personaje

const ProfessorSection = () => {
    return (
        <div className="professor-section">
            <img 
                className="character-image" 
                src={charImage} 
                alt="Personaje"
            />
            <div className="text-container">
                <h1>Join the Undead Revolution</h1>
                <h3>Welcome to the world of Zolmbies!</h3>
            </div>
        </div>
    );
};

export default ProfessorSection;
