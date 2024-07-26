import React from 'react';

const ProductInfoCard = ({ title, description, text1, text2 }) => {
  return (
    <div className="product-info-card">
      <h2>{title}</h2>
      <div className="info-text-container">
        <div className="info-text">
          <h4 className='mini-title'>For the Degens</h4>
          <p className='mini-list'>
            - Deflationary $EGG <br/> <br/>
            - 25% of supply burned for liquidity pool<br/> <br/> 
            - Mint auth revoked<br/> <br/>
            - No buy/sell taxes 
          </p>
        </div>
        <div className="info-text">
          <h4 className='mini-title'>For NFT Enjoyers</h4>
          <p className='mini-list'>
            - Hatch eggs to Mint Pokegochi <br/> <br/>
            - Win $XP IDLY by Battling with Pokegochi NFT's held in wallet <br/> <br/>
            - Use $XP to evolve Pokegochi and win more battles or sell #XP in the market
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoCard;
