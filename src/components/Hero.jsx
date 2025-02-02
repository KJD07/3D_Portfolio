import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../style'
import { ComputersCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-roow items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 h-60 sm:80 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hey, I am<span className='text-[#915eff]'> Kanan</span></h1>
          <p className={`${styles.heroSubText} mt-2`}>I design proffesional & creative 3D/2D Websites & a proffesional Gamer.</p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default SectionWrapper(Hero, "hero")