import React from 'react'
import { Title } from './Title'

export const Plans = () => {
    const pricing = [
        {
          id: 1,
          title: 'Basic',
          price: '199',
          description: 'Perfect for getting started with essential features.',
          list: [
            'Logo Design',
            'Responsive Layout',
            '24-Hour Delivery',
            '2 Pages',
            '2 Revisions',
            'Figma Files',
            'Source Code',
            '$40/Monthly Developer Fees',
          ],
        },
        {
          id: 2,
          title: 'Standard',
          price: '499',
          description: 'Ideal for businesses looking to establish a solid online presence.',
          list: [
            'Logo Design',
            'Responsive Layout',
            '7-Day Delivery',
            '4 Pages',
            '5 Revisions',
            'Figma Files',
            'Source Code',
            'Hosting',
            'Domain Registration',
            '1 Month Free Support',
            'One-time Payment'
          ],
        },
        {
          id: 3,
          title: 'Premium',
          price: '2499',
          description: 'Comprehensive package with extended support and flexible payment options.',
          list: [
            'Logo Design',
            'Responsive Layout',
            '14-Day Delivery',
            '6-7 Pages',
            '7 Revisions',
            'Figma Files',
            'Source Code',
            '6 Months Free Support',
            'Hosting',
            'Domain Registration',
            '3 Installment Payments',
          ],
        },
      ];
      
  return (
    <div className="my-20 px-4">
      <Title title={"Our pricing."} />
      <p className='opacity-60 py-2 pb-4'>We are with full transparency, if we agreed on the right price from the start our work will be smooth.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {pricing.map((price) => (
          <div data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="300"
          data-aos-duration="300"
          data-aos-easing="ease-in-out" className={price.id === 2 ? "pricing-gradient border border-[#3d3d3d] rounded-xl px-4 py-2 h-fit" : "border h-fit border-[#3d3d3d] rounded-xl px-4 py-2"}>
            <h1 className='text-orange-400'>{price.title}</h1>
            <p className='py-4 text-4xl'>${price.price}</p>
            <div className="">
            <p className='opacity-60'>{price.description}</p>
              {price.list.map((list) => (
                <li className="opacity-60 py-1">{list}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
