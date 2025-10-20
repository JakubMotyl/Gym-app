import React, { useEffect, useRef, useState } from 'react'
import advertImage from '../assets/advertisement-2.jpg'

export default function Advertisement() {
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

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) observer.unobserve(animationRef.current);
    };
  }, [])

  const advertPoints = [
    'Increase Muscle and Strength',
    'Be Healthier than before',
    'Increase Stamina'
  ]

  return (
    <section ref={animationRef} className={`md:h-[100vh] h-fit p-container md:py-24 py-20 flex items-center w-full gap-12
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-1000`}
    >
      <div className='md:flex items-center hidden w-1/2 bg-[#1E293B] bg-no-repeat h-full'>
        <img 
          src={advertImage}
          alt="advert_image"
          className='object-contain' 
        />
      </div>
      <div className='md:w-1/2 w-full flex flex-col md:items-start items-center justify-center gap-8'>
        <h3 className='lg:text-5xl md:text-4xl text-3xl font-bold  text-[#00C853]'>
          Respect Your Body
          <br />
          It's your Greatest
          <br />
          Asset  
        </h3>
        <div>
          {advertPoints.map((adv, index) => (
            <span key={index} className='text-white flex items-center gap-4 lg:text-[1.25rem] md:text-[1.15rem] text-[1.05rem]'>
              <i className="fa-solid fa-circle-check"></i>
              {adv}
            </span>
          ))}
        </div>
        <div className='flex lg:flex-row flex-col items-center gap-4 w-full'>
          <a 
            href="#"
            className='inline-flex justify-center bg-[#00C853] py-3 px-6 md:text-[1.25rem] font-light text-white
            rounded-[0.25rem] hover:bg-[#00c853]/80 hover:duration-200 border border-[#00C853] lg:w-fit w-full'
          >
            Join Now
          </a>
          <button className='border border-[#00C853] bg-transparent font-light text-white rounded-[0.25rem] cursor-pointer py-3 px-6 
            md:text-[1.25rem] hover:-translate-y-1 hover:translate-x-1 duration-200 lg:w-fit w-full'
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  )
}
