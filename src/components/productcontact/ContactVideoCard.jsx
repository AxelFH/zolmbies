import React from 'react';


const VideoCard = ({ videoSrc, linkText, linkHref, className }) => {
  return (
    <div className={className}>
      <video src={videoSrc} controls></video>
      <a className='c-link' target='_blank' href={linkHref}>{linkText}</a>
    </div>
  );
}

export default VideoCard;
