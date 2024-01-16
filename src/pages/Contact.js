import React from 'react';
import contactImage from '../assets/contact.jpg';


function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage:`url(${contactImage})` }}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>

        <form></form>
      </div>
    </div>
  )
}

export default Contact
