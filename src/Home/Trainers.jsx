import React, { useEffect, useRef, useState } from 'react'
import trainer1 from '../assets/Trainers/trainer-1.jpg'
import trainer2 from '../assets/Trainers/trainer-2.jpg'
import trainer3 from '../assets/Trainers/trainer-3.jpg'
import trainer4 from '../assets/Trainers/trainer-4.jpg'

const GridCard = ({ image, name, profession }) => {
  return (
    <div className='flex flex-col space-y-6'>
      <div className='h-[18rem] w-full overflow-hidden'>
        <img 
          src={image} 
          alt={name} 
          className='h-full w-full rounded-[0.25rem] object-cover object-top aspect-square transition-transform hover:scale-105 duration-500'
        />
      </div>
      <div className='flex flex-col items-center text-center leading-none'>
        <p className='font-semibold text-[1.25rem] text-white mb-2'>{name}</p>
        <span className='font-light text-[0.85rem] text-gray-300 mb-5'>{profession}</span>
        <div className='flex items-center space-x-3'>
          <div className='train-socials'>
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
          <div className='train-socials'>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className='train-socials'>
            <a href="#">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Trainers() {
  const trainersList = [
    {
      image: trainer1,
      name: 'Albert Flores',
      profession: 'Fitness Instructor'
    },
    {
      image: trainer2,
      name: 'Wade Warren',
      profession: 'CrossFit Expert'
    },
    {
      image: trainer3,
      name: 'Jacob Jones',
      profession: 'Strength & Core'
    },
    {
      image: trainer4,
      name: 'Esther Howard',
      profession: 'Nutrition Specialized'
    }
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
      },
      {threshold: 0.2}
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current)
      }
    }
  }, []) 

  return (
    <section ref={animationRef} className={`p-container min-h-[100vh] md:py-24 py-20 flex flex-col space-y-6
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-1000`}
    >
      <div className='flex flex-col space-y-3 text-center'>
        <p className='md:text-[1.25rem] text-[1rem] tracking-[0.3rem] text-white'>OUR TRAINERS</p>
        <span className='lg:text-[2.5rem] md:text-[2rem] text-[1.75rem] font-bold  text-[#00C853] leading-[1.25]'>
          Meet Our Trainers
        </span>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-6 justify-items-center'>
        {trainersList.map((train, id) => (
          <GridCard
            key={id}
            image={train.image}
            name={train.name}
            profession={train.profession}
          />
        ))}
      </div>
    </section>
  )
}
