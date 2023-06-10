'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect, FC, useRef} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaDiscord, FaGithub} from 'react-icons/fa';

// import { useRouter } from 'next/router';
import NavLogo from '../../public/assets/navLogo.png'
import { motion, useAnimation } from 'framer-motion';
import { container, item } from '../Fade/variants';

const Navbar:FC = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const controls = useAnimation();
  const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                controls.start('visible');
            } else {
                controls.start('hidden');
            }
        },
        { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
    style={{backgroundColor: 'transparent'}}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-gray-900'
          : 'fixed w-full h-20 z-[100] bg-gray-900'
      }
    >
      <motion.div variants={container} initial="hidden" animate={"visible"} className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <motion.div variants={item}>
          <Link href='/#home'>
              <Image
                src={NavLogo}
                alt='/'
                width='125'
                height='50'
                className='cursor-pointer'
              />
          </Link>
        </motion.div>
        <div>
          <ul className='hidden md:flex text-white pr-10'>
            <motion.li variants={item} className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#home'>Home</Link>
            </motion.li>
            <motion.li variants={item} className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </motion.li>
            <motion.li variants={item} className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </motion.li>
            <motion.li variants={item} className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </motion.li>
          </ul>
          {/* Hamburger Icon */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNav}
            className='md:hidden rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer hover:scale-110 duration-300'
          >
            <AiOutlineMenu size={25} />
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-5 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-5 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
              </Link>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
              >
                <AiOutlineClose size={25} />
              </motion.div>
            </div>
            <div className='border-b border-gray-950 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together.
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='p-10'>
              <p className='uppercase tracking-widest text-[#5651e5] text-center'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-evenly my-4 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg shadow-gray-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href={'https://discord.gg/uquRPXkcnU'} target={"_blank"}><FaDiscord size={25} /></Link>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href='https://github.com/PhoenixLegen' target={"_blank"}>
                        <FaGithub size={25} />
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;