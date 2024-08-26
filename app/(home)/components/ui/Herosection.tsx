
import Link from 'next/link'
import React from 'react'
import { MovingBorderBtn } from './moving-border'
import Title from '../Title'

export default function Herosection() {
    return (
        <>
            <div className='flex w-full flex-col-reverse gap-14 lg:gap-0 lg:flex-row justify-between items-center p-10'>
                <div className='space-y-10 my-16 text-center lg:text-left selection:text-blue-600'>
                    <h1 className='text-2xl lg:text-3xl font-bold'>Hi there, <br />
                        <span className='underline underline-offset-8 decoration-green-500'>{"I am Ram Sharan Dixit."}</span>
                    </h1>
                    <p className='md:w-96 text-lg text-grey-300'>
                        {
                            "Based in Hardoi, I am learning frontend development passionate about building a modern web application that users love."
                        }
                    </p>
                    <Link href={"ramsarandixit@gmail.com"} className='inline-block group'>
                        <Title
                        text="Contact Me"
                        />
                    </Link>
                </div>
                <div className='my-16 pr-10 relative'>
                    <div className='w-72 h-72 space-y-3 -rotate-[30deg] sm:px-3 relative'>
                        <div className='flex gap-3 translate-x-8'>
                            <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                            <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                        </div>
                        <div className='flex gap-3 -translate-x-8'>
                            <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                            <div className='w-32 h-32 rounded-full bg-green-500'></div>
                        </div>
                        <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
                    </div>
                    <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
                    <MovingBorderBtn className='p-3 font-semibold'>
                        <p>📢 Available</p>
                    </MovingBorderBtn>
                </div>
                </div>
            </div>
        </>
    )
}
