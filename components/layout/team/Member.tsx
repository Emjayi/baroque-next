"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const Member = ({ name, img, pos, year }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            // initial={{ x: pos }}
            whileHover={{ width: 400 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ backgroundImage: `url(${img})` }}
            className='w-[200px] grayscale hover:grayscale-0 uppercase bg-cover bg-center bg-primary duration-700 h-screen flex flex-col items-center'>
            <AnimatePresence>
                {hovered &&
                    <motion.div
                        className='flex-col items-center'
                    >
                        <motion.h1
                            initial={{ y: -50 }}
                            animate={{ y: 0 }}
                            exit={{ y: -50 }}
                        >{name}</motion.h1>
                        <motion.h1
                            initial={{ y: -100, x: -50 }}
                            animate={{ y: 0 }}
                            exit={{ y: -100 }}
                            transition={{ delay: .2 }}
                        >{pos}</motion.h1>
                        <motion.h1
                            initial={{ y: -150, x: 50 }}
                            animate={{ y: -25 }}
                            exit={{ y: -150 }}
                            transition={{ delay: .4 }}
                        >{year}</motion.h1>
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default Member
