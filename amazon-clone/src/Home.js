import React from 'react'
import "./Home.css"
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            <div className='home__row'>
                <Product title="Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate, and Create Successful Businesses (Lean Guides with Scrum, Sprint, Kanban, DSDM, XP & Crystal)" price="250" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                  rating={5}/>
                <Product title="Fire-Boltt Ninja Call Pro Smart Watch Dual Chip Bluetooth Calling, 1.69 Display, AI Voice Assistance with 100 Sports Modes, with SpO2 & Heart Rate Monitoring (Black)" price="1500" 
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_758X608_1._SY608_CB614835787_.jpg" rating={3}/>
           

            </div>
            <div className='home__row'>
            <Product title="Yonex GR 303 Aluminium Blend Badminton Racquet with Full Cover, Set of 2 (Yellow/Yellow)" price="981" 
                image="https://m.media-amazon.com/images/I/71jjiWS7jyL._AC_UL800_FMwebp_QL65_.jpg" rating={1}/>
            <Product title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price="5400" 
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" rating={2}/>
            <Product title="Amazon Brand - Presto! Oxo-Biodegradable Garbage Bags, Medium -(19 x 21 inches) - 30 bags/roll (Pack of 6, Black)" price="400" 
                image="https://m.media-amazon.com/images/I/71hP1JEHDFL._SL1500_.jpg" rating={2}/>

                
            </div>
            <div className='home__row'>
            <Product title="Westinghouse 106 cm (43 inches) Full HD Smart Certified Android LED TV WH43SP99 (Black)" price="15000" 
                image="https://m.media-amazon.com/images/I/71S-WpFnW+L._SL1500_.jpg" rating={4}/>
            

                
            </div>
        </div>
    </div>
  )
}

export default Home;