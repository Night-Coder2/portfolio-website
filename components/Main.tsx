import Link from 'next/link'
import React from 'react'
import {FaGithub, FaDiscord} from 'react-icons/fa'

export default function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-white/80'>LETS BUILD SOMETHING TOGETHER.</p>
                <h1 className='text-white/100'>Hi, I am <span className=' text-green-700'>Sudhir</span>.</h1>
                <h1 className='py-2 text-white/100'>A Student Who Likes Coding.</h1>
                <p className='py-4 text-white/80 max-w-[70%] m-auto'>I am a student who likes to code and build things. I am currently learning web development and I am also interested in embedded coding.</p>
                <div className='flex items-center justify-between max-w-[200px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer hover:scale-110 duration-300'>
                        <Link href={'https://github.com/phoenixlegen'}>
                            <FaGithub size={35} />
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer hover:scale-110 duration-300'>
                        <Link href={'https://discord.gg/uquRPXkcnU'}>
                            <FaDiscord size={35} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
