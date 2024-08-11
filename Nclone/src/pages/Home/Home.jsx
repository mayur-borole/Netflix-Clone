import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';

import homebg from '../../assets/homebg.jpg';
import playicon from '../../assets/playicon.png';
import moreinfo from '../../assets/moreinfo.png';
import Titlecard from '../../components/Titlecard/Titlecard';
import Mayur from './Mayur';


const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <div className='background'>
        <img src={homebg} alt='' className='homebg' />
<div className='btns'>
<button className='button'><img src={playicon} alt=''className='playicon'/>play</button>
        <button className='buttonn'><img src={moreinfo} alt=''className='moreinfo'/> </button>
    
</div>
          <Titlecard/>
        </div>
        <Mayur/>
      </div>
      
  )
}

export default Home
