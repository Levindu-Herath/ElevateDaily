import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/log01.png'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <Link to='/' className='nav__logo'>
          <img src={Logo} alt='logo' />
        </Link>
        <ul className='nav__menu'>
          <li><Link to="">Ernest Achiever</Link></li>
          <li><Link to="">Create Post</Link></li>
          <li><Link to="">Authors</Link></li>
          <li><Link to="">Logout</Link></li>
        </ul>
        <button className='nav__toggle-btn'>
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  )
}

export default Header