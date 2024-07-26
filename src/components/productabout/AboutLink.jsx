import React from "react";

const AboutLink = ({ title, imageSrc, detail, link, linktext }) => {
    return (
        <div className="about-card">
            <a target='_blank' href={link}><img src={imageSrc} alt={title} className={detail} /></a>
        </div>
    );
}

export default AboutLink;
