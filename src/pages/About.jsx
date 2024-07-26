// about.js
import React from 'react';
import AboutCard from '../components/productabout/ABoutCard';
import AboutLink from '../components/productabout/AboutLink';
import '../assets/styles/About.css';



import eggImage from '../assets/images/pages/gf11.gif'
import professorImage from '../assets/images/pages/gf2.gif'
import pokeImage from '../assets/images/pages/gf33.gif'

import dex from '../assets/images/pages/ds2.png'
import okx from '../assets/images/pages/OKX.png'
import lmnft from '../assets/images/pages/lmnft.png'
import me from '../assets/images/pages/ME.png'
import bird from '../assets/images/pages/bird.png'



const About = () => {
  return (
    <div className="about-container" id='about' >
      <h2  className="about-title">Key steps to glory!</h2>
      <h4 className='about-subtitle'>Start your Pokegochi journey today by following
       these simple steps and unlock a world of adventure with your digital companions!</h4>
      <div className="about-card-container"  >
        <AboutCard 
          title="Buy $EGG!" 
          imageSrc= {eggImage}
          detail="All Pokegochi start out as baby eggs
                  They’re Solana Tokens.  
                  Mint Auth: Revoked.
                  It's bearing no tax."
          link= 'https://birdeye.so/token/AdCGtgNbPedrewvPfP8XoRAgGWns39QqQXBVZqGfWE3w?chain=solana'
          linktext='Acquire pokegochi eggs'
          refer='HERE!'
        />
        <AboutCard 
          title="Hatch your eggs" 
          imageSrc={professorImage}
          detail="After acquiring Pokegochi Eggs, head to the Pokegochi 
            Hatching machine. Utilize $SOL Tokens to hatch your Eggs"
          link='https://tinyurl.com/HatchPokegochi'
          linktext='Go to Mint'
          refer='NOW!'
        />
        <AboutCard 
          title="Evolve N' Battle!" 
          imageSrc={pokeImage}
          detail="
          Explore Pokegochi's evolving stages: Hatchlings, Babies, and Adults.   
          Level up your Pokegochi using $XP tokens earned through"
          link='https://t.me/Pokegochi'
          linktext='Battling on '
          refer='TELEGRAM!' 
        />
      </div>
      <h4 id='buy' className='about-subtitle fix'>Explore our platforms now to acquire Pokegochi Eggs and unleash your 
        digital companions. Don't miss out on the excitement <br /> – hatch your Pokegochi today!</h4>
      <div className='about-links-container' >
        <AboutLink detail="link-card-image dx" link='https://dexscreener.com/solana/f9tt37vhalzguzxebuqrsigplfqafmnhdkhedcpm7ftp' imageSrc={dex}/>
        <AboutLink detail="link-card-image brd" link='https://birdeye.so/token/AdCGtgNbPedrewvPfP8XoRAgGWns39QqQXBVZqGfWE3w?chain=solana' imageSrc={bird}/>
        <AboutLink detail="link-card-image" link='https://www.okx.com/web3/marketplace/nft/collection/sol/pokegochi-1' imageSrc={okx}/>
        <AboutLink detail="link-card-image" link='https://tinyurl.com/HatchPokegochi' imageSrc={lmnft}/>
        <AboutLink detail="link-card-image" link='https://magiceden.io/marketplace/pokegochi_gen_i' imageSrc={me}/>
      </div>
      <h4 className='about-subtitle fix'>$EGG Supplies Are Limited!</h4>
    </div>
  );
}

export default About;
