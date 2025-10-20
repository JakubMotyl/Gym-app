import React from 'react'

export default function JoinBanner() {
  return (
    <section 
      className='p-container h-[35vh] relative z-0  bg-[url(./assets/joinbanner.jpg)] bg-center bg-cover bg-no-repeat'
    >
      <div className='absolute top-0 left-0 z-10 h-full w-full bg-black/40'></div>
      <div className='absolute z-20 flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full gap-6'>
        <p className='text-white lg:text-[2.5rem] md:text-[2.25rem] sm:text-[2rem] text-[1.75rem] font-bold text-center'>
          Get A Free Consultancy
          <br />
          Right Now Here!  
        </p>
        <a 
          href="#"
          className='inline-flex justify-center bg-[#00C853] py-3 px-6 md:text-[1.25rem] text-[1rem] font-light text-white
          rounded-[0.25rem] hover:bg-[#00c853]/80 duration-200 border border-[#00C853] transition'
        >
          Join Membership
        </a>
      </div>
    </section>
  )
}
