'use client'

import React, {FC} from 'react'
import AbtImg from './personcoding.png'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const container = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
//            duration: 1.5,
            delayChildren: 0.1,
            staggerChildren: 0.2
      }
    }
};
    
export const item = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1
    }
};

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
    <div id='about' className='w-full h-full p-2 flex items-center py-16'>
        <motion.div ref={ref} variants={container} initial={"hidden"} animate={controls} className='max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <motion.p variants={item} className='uppercase text-xl tracking-widest'>About</motion.p>
                <motion.h2 variants={item} className='py-4'>Who I Am</motion.h2>
                <motion.p variants={item} className='py-2 text-gray-600'>{'//I am not your normal developer'}</motion.p>
                <motion.p variants={item} className='py-2'>
                    I am a high school student. I started coding when I was 10 years old. I started with an <Link href={"https://store-usa.arduino.cc/products/arduino-uno-rev3?selectedStore=us"} className='underline text-blue-500 font-bold' target='_blank'>Arduino</Link> board. I create projects as hobbies and to impress people around me. I do front-end UI development. I started of with making electronic projects such as table lamp and all which sparked my technological intrest. Later I started to use a <span className='font-bold text-green-600'>Linux Computer</span> to run docker and try hosting websites. I used a <Link href={'https://www.raspberrypi.com/products/raspberry-pi-4-model-b/'} className='underline text-blue-500 font-bold' target='_blank'>Raspberry Pi</Link> for those purposes. I learnt many things from it such as front-end designing and <Link href={'https://www.python.org/'} className='underline text-blue-500 font-bold' target='_blank'>Python</Link>. My <Link href={'https://chitrakoota.com'} target='_blank'>school</Link> hasnt really helped me with coding and for the fact any other hobbies. It was my father and my mother who really motivated me in this field. In my school the only thing that is important is <span className='text-red-600 font-bold'>marks</span>. They didn&#39; really care about skills outside of <span className='text-red-600 font-bold'>Dance</span>, <span className='text-red-600 font-bold'>Music</span>, <span className='text-red-600 font-bold'>Drama</span>, <span className='text-red-600 font-bold'>Art</span> and some more. Anyways my school has managed to keep me happy until now, I don&#39;t know what happens next. One of the best thing my school did was getting the best <span className='text-green-600 font-bold'>Information Technology</span> teacher ever. From that point on i felt more motivated to code. And this is where I am. Coding as a hobby and addicted to the world of <span className='text-green-600 font-bold'>Coding</span>, <span className='text-green-600 font-bold'>Mathematics</span>, <span className='text-green-600 font-bold'>Physics</span> and <span className='text-green-600 font-bold'>Chemistry</span>.
                </motion.p>
                <motion.p variants={item} className='py-2 underline text-xl'><Link href='https://discord.gg/uquRPXkcnU' target={"_blank"} >Check out my Discord server.</Link></motion.p>
            </div>
            <div className='w-full md:flex h-auto m-auto shadow-xl shadow-gray-950 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={AbtImg} alt="/" className='rounded-xl' sizes='10'/>
            </div>
        </motion.div>
    </div>
    
  )
}

export default About