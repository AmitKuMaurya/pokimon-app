import React from 'react'
import { Navbar } from '../navbar/Navbar';
import CustomerStats from '../customer-stats/CustomerStats';
import "./home.css"

const HomePage = () => {
  return (
    <div className='home'>
      <Navbar/>
      <CustomerStats/>
    </div>
  )
}

export default HomePage;