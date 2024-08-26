"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiReact,SiNextdotjs, SiTailwindcss,SiBootstrap,SiBulma, SiGithub} from 'react-icons/si'

export default function Skills() {
    const Skills=[
        {
            text:"React",
            Icon:SiReact
        },
        {
            text:"Next js",
            Icon:SiNextdotjs
        },
        {
            text:"Tailwind",
            Icon:SiTailwindcss
        },
         {
            text:"BootStrap",
            Icon:SiBootstrap
        },
        {
            text:"Bulma",
            Icon:SiBulma
        },
        {
            text:"Github",
            Icon:SiGithub
        },
    ]
  return (
    <div className='max-w-5xl mx-auto px-14'>
    <Title
        text="Skills" className='flex justify-center items-center -rotate-6'/>
        <HoverEffect items={Skills}/>
    </div>
  )
}
