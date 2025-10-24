import React, { useEffect, useRef, useState } from 'react'
import classesImage1 from '../assets/Classes/classes-1.jpg'
import classesImage2 from '../assets/Classes/classes-2.jpg'
import classesImage3 from '../assets/Classes/classes-3.jpg'

const ClassesTop = () => {
  return (
    <div className='flex flex-col md:items-start items-center space-y-3'>
      <p className='md:text-[1.25rem] text-[1rem] tracking-[0.3rem] text-white'>OUR CLASSES</p>
      <div className='flex md:flex-row flex-col items-center md:text-start text-center justify-between md:space-y-0 space-y-3 w-full'>
        <span className='lg:text-[2.5rem] md:text-[2rem] text-[1.75rem] font-bold  text-[#00C853] leading-[1.25]'>
          Personalized Fitness <br /> Classes for Every Goal
        </span>
        <a
          href="#"
          className='border border-[#00C853] bg-transparent hover:bg-[#00C853] font-light text-white rounded cursor-pointer 
            md:py-6 md:px-9 py-3 px-5 md:text-[1.25rem] duration-200'
        >
          More Classes
        </a>
      </div>
    </div>
  );
}

const GridCard = ({ image, title, text }) => {
  return (
    <div className='h-[70vh] mx-auto aspect-[4/5] w-full'>
      {/* Background image */}
      <div 
        className='h-full w-full bg-center bg-cover cursor-pointer relative group rounded-[0.25rem]'
        style={{backgroundImage: `url(${image})`}}
      >
        {/* Dark bg */}
        <div className='absolute inset-0 group-hover:bg-black/60'></div>

        {/* Hover content */}
        <div className='relative flex flex-col justify-between items-center text-center h-full px-6 py-15 opacity-0 -translate-x-10 
          group-hover:opacity-100 group-hover:translate-x-0 duration-500'
        >
          <div className='flex flex-col gap-3'>
            <p className='text-white font-semibold text-[1.75rem] leading-tight'>{title}</p>
            <span className='text-white text-[1rem] font-light'>{text}</span>
          </div>
          <a 
            href="#"
            className='inline-flex justify-center bg-[#00C853] py-3 px-6 md:text-[1.25rem] font-light text-white
            rounded-[0.25rem] hover:bg-[#00c853]/80 hover:duration-200 border border-[#00C853] lg:w-fit w-full'
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Classes() {
  const classesData = [
    {
      image: classesImage1,
      title: 'Strength Training',
      text: 'Classes focusing on building muscle strength and endurance through weightlifting and resistance exercises.'
    },
    {
      image: classesImage2,
      title: 'Cardio & Endurance',
      text: 'High-energy sessions designed to improve cardiovascular health, stamina, and overall conditioning through dynamic movements.'
    },
    {
      image: classesImage3,
      title: 'Yoga & Flexibility',
      text: 'A calming blend of stretches and mindful movements to enhance flexibility, balance, and mental clarity.'
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerInstance.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.2
      }
    );

    if (animationRef.current) { 
      observer.observe(animationRef.current);
    };

    return () => {
      if (animationRef.current) observer.unobserve(animationRef.current);
    }
  }, [])


  return (
    <section ref={animationRef} className={`min-h-[100vh] p-container md:py-24 py-20 flex flex-col space-y-6
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-1000`}
    >
      <ClassesTop />
      <div className='flex-1 grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-6 justify-items-center'>
        {classesData.map((cls, id) => (
          <GridCard
            key={id}
            image={cls.image}
            title={cls.title}
            text={cls.text}
          />
        ))}
      </div>
    </section>
  )
}
