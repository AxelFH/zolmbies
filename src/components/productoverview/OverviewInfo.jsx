import React from 'react';
import OverviewLink from './OverviewLink';


const OverviewInfo = ({ title, description }) => {
  return (
    <div className="overview-text-container">
      <h2 className='title' >{title}</h2>
      <p className='desc'>{description}</p>
      <OverviewLink href={'https://tinyurl.com/HatchPokegochi'} text="They're just a click away!" />
    </div>
  );
}

export default OverviewInfo;