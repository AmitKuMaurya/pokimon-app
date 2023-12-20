import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import {Routes, Route} from "react-router-dom";
import { Navbar } from '../navbar/Navbar';
import CustomerStats from '../customer-stats/CustomerStats';
import CustomerTable from '../table/CustomerTable';
import Dashboard from '../Dashboard/Dashboard';
import "../Home/home.css"
const AllRoute = () => {
  return (
    <>
    <Sidebar/>
    <div className='home'>
      <Navbar/>
      <CustomerStats/>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/customers"} element={<CustomerTable />} />
        </Routes>
    </div>
    {/* <Navbar/>
    <CustomerStats/> */}
    </>
  )
}

export default AllRoute