import React from 'react'

export default function Footer() {
  const footerIcons = [
    <i className="fa-brands fa-facebook-f"></i>,
    <i className="fa-brands fa-x-twitter"></i>,
    <i className="fa-brands fa-instagram"></i>,
    <i className="fa-brands fa-linkedin-in"></i>,
    <i className="fa-brands fa-youtube"></i>
  ]

  const footerLinks = [
    {
    title: 'Company',
    links: [
      'Home', 'About us', 'Classes', 'Trainers', 'Pricing'
      ]
    },
    {
    title: 'Category',
    links: [
      'Strength Training', 'Body Building', 'Weight Loss', 'Basic yoga', 'Physical Fitness'
      ]
    },
    {
    title: 'Contact Us',
    links: [
      {icon: <i className="fa-solid fa-phone"></i>, text: '+1 269-537-1744'},
      {icon: <i className="fa-solid fa-envelope"></i>, text: 'Info@fitcore.com'},
      {icon: <i className="fa-solid fa-location-dot"></i>, text: '3033 Golf Avenue, Michigan, Grand Rapids, USA'}
    ]
    }
  ]

  return (
    <footer className='p-container md:pt-12 md:pb-6 pt-10 pb-3 bg-[#1E293B] flex flex-col space-y-6'>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-12'>
        {/* First Column */}
        <div className='flex flex-col space-y-5'>
          <p className='footer-title'>FitCore</p>
          <span className='footer-sub '>
            A gym, also known as a fitness center or health club, is a facility to physical fitness and
            exercise gyms and typically after a range.
          </span>
          <ul className='flex flex-wrap items-center gap-4'>
            {footerIcons.map((icon, id) => (
              <li 
                key={id}
                className='train-socials bg-transparent border border-white text-white'  
              >
                <a href="#">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Second, third and forth column */}
        {footerLinks.map((item, id) => (
          <div key={id} className='flex flex-col space-y-5'>
            <p className='footer-title'>{item.title}</p>
            <ul className='flex flex-col space-y-1.5'>
              {item.links.map((link, id) => (
                <li key={id}>
                  {link.icon ? (
                    <div className='flex items-center gap-3'>
                      <span className='footer-sub '>{link.icon}</span>
                      <p className='footer-sub '>{link.text}</p>
                    </div>
                  )
                  : <a href="#">
                      <p className='footer-sub'>{link}</p>
                    </a>
                  }
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Divider */}
      <div className='bg-gray-500 w-full h-[2px] rounded'></div>

      {/* Copyright */}
      <div className='flex items-center justify-between'>
        <span className='footer-sub'>Copyright © 2025 FitCore</span>
        <div className='flex items-center gap-1'>
          <a href="#"
            className='footer-sub'  
          >
            Terms Of Use
          </a>
          <span className='text-gray-300 font-light'>|</span>
          <a href="#"
            className='footer-sub' 
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
    )
}
