import React from 'react'

export default function Hero({ loadAnimations }) {
  return (
    <section 
      className='p-container md:min-h-[calc(100vh-5rem)] min-h-[calc(100vh-4rem)] bg-no-repeat bg-cover bg-center relative z-0 md:bg-[url("./assets/nav-hero.jpg")] bg-[#1B1B1F]'
    >
    {/* Shadow gradient md+ devices*/}
    <div className="md:block absolute hidden top-0 left-0 h-full w-full z-10 
      bg-[linear-gradient(to_right,#1E293B_0%,#1E293B_10%,rgba(30,41,59,0.4)_60%,transparent_100%)]">
    </div>

    {/* Hero Content */}
    <div className='absolute p-container flex flex-col gap-6 z-50 left-0 top-1/2 -translate-y-1/2 
      max-w-full md:max-w-[80%] lg:max-w-[48rem] items-center md:items-start'
    >
      <div className={`${loadAnimations ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} duration-700 ease-out`}>
        <h2 className='text-white md:text-5xl text-4xl font-bold md:text-left text-center'>
          REFRESH YOUR <br /> ROUTINE SHAPE <br /> YOUR <span className='text-[#00C853]'>FITNESS</span>
        </h2>
      </div>
      <div className={`${loadAnimations ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} duration-700 ease-out`}>
        <p className='text-white/90 md:text-left text-center md:text-[1rem] text-[0.9rem]'>
          Engaging in regular exercise not only amplifies well-being and fortifies 
          the body but also diminishes the likelihood of injuries thereby optimizing.  
        </p>
      </div>
      <div className='flex md:flex-row flex-col items-center gap-6 w-full'>
        <a 
          href="#"
          className={`inline-flex justify-center bg-[#00C853] py-3 px-6 md:text-[1.25rem] font-light text-white 
          rounded-[0.25rem] w-full  hover:bg-[#00c853]/80 hover:duration-200  
          ${loadAnimations ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} duration-700 ease-out`}
        >
          Join Now
        </a>
        <button className={`cursor-pointer py-3 px-6 md:text-[1.25rem] flex items-center justify-center gap-3
          text-white hover:scale-105 w-full hover:duration-200 font-light
          ${loadAnimations ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'} duration-700 ease-out`}
        >
          <i className="fa-solid fa-circle-play text-3xl"></i>
          Watch Video
        </button>
      </div>
    </div>

    {/* Shadow gradient md- devices */}
    <div className="md:hidden absolute inset-0 block z-10
      bg-gradient-to-t from-white/10 to-transparent">
    </div>
    </section>
  )
}
