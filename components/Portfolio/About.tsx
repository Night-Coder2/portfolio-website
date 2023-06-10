'use client'

import React, {FC} from 'react'
import AbtImg from '@/public/assets/about.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { container, item } from '../Fade/variants';

const About:FC = () => {

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
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <motion.div ref={ref} variants={container} initial={"hidden"} animate={controls} className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <motion.p variants={item} className='uppercase text-xl tracking-widest'>About</motion.p>
                <motion.h2 variants={item} className='py-4'>Who I Am</motion.h2>
                <motion.p variants={item} className='py-2 text-gray-600'>{'//I am not your normal developer'}</motion.p>
                <motion.p variants={item} className='py-2'>
                    I am a high school student. I started coding from 10 years old. I started with an <Link href={"https://store-usa.arduino.cc/products/arduino-uno-rev3?selectedStore=us"} className='underline text-blue-500 font-bold' target='_blank'>Arduino</Link> board. I create projects as hobbies and to impress people around me. I do front-end UI development. I started of with making electronic projects such as table lamp and all which sparked my technological intrest. Later I started to use a <span className='font-bold'>Linux Computer</span> to run docker and websites. I used a <Link href={'https://www.raspberrypi.com/products/raspberry-pi-4-model-b/'} className='underline text-blue-500 font-bold' target='_blank'>Raspberry Pi</Link> for those purposes. I learnt many things from it such as front-end designing and <Link href={'https://www.python.org/'} className='underline text-blue-500 font-bold' target='_blank'>Python</Link>. My <Link href={'https://chitrakoota.com'} target='_blank'>school</Link> hasnt really helped me with coding and for the fact any other hobbies. It was my father and my mother who really motivated me in this field. In my school the only thing that is important is <span className='text-red-600 font-bold'>marks</span> so they never really do what they said <span className='text-red-600 font-bold'>&#39;we will develop your child&#39;s skill&#39;</span>
                </motion.p>
                <motion.p variants={item} className='py-2 underline text-xl'><Link href='https://discord.gg/uquRPXkcnU' target={"_blank"}>Check out my Discord server.</Link></motion.p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-950 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={AbtImg} alt="/" className='rounded-xl'/>
            </div>
        </motion.div>
    </div>
    
  )
}

export default About