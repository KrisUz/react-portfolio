import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img/me.jpg'
import HeaderSocial from './headerSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>The Author</h1>
        <h5 className="text-light"> A Software Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me"> 
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )

}

export default Header