import React from 'react';
import OverviewImage from '../components/productoverview/OverviewImage';
import OverviewInfo from '../components/productoverview/OverviewInfo';

import '../assets/styles/Overview.css'


const Overview = () => {
  return (
    <div className="overview-container">
        <OverviewImage imageUrl={''} />
        <OverviewInfo title="Witness the Pokegochi Magic" 
            description="Experience the thrill as Pokegochi Eggs hatch
                         into vibrant companions, ready to join you on your adventures.
                         Transactions within our ecosystem are seamlessly powered by Solana's 
                         lightning-fast blockchain. Your assets are safeguarded against manipulation
                         or fraud, ensuring a secure and efficient experience.
                        Join us and immerse yourself in the enchanting world of Pokegochi. 
                        Start your journey now and watch the magic unfold!" 
        />
    </div>
  );
}

export default Overview;