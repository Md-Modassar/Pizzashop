import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <div className='contact-form'>
        <img src='img1.jpg' alt='' className='imgcon'/>
        <div className='contact'>
            <h1 className='con-h'>Contact me</h1>
            <div className='contactext'>
            <label >full name</label>
            <input type='text' placeholder='Enter Your Name ' className='input'/>
            <label>Email</label>
            <input type='email' placeholder='Enter Your Email ' className='input' />
            <label>Message</label>
            <input type='email' placeholder='Enter Your Message ' className='input' />
            <button className='conbtn'>SEND</button>
            </div>


        </div>
    </div>
  )
}

export default Contact