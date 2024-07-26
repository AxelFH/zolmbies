import React from 'react';
import ContactTitle from '../components/productcontact/ContactTitle';
import ContactCard from '../components/productcontact/ContactCard';

import '../assets/styles/Contact.css'
import telegram from '../assets/images/icons/telegrama.png';
import x from '../assets/images/icons/x.png';
import blog from '../assets/images/icons/blog.png';
import discord from '../assets/images/icons/egg_hatching.gif';


const Contact = () => {
  return (
    <div className="contact" id='more'>
      <ContactTitle  
      text="Do you have what it takes to be the next Pokegochi legend?" />
      <div className="contact-card-container">
        <ContactCard className={'contact-card-component focus'} imageSrc={discord} linkText="MINT" linkHref="https://tinyurl.com/HatchPokegochi" />
        <ContactCard className={'contact-card-component altercard'} imageSrc={telegram} linkText="Telegram" linkHref="https://t.me/Pokegochi" />
        <ContactCard className={'contact-card-component'} imageSrc={x} linkText="X/Twitter" linkHref="https://twitter.com/PokegochiSOL" />
        <ContactCard className={'contact-card-component altercard'} imageSrc={blog }linkText="Whitepaper" linkHref="https://whitepaper.pokegochi.io/" />
      </div>
    </div>
  );
}

export default Contact;