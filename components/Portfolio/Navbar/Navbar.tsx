'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect, FC, useRef} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaChess, FaDiscord, FaGithub} from 'react-icons/fa';

// import { useRouter } from 'next/router';
import NavLogo from './navLogo.png'
import { motion, useAnimation } from 'framer-motion';
import { container, item } from '@/components/Fade/variants';

const Navbar:FC = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

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
              <Link href='/#chess'>Chess</Link>
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
        <motion.div variants={container} initial="hidden" animate={controls} ref={ref}
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-5 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-5 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <motion.div variants={item}>
                <Link href='/'>
                    <Image
                      src={NavLogo}
                      width='87'
                      height='35'
                      alt='/'
                    />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
              >
                <AiOutlineClose size={25} />
              </motion.div>
            </div>
            {/* <div className='border-b border-gray-950 my-4'>
              <motion.p variants={item} className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together.
              </motion.p>
            </div> */}
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/#home'>
                <motion.li variants={item} onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </motion.li>
              </Link>
              <Link href='/#about'>
                <motion.li variants={item} onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </motion.li>
              </Link>
              <Link href='/#chess'>
                <motion.li variants={item} onClick={() => setNav(false)} className='py-4 text-sm'>
                  Chess
                </motion.li>
              </Link>
              <Link href='/#skills'>
                <motion.li variants={item} onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </motion.li>
              </Link>
              <Link href='/#contact'>
                <motion.li variants={item} onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </motion.li>
              </Link>
            </ul>
            <div className='p-10'>
              <motion.p variants={item} className='uppercase tracking-widest text-[#5651e5] text-center'>
                Let&#39;s Connect
              </motion.p>
              <div className='flex items-center justify-evenly my-4 w-full sm:w-[80%]'>
                  <motion.div variants={item} className='rounded-full shadow-lg shadow-gray-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href={'https://discord.gg/uquRPXkcnU'} target={"_blank"}><FaDiscord size={25} /></Link>
                  </motion.div>
                  <motion.div variants={item} className='rounded-full shadow-lg shadow-gray-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href='https://github.com/PhoenixLegen' target={"_blank"}>
                        <FaGithub size={25} />
                    </Link>
                  </motion.div>
                  <motion.div variants={item} className='rounded-full shadow-lg shadow-gray-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href='https://www.chess.com/member/sudhir-phoenix' target={"_blank"}>
                      <FaChess size={25} />
                    </Link>
                  </motion.div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;