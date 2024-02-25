import { AnimatePresence, motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const Project = ({ id, title, slug, mainImage, description }: any) => {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);

    // get scroll pos
    const { scrollX } = useScroll();

    // skew animation
    const scrollVelocity = useVelocity(scrollX);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 180,
        stiffness: 600
    });
    const velocityFactor = useTransform(
        smoothVelocity,
        [-1000, 1000],
        [-8, 8]);

    // parallax effect
    const parallax = useTransform(smoothVelocity, [-1000, 1000], [-100, 100]);

    return (
        <div key={id} className=' text-white duration-300 hover:text-primary text-center' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Link href={`/projects/${slug.current}`}>
                <motion.div
                    style={{ skewX: velocityFactor, x: parallax }}
                    whileHover={{ y: -20 }}
                    transition={{ duration: 1 }}
                    className='w-[300px]'
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                >
                    <img src={mainImage} width={1500} height={1000} alt='placeHolder' className=' object-contain grayscale hover:grayscale-0 duration-1000' />

                </motion.div>
                <motion.div
                    style={{ skewX: velocityFactor, x: parallax }}
                    animate={active ? { y: 20 } : { y: 0 }}
                    transition={{ duration: 1 }}
                    className='w-[300px]'
                >
                    <img src={mainImage} width={300} height={100} alt='shadow' className='absolute rotate-180 opacity-5 grayscale object-contain' />
                </motion.div>
                <div className=''>

                    <AnimatePresence>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ x: parallax }}
                            transition={{ duration: 0.2 }}

                        >{title}</motion.h1>
                    </AnimatePresence>



                    {/* {hovered && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .5 }}
                                className=' absolute w-[300px] text-white'>
                                <h1><motion.span>type: </motion.span>commercial</h1>
                                <p>lorem ipsum...</p>
                            </motion.div>
                        )} */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ x: parallax }}
                        transition={{ duration: .5 }}
                        className='flex absolute w-[300px] text-zinc-400 text-sm justify-center gap-4'>
                        <h1>
                            <AnimatePresence>
                                {hovered ? <motion.span initial={{ opacity: 0, x: 0 }}
                                    animate={{ opacity: 1, x: -35 }}
                                    exit={{ opacity: 0, x: 0 }}
                                    transition={{ duration: .5, delay: 1 }} className='absolute text-zinc-600'>Type:</motion.span> : null}
                            </AnimatePresence>
                            <motion.span
                                animate={hovered ? { paddingRight: 25 } : { paddingRight: 0 }}
                                style={hovered && {}}
                                exit={{ opacity: 0, paddingLeft: 0 }}
                                transition={{ duration: .5, delay: 1 }} className='relative text-zinc-400'>Commercial</motion.span></h1>
                        <h1>
                            <AnimatePresence>
                                {hovered ? <motion.span initial={{ opacity: 0, x: 0 }}
                                    animate={{ opacity: 1, x: -35 }}
                                    exit={{ opacity: 0, x: 0 }}
                                    transition={{ duration: .7, delay: 1 }} className='absolute text-zinc-600'>Date: </motion.span> : null}
                            </AnimatePresence>
                            <motion.span
                                animate={hovered ? { paddingRight: 30 } : { paddingRight: 0 }}
                                style={hovered && {}}
                                exit={{ opacity: 0, paddingLeft: 0 }}
                                transition={{ duration: .5, delay: 1 }} className='relative text-zinc-400'>2016</motion.span></h1>
                        <h1>
                            <AnimatePresence>
                                {hovered ? <motion.span initial={{ opacity: 0, x: 0 }}
                                    animate={{ opacity: 1, x: -42 }}
                                    exit={{ opacity: 0, x: 0 }}
                                    transition={{ duration: .85, delay: 1 }} className='absolute text-zinc-600'>Status: </motion.span> : null}
                            </AnimatePresence>
                            completed</h1>
                    </motion.div>



                </div>

            </Link >
        </div >
    )
}

export default Project