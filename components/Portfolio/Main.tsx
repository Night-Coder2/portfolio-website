'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link'
import React, {FC} from 'react'
import {FaGithub, FaDiscord} from 'react-icons/fa'

const container = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};
  
const item = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1
    }
};

const Main:FC = () =>{

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
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <motion.div ref={ref} variants={container} initial={"hidden"} animate={controls}>
                <motion.p variants={item} className='uppercase text-sm tracking-widest text-white/80'>LETS BUILD SOMETHING TOGETHER.</motion.p>
                <motion.h1 variants={item} className='text-white/100'>Hi, I am <span className=' text-green-700'>Sudhir</span>.</motion.h1>
                <motion.h1 variants={item} className='py-2 text-white/100'>A Student Who Likes Coding.</motion.h1>
                <motion.p variants={item} className='py-4 text-white/80 max-w-[70%] m-auto'>I am a student who likes to code and build things. I am currently learning web development and I am also interested in embedded coding.</motion.p>
                <div className='flex items-center justify-between max-w-[200px] m-auto py-4'>
                    <motion.div variants={item} className='rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer hover:scale-110 duration-300'>
                        <Link href={'https://github.com/phoenixlegen'} target={"_blank"}>
                            <FaGithub size={35} />
                        </Link>
                    </motion.div>
                    <motion.div variants={item} className='rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer hover:scale-110 duration-300'>
                        <Link href={'https://discord.gg/uquRPXkcnU'} target={"_blank"}>
                            <FaDiscord size={35} />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Main