import React from 'react';


const OverviewLink = ({ text, href }) => {
  return (
    <a target='_blank' href={href} className="link-btn">{text}</a>
  );
}

export default OverviewLink;