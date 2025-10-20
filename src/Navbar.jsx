import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar({ loadAnimations }) {
  const [selected, setSelected] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const navList = ['Home', 'About', 'Classes', 'Trainers', 'Pricing', 'Contact'];

  return (
    <nav className='md:h-20 h-16 bg-[#1E293B] text-white p-container flex items-center justify-between'>
      <div className={`${loadAnimations ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'} duration-700 ease-out`}>
        <Link 
          to={'/'}
          className='lg:text-[2rem] md:text-[1.8rem] text-[1.6rem]'
        >
          FitCore
        </Link>
      </div>

      {/* Medium+ devices */}
      <ul className={`hidden md:flex items-center lg:space-x-6 space-x-4
        ${loadAnimations ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} duration-700 ease-out`
      }>
        {navList.map((el, id) => (
          <li key={id}>
            <Link 
              to={`${el === 'Home' ? '/' : ''}`} 
              href="#" className='nav-btn'
            >
              {el}
            </Link>
          </li>
        ))}
      </ul>

      {/* Medium- devices ADD ANIMATED ICON TO LIST */}
      <div className='md:hidden relative z-50'>
        <button className='lg:text-[1.05rem] md:text-[1rem] text-[0.9rem] nav-btn flex items-center gap-4 group'
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected} 
          <div className='h-0 w-0 border-r-8 border-l-8 border-t-8 group-hover:border-t-[#22C55E]  
            border-r-transparent border-l-transparent border-t-white duration-200'
          >
          </div>
        </button>
        {isOpen && 
          <div className='absolute top-full w-full flex flex-col'>
            {navList.map((el, id) => (
              <Link 
                value={el} 
                key={id}
                className='dropdown-item text-center nav-btn lg:text-[1.05rem] md:text-[1rem] text-[0.95rem] py-2'
                style={{ animationDelay: `${id * 0.1}s` }}
                onClick={() => {
                  setSelected(el);
                  setIsOpen(!isOpen);
                }}
              >
                {el}
              </Link>
            ))}
          </div>
        }
      </div>
      <div>
        <Link
          to={'/signin'}
          href="#"
          className={`inline-flex text-[#00C853] hover:text-[#00ff6a] lg:text-[1.05rem] md:text-[1rem] text-[0.95rem] hover:duration-200
            ${loadAnimations ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} duration-700 ease-out`}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  )
}
