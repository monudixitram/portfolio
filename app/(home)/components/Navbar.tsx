
import { cn } from '@/app/lib/cn';
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaInstagram, FaFacebook  } from "react-icons/fa";

export default function Navbar({className}:{className?: string}) {
    const socials =[
        {
            Link:"https://github.com/monudixitram",
            Label:"Github",
            Icon: FaGithub
        },
        {
            Link:"https://github.com/monudixitram",
            Label:"Instagram",
            Icon: FaInstagram 
        },
        {
            Link:"https://github.com/monudixitram",
            Label:"Github",
            Icon: FaFacebook
        },
    ]
  return (
    <>
   <nav className={cn('flex w-full justify-between items-center p-10', className)}>
    <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 selection:text-blue-600'>Ram Sharan Dixit 👤</h1>
   <div className='flex items-center gap-5'>
    {socials.map((social, index)=>{
        const Icon =social.Icon
        return <Link href={social.Link} key={index} aria-label={social.Label}>
        <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
        </Link>
    })}
    </div>
   </nav>
    </>
  )
}
