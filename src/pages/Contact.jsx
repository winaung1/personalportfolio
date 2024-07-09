import React from 'react'
import { ContactForm } from '../components/ContactForm'

export const Contact = () => {
  return (
    <div className=' px-4 h-screen'>
        <h1 className='text-7xl opacity-80 py-4'>Get Started</h1>
        {/* <p className='opacity-60 w-full md:w-1/2 mx-auto'>Contact me either way. I don't want to make a form contact. Just copy either the email or phone number. I'll get back to you.</p> */}
        {/* <div className='bg-[#2b2d2d] flex flex-col items-center justify-center rounded h-80 my-4'>
            <h1 className='py-2 opacity-60'>Email</h1>
            <p className='opacity-80 text-2xl'>Winagencydesigns@gmail.com</p>

            <h1 className='py-2 opacity-60'>Phone</h1>
            <p className='opacity-80 text-2xl'>801-918-1587</p>
        </div> */}
        <ContactForm/>
    </div>
  )
}
