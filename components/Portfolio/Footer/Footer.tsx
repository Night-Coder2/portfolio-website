'use client';

import { useAnimation } from 'framer-motion';
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

var obs: IntersectionObserver;

const Footer = () => {
    const controls = useAnimation();
    const ref = useRef(null);

    const variants = {
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y:"0%" },
    };

    useEffect(() => {
        const handleShadow = () => {
            if (ref.current && window.scrollY >= 180) {
                obs.observe(ref.current);
                controls.start('visible')
            } else if(ref.current) {
                obs.unobserve(ref.current)
                controls.start('hidden')
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

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
        obs = observer
    }, [controls]);
    return (
    <div style={{backgroundColor: 'transparent'}} className='fixed right-1 h-[7rem] shadow-xl z-[100] bottom-0 ease-in-out duration-300 bg-gray-900'>
        <motion.div ref={ref} variants={variants} initial="hidden" animate={controls} transition={{duration:0.2}} className="flex justify-between items-center w-full h-full">
            <Link href={'/#home'} className='absolute right-3'><BsFillArrowUpCircleFill size={40}/></Link>
        </motion.div>
    </div>
  )
}

export default Footer