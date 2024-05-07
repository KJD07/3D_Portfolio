import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState('');
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(true);
  }

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 justify-between fixed top-0 z-20 bg-primary`} style={{ paddingTop: "-10px" }}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Kanan&nbsp;<span className='sm:block hidden'>| Portfolio </span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white hover:transition-all text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
          <img
            src={`${show ? close : menu}`}
            className='flex sm:hidden'
            onClick={() => setShow(!show)}
          />
          <div className={`${show ? 'flex' : 'hidden'} px-6 black-gradient absolute top-20 right-0 mx-4 my-1 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none sm:flex flex-coloumn'>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white hover:transition-all text-[18px] font-medium cursor-pointer my-3`}
                  onClick={() => setActive(Link.title)}
                >
                  <a href={`${Link.id}`}>{Link.title}</a>
                  <div className='bar'></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar