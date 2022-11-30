import React from 'react'
import './style.css'
import { motion } from 'framer-motion';
import { RWebShare } from "react-web-share";


const Home = () => {
  return (
    <div className='mainHead'>
    <h1 className='heading'>
        The World's Fastest Growing<br/><span style={{marginLeft:"15vw"}}>Crypto App</span>
    </h1>
    <div>
        <ul className='contents'>
          <li>Join<span> 50m+</span> users buying and selling <span>250+ cryptocurrencies at true cost</span></li>
            <li>Spend with the Crypto.com Visa Card and <span>get up to 5%</span> back</li>
            <li>Grow your portfolio by<span>receiving rewards up to 14.5%</span>  on your crypto assets</li>
        </ul>
        
        <div className='space'>
        <div className='app'>
        <a href="https://apps.apple.com/us/app/id1262148500">
            <div className='download'>
                Download on the<br/>
                 <span className='inLine'>App Store</span>
                
            </div>
            </a>
            <a href="https://apps.apple.com/us/app/id1262148500">
            <div className='download'>
                GET IT ON<br/>
                <span className='inLine'>Google Play</span>
            </div>
            </a>

        </div>
        </div>
    </div>
    <div >
        <motion.img className="phone"
          initial={{ x: -30 , y:-10}}
          animate={{ x: 30,y:10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1,
            repeat: Infinity,
          }}

        src="https://crypto.com/static/4a98bd03290e8a209151cc1e56056594/ff3b2/buy-and-sell.png"/>
    </div>

    <ul className='container' id='complete'>
                   <li><a href='/coins' className='btn'>Dashboard</a></li>
                 <li>
                    <RWebShare
            data={{
              text: "Checkout my crypto tracker made using React!",
              url: "https://my-cryptotracker.com",
              title: "Crypto Tracker",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <button className="searching">Share</button>
          </RWebShare>
          </li>
                   </ul>
    </div>
  )
}

export default Home
