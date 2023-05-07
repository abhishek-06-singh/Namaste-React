import React from 'react'
import './header.css'
import Logo from './logo.png'

const Header = () => {
  return (
    <div className='nav'>
            <img src={Logo} className='logo' alt="" />
            <input 
            className="searchbar"
            type="text" 
            placeholder='Search Restaurants'/>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Services
                </li>
            </ul>
    </div>
  )
}

export default Header