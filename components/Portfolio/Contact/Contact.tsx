'use client'
import React, {useRef, useEffect} from 'react'
import ContactImg from './contact.jpg';
import Image from 'next/image'
import Link from 'next/link'
import {FaGithub, FaDiscord, FaChess} from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { container, item } from '@/components/Fade/variants';
import Modal from '@/components/utilities/Modal/modal';
export default function Contact() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [text, setText] = React.useState('');
    const close = () => {
        setModalOpen(false);
    }
    const open = () => {
        setModalOpen(true);
    }
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

    const NameRef: any = useRef()
    const EmailRef: any = useRef()
    const MessageRef: any = useRef()
    const handleSubmit = (e: any) => {
        console.log(modalOpen)
        e.preventDefault()
        const Name = NameRef.current.value
        const Email = EmailRef.current.value
        const Message = MessageRef.current.value
        console.log(Name, Email, Message)

        if(!Name || !Email || !Message) {
            setText('Please fill all the fields')
            return
        }

        emailjs.send('service_glhjzzb', 'template_z2hq6sf', {
            from_name: Name,
            to_name : 'sudhir',
            from_email: Email,
            to_email: 'sudhircks@gmail.com',
            message: Message }, 'ZNCgwJLMP2GXH8R8I').then((result) => {
                setText('Message Sent Successfully')
                NameRef.current.value = null;
                EmailRef.current.value = null;
                MessageRef.current.value = null;
            })
    }
  return (<>
    <div id='contact' className='max-w-[1240px] m-auto px-2 py-16 w-full lg:h-screen'>
        <motion.div ref={ref} variants={container} initial={"hidden"} animate={controls}>
            <motion.p variants={item} className='text-xl tracking-widest uppercase text-white'>Contact</motion.p>
            <motion.h2 variants={item} className='py-4'>Get In Touch</motion.h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <motion.div variants={item} className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-950 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="/" />
                        </div>
                        <div>
                            <h2 className='py-2'>Sudhir</h2>
                            <p>Student</p>
                            <p className='pt-4 text-base'>I am available after 16:30 IST for any coding stuff just contact me on <Link href='https://discord.gg/uquRPXkcnU' target={"_blank"}>Discord</Link>.</p>
                        </div>
                        <p className='pt-10 pb-3 uppercase'>connect with me</p>
                        <div className='flex items-center justify-between max-w-[200px] m-auto'>
                            <div className='rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer hover:scale-110 duration-300'>
                                <Link href={'https://github.com/phoenixlegen'} target={"_blank"}>
                                    <FaGithub size={35} />
                                </Link>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer hover:scale-110 duration-300'>
                                <Link href={'https://discord.gg/uquRPXkcnU'} target={"_blank"}>
                                    <FaDiscord size={35} />
                                </Link>
                            </div>
                            <div>
                                <Link href={'https://www.chess.com/member/sudhir-phoenix'} target={"_blank"}>
                                    <FaChess size={35} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={item} className='col-span-3 w-full h-auto shadow-xl shadow-gray-950 rounded-xl lg:p-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='grid md:grid-cols-1 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input ref={NameRef} type="text" className='bg-gray-700 text-white border-2 rounded-lg p-3 flex border-gray-950' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input ref={EmailRef} type="email" className='bg-gray-700 text-white border-2 rounded-lg p-3 flex border-gray-950' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea ref={MessageRef} className='bg-gray-700 text-white border-2 rounded-lg p-3 border-gray-950' rows={8}></textarea>
                        </div>
                        <motion.button whileHover={{ scale: 1.05 }} onClick={() => (modalOpen ? close() : open())} whileTap={{ scale: 0.95 }} type='submit' className='w-full text-white rounded-lg p-3 hover:scale-105 pt-4 duration-150 shadow-gray-950 shadow-2xl'>Send message</motion.button>
                        

                    </form>
                </motion.div>
            </div>
        </motion.div>
        <AnimatePresence initial={false} mode='wait'  onExitComplete={() => null}>
            {modalOpen && <Modal handleClose={close} text={text} />}
        </AnimatePresence>
    </div>
    </>)
}

