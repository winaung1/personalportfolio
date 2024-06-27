import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export const ProjectCard = ({date, imgs, header, description, role, deliverables, company, site}) => {
  return (
    <div className="md:flex md:space-x-8 py-20">
        <div className="md:sticky top-10 h-fit md:w-[70%]">
            <h1 className='text-4xl pb-2'>Evoke - Premium Agency/SaaS Website Template</h1>
            <p className="text-lg opacity-60 pb-2">Evoke is a Framer Template made for digital marketing agencies and SaaS businesses. It features multiple pages, and tons of unique sections to help build your new website.</p>
            <p className='text-lg opacity-60'>
            It's built to help you showcase your business's services or products, your past work, and gives your users an easy way to get in touch with you through the Calendly embed.</p>
            <div className='py-10'>
                <div className='border-b mb-6 pb-2 border-gray-800 flex justify-between items-center'>
                    <p className='opacity-60'>Role</p>
                    <p>Web Developer</p>
                </div>
                <div className='border-b mb-6 pb-2 border-gray-800 flex justify-between items-center'>
                    <p className='opacity-60'>Deliverables</p>
                    <p>Web Developer, Web Design, Branding</p>
                </div>
                <div className='border-b mb-6 pb-2 border-gray-800 flex justify-between items-center'>
                    <p className='opacity-60'>Company</p>
                    <p>Premium UI Kits</p>
                </div>
                <div className='border-b mb-6 pb-2 border-gray-800 flex justify-between items-center'>
                    <p className='opacity-60'>Site</p>
                    <FaArrowRight/>
                </div>
            </div>
        </div>
        <div className='md:w-3/4'>
            <img src="https://cdn.dribbble.com/userupload/14912903/file/original-1b407b73eada754f64c373d4506e67af.png?resize=1504x1128&vertical=center" alt="" />
            <img className='my-4' src="https://cdn.dribbble.com/userupload/8788944/file/original-f7d514292a683bffea974d3c4f2fd597.png?resize=2048x11903&vertical=center" alt="" />
            <img src="https://cdn.dribbble.com/userupload/13762642/file/original-87dcd6c29bb6d02f6f42a36441eb2a94.png?resize=2048x1536" alt="" />
        </div>
      </div>
  )
}
