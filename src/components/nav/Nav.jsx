
import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaProjectDiagram } from 'react-icons/fa'
import { GrWorkshop } from 'react-icons/gr'
import { GrBusinessService } from 'react-icons/gr'
import { GrContactInfo } from 'react-icons/gr'

const Nav = () => {
  return (
    <nav>
          <a href="#home"><FaHome/></a>
          <a href="#porfolio"><FaProjectDiagram/></a>
          <a href="#experience"><GrWorkshop /></a>
          <a href="#services"><GrBusinessService/></a>
          <a href="#contact"><GrContactInfo/></a>

    </nav>
  )
}

export default Nav