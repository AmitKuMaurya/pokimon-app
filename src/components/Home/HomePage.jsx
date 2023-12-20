import React from 'react'
import { Navbar } from '../navbar/Navbar';
import "./home.css"
import CustomerStats from '../customer-stats/CustomerStats';
import CustomerTable from '../table/CustomerTable';
const HomePage = () => {
  return (
    <div className='home'>
      <Navbar/>
      <CustomerStats/>
      <CustomerTable/>
    </div>
  )
}

export default HomePage;