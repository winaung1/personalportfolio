import React from 'react'
import logo from '../assets/Black_and_White_Minimalist_Wedding_Monogram_Logo__1_-removebg-preview.png'
import { CiMenuFries } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
export const Navbar = () => {
  return (
    <div className='max-w-7xl mx-auto flex items-center justify-between pr-6'>
        <img className='w-40 h-24 cursor-pointer' src={logo} alt="" />
        <ul className='hidden md:flex items-center space-x-8 opacity-80'>
            <li>Work</li>
            <li>Blog</li>
        </ul>
        <CiMenuFries className='md:hidden text-2xl cursor-pointer'/>
        <div className='hover:bg-white transition-all cursor-pointer duration-300 ease-in-out hover:text-black hidden md:flex items-center space-x-2 bg-gray-600/30 p-2 px-4 rounded-full'>
            <p>LET'S TALK</p>
            <MdArrowOutward className='bg-green-300 text-black p-2 text-4xl rounded-full'/>
        </div>
    </div>
  )
}
