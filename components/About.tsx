import React from 'react'
import AbtImg from '@/public/assets/about.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>{'//I am not your normal developer'}</p>
                <p className='py-2'>
                    I am high school student. I had started coding from a young age compared to others. <br />
                    In my spare time I started coding Arduino microcontroller then i was introduced to <br />
                    Raspberry Pi from which i learnt Python. After that, i was introduced to React, Docker,<br />
                    Next.js. I used run docker on my Raspberry Pi learnt networking from it. Now I have advanced <br />
                    hardware compared to before. I have also started a Discord server make sure to check it out. <br />
                    Now i am writting this application in Next.js
                </p>
                <p className='py-2 underline text-xl pt-6'><Link href='/#projects'>Check out some of my latest projects.</Link></p>
                <p className='py-2 underline text-xl'><Link href='https://discord.gg/uquRPXkcnU'>Check out my Discord server.</Link></p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-950 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={AbtImg} alt="/" className='rounded-xl'/>
            </div>
        </div>
    </div>
  )
}
