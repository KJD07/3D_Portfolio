import {React, useRef, useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import {EarthCanvas} from './canvas'
import emailjs from '@emailjs/browser'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    
  }

  const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left' , 'tween', 0.2 , 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Enter your name' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="text" name="email" value={form.email} onChange={handleChange} placeholder='Enter your Email' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea rows={7} type="text" name="message" value={form.message} onChange={handleChange} placeholder='Write your message' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 font-bold shadow-md shadow-primary rounded-xl outline-none w-fit text-white'>{loading ? 'Sending...': 'Send'}</button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right' , 'tween', 0.2 , 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");                                                                                                                                                                                                                                                                                 