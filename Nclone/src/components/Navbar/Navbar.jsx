import React from 'react'
import './Navbar.css'
import logo from '../../assets/netflix.png'
import searchicon from '../../assets/searchicon.jpeg'
import bell from '../../assets/vector-bell-icon.jpg'
import profile from '../../assets/profileicon.jpg'

import dropdown from '../../assets/dropdown.jpg'


const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='left-Navbar'>
        <img src={logo} alt='' className='logo'/>
      </div>
      <ul className='ul'>
        <li>Home</li>
        <li>Movies</li>
        <li>TV </li>
        <li>My Choise</li>
        <li>New and popular</li>
        <li>browse my language</li>
      </ul>
      <div className='Right-Navbar'>
      <img src={searchicon} alt=''className='searchicon'/>
      <div className='clildren'>
          clildren
        </div>
      <img src={bell} alt=''className='bell' />

      <div>
      
      <img src={profile} alt='' className='profile'/>
      <img src={dropdown} alt='' className='dropdown'/>
      </div>
      </div>
      
    </div>
  )
}

export default Navbar
