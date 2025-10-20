import React, { useState } from 'react'

const SignUpForm = ({ handleSubmit }) => {
  return (
    <form 
      action="#" 
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 w-full'
    >
      <div className='flex items-center gap-4'>
        <input 
          type="text" 
          required 
          className='input-form'  
          placeholder='First Name'
        />
        <input 
          type="text" 
          required 
          className='input-form'  
          placeholder='Last Name'
        />
      </div>
      <div>
        <input 
          type="email" 
          required 
          className='input-form' 
          placeholder='Enter your email'  
        />
      </div>
      <div>
        <input 
          type="password" 
          className='input-form'  
          placeholder='Enter your password'
        />
      </div>
      <button className='btn-form'>Create an account</button>
    </form>
  )
}

const SignInForm = ({ handleSubmit }) => {
  return (
    <form 
      action="#" 
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 w-full'
    >
      <div>
        <input 
          type="email" 
          required 
          className='input-form' 
          placeholder='Enter your email'  
        />
      </div>
      <div>
        <input 
          type="password" 
          className='input-form'  
          placeholder='Enter your password'
        />
      </div>
      <button className='btn-form'>Sign In</button>
    </form>
  )
}

const SignCard = ({ isSignUp }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='text-white flex flex-col justify-between flex-1'>
      {/* Title text */}
      {
        isSignUp ? (
          <p className='md:text-[1.15rem] text-[1.05rem] font-bold'>Create an account</p>
        ) : (
          <p className='md:text-[1.15rem] text-[1.05rem] font-bold'>Sign In</p>
        )
      }
      {/* Form */}
      {
        isSignUp ? (
          <SignUpForm handleSubmit={handleSubmit} />
        ) : (
          <SignInForm handleSubmit={handleSubmit} />
        )
      }
      {/* Divider */}
      <div className='flex items-center gap-4'>
        <div className='h-0.5 flex-1 bg-[#00C853]'></div>
        <span className='text-[0.75rem] font-extralight whitespace-nowrap text-gray-200 '>OR SIGN IN WITH</span>
        <div className='h-0.5 flex-1 bg-[#00C853]'></div>
      </div>
      {/* Google / Apple */}
      <div className='flex items-center gap-4 w-full'>
        <button className='btn-form text-black'>
          <i className="fa-brands fa-google"></i>
        </button>
        <button className='btn-form text-black'>
          <i className="fa-brands fa-apple"></i>
        </button>
      </div>
      <div className='text-center'>
        <span className='text-extralight text-gray-300 text-[0.7rem]'>
          By creating an account, you agree to our Terms & Service
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <section className='p-container md:min-h-[calc(100vh-5rem)] min-h-[calc(100vh-4rem)] flex items-center justify-center'>
      <div className='bg-[#1E293B] h-[70vh] max-w-[25rem] w-full shadow-signup rounded-2xl p-6 flex flex-col gap-4'>
        <div className='bg-black text-white rounded-2xl text-[0.95rem] p-0.5 flex items-center gap-4 w-fit'>
          <button
            onClick={() => setIsSignUp(true)}
            className={`rounded-2xl cursor-pointer py-2 text-[0.85rem] font-bold px-4 ${isSignUp ? 'bg-[#1E293B] text-white/100' : 'bg-[#000] text-white/50'}`}
          >
            Sign up
          </button>
          <button
            onClick={() => setIsSignUp(false)}
            className={`rounded-2xl cursor-pointer py-2 text-[0.85rem] px-4 font-bold ${isSignUp ? 'bg-[#000] text-white/50' : 'bg-[#1E293B] text-white/100'}`}
          >
            Sign in
          </button>
        </div>
        <SignCard
          isSignUp={isSignUp}
        />
      </div>
    </section>
  )
}
