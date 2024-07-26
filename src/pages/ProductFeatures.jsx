import React from 'react';

import FeatureCard from '../components/productfeatures/FeatureCard';
import '../assets/styles/Features.css'
import card1 from '../assets/images/pages/Egg_1.png'
import card2 from '../assets/images/pages/Baby17_5.png'
import card3 from '../assets/images/pages/Char0020.png'


const Features = () => {
  return (
    <div className="features-view" >
      <div className="text-section" id='features'>
        <h2 className="f-title" >Explore the Pokegochi experience on SOL!!</h2>
        <p> Pokegochi are digital creatures that live on the Solana Blockchain. 
            Experience a new level of transparency, security, and interactivity as you embark on your 
            journey with your digital companions.</p>
      </div>
      <div className="card-container">
        <FeatureCard
          title="Pokegochi Eggs: Your Key to Adventure"
          description="Unlock the world of Pokegochi with these rare and secure tokens. 
                        Each Egg holds the potential for a unique companion, starting your journey with 
                        authenticity and excitement. Don't miss out the hidden eggs..."
          imageSrc={card1}
        />
        <FeatureCard
          title="Secure Transactions"
          description="Experience seamless transactions on the Solana blockchain. Our platform empowers you
                       to effortlessly buy, sell, or exchange Pokegochi and items with unmatched speed and security."
          imageSrc={card2}
        />
        <FeatureCard
          title="Pokegochi XP: Level Up Your Journey"
          description="Fuel your Pokegochi's journey with $XP. Seamlessly earned through battles on Telegram, 
          $XP unlocks new abilities and potentials for your companion. With transparent reporting and token 
          integrity, $XP ensures a reliable path to success."
          imageSrc={card3}
        />
      </div>
    </div>
  );
}

export default Features;
