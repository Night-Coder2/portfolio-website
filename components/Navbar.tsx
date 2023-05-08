'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaDiscord } from 'react-icons/fa'

export default function Navbar() {
    const [nav, setNav] = React.useState(false)
    const [shadow, setShadow] = React.useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        })
    }, [])

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-gray-900' : 'fixed w-full h-20 z-[100] bg-gray-900'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src='/../public/assets/SMBHG.png' width={125} height={50} alt={'/'} />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/#home'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={!nav ? 'md:hidden fixed left-0 top-0 w-full h-screen' : ''}>
                <div className={nav ? 'fixed top-0 left-0 w-[75%] sm:w-[60%] h-screen bg-gray-700 p-10 ease-in duration-500' : 'fixed top-0 left-[-200%] p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/../public/assets/SMBHG.png' width={100} height={35} alt={'/'} />
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
                            <p className='uppercase tracking-widest font-bold text-center text-white'>let's connect</p>
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