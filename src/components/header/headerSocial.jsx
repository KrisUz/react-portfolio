
import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'


const headerSocial = () => {
  return (
    <div className='header__Social'>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
    </div>
  )
}

export default headerSocial