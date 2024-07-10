import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export const ProjectCard = ({setDisplayText, date, img1, img2, img3, header, description, description2, role, deliverables, company, site}) => {
  return (
    <div className="lg:flex lg:space-x-8 py-8 ">
        <div className="lg:sticky top-10 h-fit lg:w-[70%]">
            <div className='bg-[#2b2d2d] w-fit p-1 px-2 mb-2 rounded-full'>{date}</div>
            <h1 className='text-4xl pb-2'>{header}</h1>
            <p className="text-lg opacity-60 pb-2">{description}</p>
            <p className='text-lg opacity-60'>
            {description2}
            </p>
            <div className='py-10'>
                <div className='border-b mb-6 pb-2 border-[#2b2d2d] flex justify-between items-center'>
                    <p className='opacity-60'>Role</p>
                    <p>{role}</p>
                </div>
                <div className='border-b mb-6 pb-2 border-gray-800 flex justify-between items-center'>
                    <p className='opacity-60'>Company</p>
                    <p>{company}</p>
                </div>
                <a onMouseOver={() => setDisplayText('Visit Website')} rel='noreferrer' href={site} target='_blank' className='border-b mb-6 pb-2 border-gray-800 flex justify-between items-center'>
                    <p className='opacity-60'>Site</p>
                    <FaArrowRight/>
                </a>
            </div>
        </div>
        <div data-aos="zoom-in"
     data-aos-offset="300"
    //  data-aos-delay="300"
    //  data-aos-duration="300"
     data-aos-easing="ease-in-sine" className='lg:w-3/4'>
            <img src={img1} alt="" />
            <img className='my-4' src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
      </div>
  )
}
