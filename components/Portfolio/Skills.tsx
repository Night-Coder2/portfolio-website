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
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { container, item } from '../Fade/variants';

const Skills:FC = () => {

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

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <motion.div ref={ref} variants={container} initial={"hidden"} animate={controls}>
            <motion.p variants={item} className='text-xl tracking-widest uppercase text-white/80'>Skills</motion.p>
            <motion.h2 variants={item} className='py-4'>What I Can Do</motion.h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <motion.div variants={item} className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>HTML</h3>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={item} className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>React</h3>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={item} className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwind} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>Tailwind CSS</h3>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={item} className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={typescript} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>TypeScript</h3>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={item} className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjs} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>Next.JS</h3>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={item} className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={github} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>GitHub</h3>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={item} className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascript} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950 font-bold'>JavaScript</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
            
        </motion.div>
        </div>
    </div>
  )
}

export default Skills