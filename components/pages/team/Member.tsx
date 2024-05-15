"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const Member = ({ firstName, lastName, img, pos, year }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            whileHover={{ width: 400 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ backgroundImage: `url(${img})` }}
            className='w-[200px] grayscale hover:grayscale-0 uppercase bg-cover bg-center bg-primary duration-700 h-screen flex flex-col items-start'>
            <AnimatePresence>
                {hovered &&
                    <motion.div
                        className='flex flex-col ml-10 mt-10 items-start justify-start'
                    >
                        <motion.h1
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            className='text-bold text-xl'
                        >{firstName}</motion.h1>
                        <motion.h1
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            className='text-bold text-3xl'
                        >{lastName}</motion.h1>
                        <motion.h2
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            className='text-zinc-600'
                            transition={{ delay: .2 }}
                        >{pos}</motion.h2>
                        <motion.h2
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ delay: .4 }}
                            className='text-zinc-600'
                        >{year}</motion.h2>
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default Member