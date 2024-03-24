import { AnimatePresence, motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import Link from 'next/link'
import React, { useState, useRef } from 'react'
import Image from 'next/image'

const Construction = ({ id, name, alt, url, blur, mainImage, status, gallery, type, year }: any) => {

    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const translateX = useTransform(
        scrollXProgress,
        // Map x from these values:
        [0, 1],
        // Into these values:
        ["15%", "-15%"]
    );

    // scroll animation
    const { scrollX } = useScroll();

    const scrollVelocity = useVelocity(scrollX);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 180,
        stiffness: 600
    });
    const velocityFactor = useTransform(
        smoothVelocity,
        [-100, 100],
        [-40, 40])


    return (
        <div key={id} className='text-white duration-300 w-[150px] md:w-[380px] hover:text-primary text-center' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Link href={`/projects/${url}`} className='hidden md:block'>
                <div className='hidden md:block w-[380px] h-[60vh]'>
                    <motion.div
                        className='image-container hidden md:block w-[380px] h-[60vh]'
                        ref={ref}
                    >
                        <motion.img
                            style={{ translateX: velocityFactor }}
                            whileHover={{ scaleX: 1.1, scaleY: 1.1 }}
                            transition={{ duration: .5, delay: .1 }}
                            src={mainImage} width={280} height={400} alt={alt} className='const-img h-screen object-cover grayscale hover:grayscale-0 duration-1000' />
                    </motion.div>
                </div>
            </Link >

            {/* Mobile View */}
            <Link href={`/projects/${url}`} className='md:hidden'>
                <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ duration: 1 }}
                    className='w-[150px] md:hidden'
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                >
                    <Image src={mainImage} width={150} height={100} alt={alt} className='object-contain grayscale hover:grayscale-0 duration-1000' />

                </motion.div>
            </Link >

            <div className=''>

                <motion.div
                    initial={{ opacity: 1, y: -70 }}
                    animate={hovered ? { y: -60, opacity: 1 } : { opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .7, delay: .3 }}
                    className='bg-primary absolute bottom-0 z-50 py-6 text-center w-[380px] font-bold text-white border-b-4 border-t-4 border-zinc-900'>
                    <motion.h1>{year}</motion.h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 1, y: 40 }}
                    animate={hovered ? { y: 20, opacity: 1 } : { opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='bg-primary absolute top-0 z-50 py-12 text-center w-[380px] font-bold text-white  border-b-4 border-zinc-900'>
                    <motion.h1>{name}</motion.h1>
                </motion.div>

                {/* Mobile View Details */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}

                    transition={{ duration: .5 }}
                    className='flex-col md:hidden w-full md:w-[300px] text-zinc-400 text-sm justify-center gap-4'>
                    <h1>
                        <motion.span initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, }}
                            exit={{ opacity: 0, x: 0 }}
                            transition={{ duration: .5, delay: .2 }} className='text-zinc-400 font-bold'>Type:</motion.span>

                        <motion.span
                            animate={hovered ? { paddingRight: 25 } : { paddingRight: 0 }}
                            style={hovered && {}}
                            exit={{ opacity: 0, paddingLeft: 0 }}
                            transition={{ duration: .5, delay: .2 }} className='text-zinc-200 font-bold'> {type}</motion.span></h1>
                    <h1>
                        <AnimatePresence>
                            <motion.span initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: -35 }}
                                exit={{ opacity: 0, x: 0 }}
                                transition={{ duration: .7, delay: .2 }} className='text-zinc-400 font-bold'>Year:</motion.span>
                        </AnimatePresence>
                        <motion.span
                            animate={hovered ? { paddingRight: 30 } : { paddingRight: 0 }}
                            style={hovered && {}}
                            exit={{ opacity: 0, paddingLeft: 0 }}
                            transition={{ duration: .5, delay: .2 }} className='text-zinc-200 font-bold'> {year}</motion.span></h1>
                    <h1>
                        <AnimatePresence>
                            <motion.span initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: -42 }}
                                exit={{ opacity: 0, x: 0 }}
                                transition={{ duration: .75, delay: .2 }} className='text-zinc-400 font-bold'>Status:</motion.span>
                        </AnimatePresence>
                        <span className='text-zinc-200 font-bold'> {status}</span></h1>
                </motion.div>



            </div>
        </div >
    )
}

export default Construction