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
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    useEffect(() => {
        const handleShadow = () => {
            if (ref.current && window.scrollY >= 180) {
                obs.observe(ref.current);
            } else if(ref.current) {
                obs.unobserve(ref.current)
                controls.start("hidden")
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
    <div style={{backgroundColor: 'transparent'}} className='fixed w-full h-20 shadow-xl z-[100] bottom-0 ease-in-out duration-300 bg-gray-900'>
        <motion.div ref={ref} variants={variants} initial="hidden" animate={controls} transition={{duration:0.2}} className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Link href={'/#home'} className='absolute right-3'><BsFillArrowUpCircleFill size={32}/></Link>
        </motion.div>
    </div>
  )
}

export default Footer