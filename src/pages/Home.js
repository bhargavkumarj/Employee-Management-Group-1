import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/Banner-image.jpg'
import '../styles/Home.css';


function Home()
 {
    
  return (
    <div className='home' style={{ backgroundImage:`url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Employee Management System</h1>
        <p>Welcome</p>
        <Link to="/menu">
        <button>Add Employee</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
