import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Link from 'next/link'
import { Pin, PhoneCall, CircleFadingPlus, Linkedin } from 'lucide-react'
import Contact from './Contact'
import { ReactSocialMediaIcons } from 'react-social-media-icons';


const contacts = [
    {
        id: 1,
        icon: <Pin size={44} fill='#00000020' />,
        title: "Address",
        desc: "Armitaj Office Tower",
        url: "https://maps.app.goo.gl/WkzcqZ9Mxesh17uX6"
    },
    {
        id: 2,
        icon: <PhoneCall width={50} size={38} fill='#00000020' />,
        title: "Phone",
        desc: "051 - 3833 9271",
        url: "tel:+985138339271"
    },
    {
        id: 3,
        icon: < ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="instagram"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="transparent"
            url="https://www.instagram.com/baroquecgp"
            size={50}
        />,
        title: "Instagram",
        desc: "@baroquecgp",
        url: "https://www.instagram.com/baroquecgp"
    },
    {
        id: 3,
        icon: < ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="send"
            iconColor="rgba(255,255,255,1)"
            url="https://t.me/+989153800305"
            backgroundColor="transparent"
            size={50}
        />,
        title: "Telegram",
        desc: "Baroque CGP",
        url: "https://t.me/+989153800305"
    },
    {
        id: 3,
        icon: < ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="whatsapp"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="transparent"
            url="https://wa.me/+989153800305"
            size={50}
        />,
        title: "WhatsApp",
        desc: "915 380 0305",
        url: "https://wa.me/+989153800305"
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
                className='grid md:grid-cols-2 md:w-[600px]'
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
