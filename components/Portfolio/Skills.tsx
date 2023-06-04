'use client'

import React, {FC} from 'react'
import html from '@/public/assets/Skills/html.png'
import nextjs from '@/public/assets/Skills/nextjs.png'
import react from '@/public/assets/Skills/react.png'
import tailwind from '@/public/assets/Skills/tailwind.png'
import typescript from '@/public/assets/Skills/typescript.png'
import github from '@/public/assets/Skills/github.png'
import javascript from '@/public/assets/Skills/javascript.png'
import Image from 'next/image'
import Fade from '../Fade/Fade'

const Skills:FC = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <Fade>
            <p className='text-xl tracking-widest uppercase text-white/80'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>React</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwind} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>Tailwind CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={typescript} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>TypeScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjs} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>Next.JS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={github} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>GitHub</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascript} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>JavaScript</h3>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fade>
        </div>
    </div>
  )
}

export default Skills