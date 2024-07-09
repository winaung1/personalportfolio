import React, { useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { FaCheckDouble } from "react-icons/fa";

export const ContactForm = () => {
  const [sent, setSent] = useState(false)
  const form = useRef();
  const inputMessage = useRef();
  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputEmail = useRef();
  const inputPhone = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_b1flkte","template_8bn17ud", form.current, "RTBwmNPYivvJUlOW6")
    .then((result) => {
      setSent(true)
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

  setTimeout(() => {
    inputEmail.current.value = ''
    inputFirstName.current.value = ''
    inputLastName.current.value = ''
    inputMessage.current.value = ''
    inputPhone.current.value = ''
    setSent(false)
  }, 3000)

  };

  return (
   
<form ref={form} onSubmit={sendEmail}>
  {sent &&
  <div className='fixed top-32 inset-0 mx-auto h-14 z-[40000] bg-green-300 text-green-800 w-1/2 rounded-lg px-4 py-1 flex items-center space-x-4'><FaCheckDouble className='text-green-500'/><p>Your email has been successfully sent!</p></div>
}
    <h1 className='py-2 italic font-bold text-2xl'>Share your idea or <br/> requirement.</h1>
    <p className='pb-14 text-gray-500'>We take 24Hr to get back to you.</p>
  <div class="relative z-0 w-full mb-6 group">
      <textarea ref={inputMessage} type="text" name="message" id="message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">
        <input ref={inputFirstName} type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input ref={inputLastName} type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">
        <input ref={inputPhone} type="tel" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input ref={inputEmail} type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email (Ex. email@gmail.com)</label>
    </div>
  </div>
  <div className='flex items-center space-x-2 my-4'>
  <input className=' text-gray-200' type="checkbox" id="agree" name="fav_language" value="agree"/>
  <label for="agree">I agree to the Terms & Conditions of Winagencydesigns.</label>
  </div>
  <button type="submit" class=" transition-all duration-300 ease-linear flex  gap-2  items-center text-white gradient-background hover:bg-white hover:border-2 hover:border-orange-400 hover:text-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-600 font-medium rounded-full w-fit text-xl sm:w-auto px-5 py-5 text-center ">Send your inquiry<FaArrowRight/></button>
</form>

  )
}