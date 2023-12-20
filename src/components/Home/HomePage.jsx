import React from 'react'
import { Navbar } from '../navbar/Navbar';
import "./home.css"
import CustomerStats from '../customer-stats/CustomerStats';
const HomePage = () => {
  return (
    <div className='home'>
      <Navbar/>
      <CustomerStats/>
    </div>
  )
}

export default HomePage;