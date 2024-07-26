import React from 'react';
import ProductInfoCard from '../components/productinfo/ProductInfoCard';
import ProductInfoLink from '../components/productinfo/ProductInfoLink';
import ProductImage from '../components/productinfo/ProductImage';

import '../assets/styles/Info.css';
import pokegochi from '../assets/images/pages/screen.png';


const ProductInfo = () => {
  return (
    <div className="info">
      <div className="info-container">
        <ProductInfoCard
          title="Memecoin + Gaming NFT!"
        />
        <ProductInfoLink link="#about" />

      </div>
      <div className="image-container">
        <ProductImage imageUrl={pokegochi} />
      </div>
    </div>
  );
}

export default ProductInfo;
