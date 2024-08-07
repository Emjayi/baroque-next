"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const Member = ({ firstName, lastName, img, pos }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <>
            {/*Mobile*/}
            <motion.div
                whileInView={{ filter: "grayScale(0)", transition: { delay: .5, duration: 1.2 } }}
                onViewportEnter={() => setHovered(true)}
                onViewportLeave={() => setHovered(false)}
                style={{ backgroundImage: `url(${img})` }}
                className='md:hidden w-[100dvw] grayscale uppercase bg-cover bg-center bg-primary h-[100dvh] flex flex-col items-start'>
                <AnimatePresence>
                    {hovered &&
                        <motion.div
                            className='flex flex-col md:ml-10 mr-10 pr-6 mt-10 items-end md:items-start justify-start w-full'
                        >
                            <motion.h1
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0 }}
                                transition={{ delay: .8 }}
                                className='text-bold text-xl'
                            >{firstName}</motion.h1>
                            <motion.h1
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0 }}
                                transition={{ delay: 1 }}
                                className='text-bold text-3xl'
                            >{lastName}</motion.h1>

                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div>

            {/*Desktop*/}
            <motion.div
                whileHover={{ width: 400 }}
                // whileInView={{ width: 600, transition: { delay: .1, duration: .5 } }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ backgroundImage: `url(${img})` }}
                className='hidden w-[200px] grayscale hover:grayscale-0 uppercase bg-cover bg-center bg-primary duration-700 h-[100dvh] md:flex flex-col items-start'>
                <AnimatePresence>
                    {hovered &&
                        <motion.div
                            className='flex flex-col ml-10 mt-10 items-start justify-start'
                        >
                            <motion.h1
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0, transition: { delay: .1 } }}
                                transition={{ delay: .2 }}
                                className='text-bold text-xl'
                            >{firstName}</motion.h1>
                            <motion.h1
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0, transition: { delay: .2 } }}
                                transition={{ delay: .1 }}
                                className='text-bold text-3xl'
                            >{lastName}</motion.h1>
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
        </>
    )
}

export default Member
