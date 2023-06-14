'use client'

import React, {FC} from 'react'
import chessIMG from './chess.png'
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

const Chess:FC = () => {

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
    <div id='chess' className='w-full lg:h-screen p-2 flex items-center py-16'>
        <motion.div ref={ref} variants={container} initial={"hidden"} animate={controls} className='max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <motion.h2 variants={item} className='uppercase tracking-widest'>CHESS</motion.h2>
                <motion.p variants={item} className='py-2'>
                    I always had a different taste for chess. My intrest in Chess was sparked when I had a contest in 2022 in which I lost very bad. So I joined chess classes. Chess classes helped me a lot with chess then I left it so now I watch youtube to learn it.
                </motion.p>
                <motion.p variants={item} className='py-2 underline text-xl'>
                    <Link href='https://www.chess.com/member/sudhir-phoenix' target={"_blank"} >My Chess.com profile</Link>
                </motion.p>
            </div>
            <div className='w-full md:flex h-auto m-auto shadow-xl shadow-gray-950 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={chessIMG} alt="/" className='rounded-xl' sizes='10'/>
            </div>
        </motion.div>
    </div>
    
  )
}

export default Chess