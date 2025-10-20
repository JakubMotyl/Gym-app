import React from 'react'
import Hero from '../Home/Hero'
import Advertisement from '../Home/Advertisement'
import Classes from '../Home/Classes'
import Trainers from '../Home/Trainers'
import Pricing from '../Home/Pricing'
import Testimonials from '../Home/Testimonials'
import JoinBanner from '../Home/JoinBanner'

export default function Home({loadAnimations}) {
  return (
    <>
      <Hero loadAnimations={loadAnimations} />
      <Advertisement />
      <Classes />
      <Trainers />
      <Pricing />
      <Testimonials />
      <JoinBanner />
    </>
  )
}
