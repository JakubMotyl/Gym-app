import React, { useEffect, useRef, useState } from 'react'
import { pricingData } from '../data/pricingData';

const GridCard = (props) => {
  const { name, monthly_price, yearly_price, monthly_sub, yearly_sub, percs, isBilledYearly} = props;
  return (
    <div className='h-[70vh] relative  mx-auto aspect-[4/5] w-full bg-black p-10
      flex flex-col justify-between rounded-[0.25rem] hover:-translate-y-4 transition transform-gpu duration-200'
    >
      {/* BEST OFFER  -> PREMIUM */}
      {
        name === 'Premium Package'
        ? (
          <div className='ribbon'>
            Best Offer
          </div>
        ) : ''
      }

      {/* Pricing Card Content */}
      <p className='text-[#00C853] text-[1.25rem] font-medium leading-none'>{name}</p>
      <div className='flex flex-col space-y-0.5'>
        <p className='text-white text-[2.75rem] font-bold leading-none'>
          ${isBilledYearly ? yearly_price : monthly_price}
        </p>
        <span className='text-gray-300 text-[0.8rem] leading-none'>
          {isBilledYearly ? yearly_sub : monthly_sub}
        </span>
      </div>
      <ul className='flex flex-col space-y-0.5'>
        {percs.map(item => (
          <li 
            key={item.id}
            className='text-white flex items-center gap-4'  
          >
            <i className="fa-solid fa-circle-check"></i>
            {item.perc}
          </li>
        ))}
      </ul>
      <a 
        href="#"
        className='inline-flex justify-center bg-[#00C853] py-3 px-6 md:text-[1.25rem] font-light text-white
        rounded-[0.25rem] hover:bg-[#00c853]/80 duration-200 border border-[#00C853] w-full transition'
      >
        Register Now
      </a>
    </div>
  )
}

export default function Pricing() {
  const [isBilledYearly, setIsBilledYearly] = useState(false);
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.2}
    );

    if (animationRef.current) observer.observe(animationRef.current)

    return () => {
      if (animationRef.current) observer.unobserve(animationRef.current);
    }
  }, []);

  return (
    <section 
      ref={animationRef}
      className={`p-container min-h-[100vh] md:py-24 py-20 flex flex-col  space-y-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-1000`}
    >
      <div className='flex flex-col space-y-3 text-center'>
        <p className='md:text-[1.25rem] text-[1rem] tracking-[0.3rem] text-white'>PRICING</p>
        <span className='lg:text-[2.5rem] md:text-[2rem] text-[1.75rem] font-bold  text-[#00C853] leading-[1.25]'>
          Affordable Pricing Plans
        </span>
      </div>
      <div className='p-3 bg-white w-fit rounded-[0.25rem] mx-auto flex items-center gap-3'>
        <button
          className={`font-medium rounded-[0.25rem] cursor-pointer py-3 px-6
            ${isBilledYearly ? 'bg-white text-black' : 'bg-black text-white'}`}
          onClick={() => setIsBilledYearly(false)}
        >
          Billed Monthly
        </button>
        <button
          className={`font-medium rounded-[0.25rem] cursor-pointer py-3 px-6
            ${isBilledYearly ? 'bg-black text-white' : 'bg-white text-black'}`}
          onClick={() => setIsBilledYearly(true)}
        >
          Billed Yearly
        </button>
      </div>
      <div className='flex-1 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-12 justify-items-center'>
        {pricingData.map((price, id) => (
          <GridCard
            key={id}
            {... price}
            isBilledYearly={isBilledYearly}
          />
        ))}
      </div>
    </section>
  )
}
