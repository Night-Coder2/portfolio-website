import React from 'react'
import html from '@/public/assets/Skills/html.png'
import nextjs from '@/public/assets/Skills/nextjs.png'
import react from '@/public/assets/Skills/react.png'
import tailwind from '@/public/assets/Skills/tailwind.png'
import typescript from '@/public/assets/Skills/typescript.png'
import github from '@/public/assets/Skills/github.png'
import javascript from '@/public/assets/Skills/javascript.png'
import Image from 'next/image'
import Link from "next/link";

export default function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-white/80'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <Link href={'https://www.w3schools.com/html/'} target={"_blank"}><div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950'>HTML</h3>
                        </div>
                    </div></Link>

                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <Link href={'https://react.dev'} target={"_blank"}><div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950'>React</h3>
                        </div>
                    </div></Link>

                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <Link href={'https://tailwindcss.com'} target={"_blank"}><div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwind} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950'>Tailwind CSS</h3>
                        </div>
                    </div></Link>

                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <Link href={'https://www.typescriptlang.org'} target={"_blank"}>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={typescript} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-slate-950'>TypeScript</h3>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <Link href={'https://nextjs.org'} target={"_blank"}><div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjs} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950'>Next.JS</h3>
                        </div>
                    </div></Link>

                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <Link href={'https://github.com'} target={"_blank"}><div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={github} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950'>github</h3>
                        </div>
                    </div></Link>
                </div>
                <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
                    <Link href={'https://www.w3schools.com/js/'} target={"_blank"}><div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascript} alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-slate-950'>JavaScript</h3>
                        </div>
                    </div></Link>

                </div>
            </div>
        </div>
    </div>
  )
}
