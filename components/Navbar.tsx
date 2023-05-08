'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaDiscord } from 'react-icons/fa';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

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

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-gray-900' : 'fixed w-full h-20 z-[100] bg-gray-900'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-gray-900'>
        <Link href='/'>
          
            <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            />
          
        </Link>
        <div className='pr-10'>
          <ul className='hidden md:flex text-white'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#home'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

            <div className={!nav ? 'md:hidden fixed left-0 top-0 w-full h-screen' : ''}>
                <div className={nav ? 'fixed top-0 left-0 w-[75%] sm:w-[60%] h-screen bg-gray-700 p-10 ease-in duration-500' : 'fixed top-0 left-[-200%] p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src={NavLogo} width={100} height={35} alt={'/'} />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                    <div className='border-b border-gray-700'>
                        <p className='w-[85%] md:w-[90%] py-4 text-center'>Lets build something legedary together</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul>
                            <Link href='/#home'>
                               <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                               <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                               <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                               <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                               <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-10'>
                            <p className='uppercase tracking-widest font-bold text-center text-white'>{`let's connect`}</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer hover:scale-105 duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer hover:scale-105 duration-300'>
                                    <FaDiscord />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar