import React, { useState, useRef, useEffect } from 'react'
import { testimonialsData } from '../data/testimonialsData';

const TestTop = ({ onPrev, onNext }) => {
  return (
    <div className='flex flex-col md:items-start items-center space-y-3'>
      <p className='md:text-[1.25rem] text-[1rem] tracking-[0.3rem] text-white'>TESTIMONIALS</p>
      <div className='flex md:flex-row flex-col md:space-y-0 space-y-3 items-center md:text-start text-center justify-between w-full'>
        <span className='lg:text-[2.5rem] md:text-[2rem] text-[1.75rem] font-bold  text-[#00C853] leading-[1.25]'>
          What Say About Us
        </span>
        <div className='flex items-center gap-6'>
          <button 
            className='test-btn'
            onClick={onPrev}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button 
            className='test-btn'
            onClick={onNext}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

const TestCard = ({ name, image, profession, opinion, slide }) => {
  return (
    <div className='p-6 flex md:flex-row flex-col justify-between gap-6 min-h-[15rem] items-center'>
      <div className='md:w-[15rem] md:h-[15rem] w-[12rem] h-[12rem] aspect-square overflow-hidden'>
        <img 
          src={image} 
          alt={name} 
          className={`h-full w-full object-cover rounded-[0.25rem] ease-in transition duration-300 ${slide}`}
        />
      </div>
      <div className='md:max-w-1/2 w-full md:text-left text-center'>
        <p className='mb-4 break-words text-gray-200 text-[0.95rem] italic leading-relaxed'
        >
          "{opinion}"
        </p>
        <p className='mb-1 font-medium text-[1.15rem] text-white'>{name}</p>
        <span className='text-gray-300 font-light text-[0.85rem]'>{profession}</span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState('');
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

  const handlePrev = () => {
    setSlide('-translate-x-full');
    setTimeout(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
      );
      setSlide('translate-x-0');
    }, 300);
   
  };
  
  const handleNext = () => {
    setSlide('-translate-x-full');
    setTimeout(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
      setSlide('translate-x-0');
    }, 300);
    
  };

  const currentTestimonial = testimonialsData[currentIndex];
  
  return (
    <section ref={animationRef}
      className={`p-container md:py-24 py-20 flex flex-col space-y-12  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-1000`}
    >
      <TestTop 
        onPrev={handlePrev}
        onNext={handleNext}
      />    
      <TestCard
        slide={slide}
        {...currentTestimonial}
      />
    </section>
  )
}
