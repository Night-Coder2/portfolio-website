'use client'
import React, {useRef, useState} from 'react'
import ContactImg from '@/public/assets/contact.jpg';
import Image from 'next/image'
import Link from 'next/link'
import {FaGithub, FaDiscord} from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const NameRef: any = useRef()
    const EmailRef: any = useRef()
    const MessageRef: any = useRef()
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const Name = NameRef.current.value
        const Email = EmailRef.current.value
        const Message = MessageRef.current.value
        console.log(Name, Email, Message)

        if(!Name || !Email || !Message) {
            alert('Please fill the form')
            return
        }

        emailjs.send('service_glhjzzb', 'template_z2hq6sf', {
            from_name: Name,
            to_name : 'sudhir',
            from_email: Email,
            to_email: 'sudhircks@gmail.com',
            message: Message }, 'ZNCgwJLMP2GXH8R8I').then((result) => {
                alert('success')
                NameRef.current.value = null;
                EmailRef.current.value = null;
                MessageRef.current.value = null;
            })
    }
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-white'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-950 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="/" />
                        </div>
                        <div>
                            <h2 className='py-2'>Sudhir</h2>
                            <p>Student</p>
                            <p className='pt-4 text-base'>I am available after 4:30 IST for any coding stuff just contact me on discord</p>
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
                        </div>
                    </div>
                </div>

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-950 rounded-xl lg:p-4'>
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
                            <button type='submit' className='w-full text-white rounded-lg p-3 hover:scale-105 pt-4 duration-150'>Send message</button>
                    </form>
                </div>
                
            </div>
            <div className='flex justify-center items-center py-16'>
                    <Link href={'#home'}>
                        <div className='rounded-full shadow-lg shadow-gray-950 p-3 ease-in cursor-pointer hover:scale-110 duration-300'>
                            <HiOutlineChevronDoubleUp size={35} />
                        </div>
                    </Link>
                     
            </div>
        </div>
    </div>
  )
}

