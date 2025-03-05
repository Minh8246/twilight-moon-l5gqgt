import React from 'react'
import NavBar from '../../Components/Navigation'
import Intro from './intro'
import Activities from './activities'
import Sell from './Sell'
import About from './about'
import SomeCompany from './someCompany'
import Footer from '../../Components/Footer'
import FooterComponent from '../../Components/Footer'
const Home = () => {
  return (
    <>
      <NavBar />
      <img
        style={{width: '100%'}}
        src={require('../../Images/banner.jpg')}
        alt="logo"
      ></img>
      <Intro />
      <Activities />
      <Sell />
      <About />

      <SomeCompany />
      <FooterComponent />
    </>
  )
}
export default Home
