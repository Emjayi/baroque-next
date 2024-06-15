import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Link from 'next/link'
import { Pin, PhoneCall, CircleFadingPlus, Linkedin } from 'lucide-react'
import Contact from './Contact'


const contacts = [
    {
        id: 1,
        icon: <Pin size={60} fill='#00000020' />,
        title: "Address",
        desc: "Armitaj Tower",
        url: "tel:+985133564456"
    },
    {
        id: 2,
        icon: <PhoneCall size={60} fill='#00000020' />,
        title: "Phone",
        desc: "051 - 3356 4456",
        url: "tel:+985133564456"
    },
    {
        id: 3,
        icon: <CircleFadingPlus size={60} fill='#00000020' />,
        title: "Instagram",
        desc: "insta.baroque",
        url: "tel:+985133564456"
    },
    {
        id: 4,
        icon: <Linkedin size={60} fill='#00000020' />,
        title: "LinkedIn",
        desc: "insta.baroque",
        url: "tel:+985133564456"
    },
    {
        id: 5,
        icon: <Linkedin size={60} fill='#00000020' />,
        title: "LinkedIn",
        desc: "insta.baroque",
        url: "tel:+985133564456"
    },
]
const Contacts = () => {
    return (
        <div className='flex text-white text-lg  flex-col w-[100dvw] md:w-[1000px] items-center justify-center h-[100dvh]'>
            <motion.h1
                initial={{ opacity: .5, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .2 }}
                className='text-zinc-200 mb-10 text-bold text-3xl'>Contact</motion.h1>
            <motion.div
                className='grid md:grid-cols-2 md:w-[500px]'
            >
                {
                    contacts.map(({ title, desc, url, icon, id }, index) => (
                        < Contact key={index + 1} title={`${title}`} desc={`${desc}`} url={`${url}`} icon={icon} id={id} />
                    ))
                }
            </motion.div>
        </div>

    )
}

export default Contacts
