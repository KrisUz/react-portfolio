import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Reviews from './components/reviews/Reviews'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Home />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Reviews />
      <Footer />
    </>
  )
}

export default App