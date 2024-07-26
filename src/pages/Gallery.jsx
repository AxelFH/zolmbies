import React from 'react';
import CreatureGallery from '../components/productgallery/CreatureGallery';
import creatures from '../components/productgallery/Creatures';
import '../assets/styles/Gallery.css'

import CreatureCardProfessor from '../components/productgallery/CreatureCardProfessor';
import profesora from '../assets/images/pages/prof_09.png'


const Gallery = () => {
  return (
    <div className='gallery-container'>
        <h2 className='g-title' >Discover the Pokegochi Universe</h2>
        <CreatureCardProfessor imageSrc={profesora}/>
        <CreatureGallery creatures={creatures} />
        <h2 className='g-title'>And so much more...</h2>
    </div>
  );
}

export default Gallery;
