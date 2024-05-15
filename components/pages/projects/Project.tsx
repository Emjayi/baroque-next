import { AnimatePresence, motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const Project = ({ id, name, alt, url, blur, mainImage, status, gallery, type, year }: any) => {
    const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

    const toBase64 = (str: string) =>
        typeof window === "undefined"
            ? Buffer.from(str).toString("base64")
            : window.btoa(str);

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
        [-4, 4]);
    const revVelocityFactor = useTransform(
        smoothVelocity,
        [-1000, 1000],
        [4, -4]);

    // parallax effect
    const parallax = useTransform(smoothVelocity, [-1000, 1000], [10, -10]);
    const revParallax = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]);

    return (
        <motion.div key={id} className='text-white duration-300 w-[250px] md:w-[280px] hover:text-primary text-center'>

            <Link href={`/projects/${url}`} className='hidden md:block'>
                <motion.div
                    style={{ skewX: velocityFactor, x: parallax }}
                    whileHover={{ y: -20 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                    className='hidden md:block w-[280px] h-[400px]'
                    onMouseEnter={() => { setActive(true), setHovered(true) }}
                    onMouseLeave={() => { setActive(false), setHovered(false) }}
                >
                    <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                        src={mainImage}
                        width={280}
                        height={400}
                        alt={alt}
                        className='w-[280px] h-[400px] object-cover grayscale hover:grayscale-0 duration-1000' />
                </motion.div>
            </Link >

            <motion.div
                style={{ skewX: revVelocityFactor, x: revParallax }}
                animate={active ? { y: 20 } : { y: 0 }}
                transition={{ duration: 1 }}
                className='hidden md:block w-[280px]'
            >
                <Image src={mainImage} width={280} height={100} alt='shadow' className='absolute rotate-180 blur-sm opacity-5 grayscale object-contain' />
            </motion.div>

            {/* Mobile View */}
            <Link href={`/projects/${url}`} className='md:hidden'>
                <motion.div
                    style={{ skewX: velocityFactor, x: parallax }}
                    transition={{ duration: 1 }}
                    className='w-[250px] md:hidden h-[400px]'
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                >
                    <Image src={mainImage} width={250} height={200} alt={alt} className='object-cover w-[250px] h-[400px] grayscale hover:grayscale-0 duration-1000' />

                </motion.div>
            </Link >
            <motion.div
                style={{ skewX: revVelocityFactor, x: revParallax }}
                animate={active ? { y: 20 } : { y: 0 }}
                transition={{ duration: 1 }}
                className='w-[250px] md:hidden'
            >
                <Image src={mainImage} width={250} height={100} alt='shadow' className='absolute rotate-180 h-[200px] blur-sm opacity-5 grayscale object-cover' />
            </motion.div>
            <motion.div className=''>

                <AnimatePresence>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={hovered ? { y: -10, opacity: 1 } : { opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ x: parallax }}
                        transition={{ duration: 0.2 }}
                        className='pt-5 font-bold text'
                    >{name}</motion.h1>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ x: parallax }}
                    transition={{ duration: .5 }}
                    className='md:flex hidden w-[280px] text-zinc-400 text-sm justify-center gap-4'>
                    <h1>
                        <AnimatePresence>
                            {hovered ? <motion.span initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: -29 }}
                                exit={{ opacity: 0, x: 0 }}
                                transition={{ duration: .4, delay: .2 }} className='absolute text-primary/80 font-bold'>Type</motion.span> : null}
                        </AnimatePresence>
                        <motion.span
                            animate={hovered ? { paddingRight: 25 } : { paddingRight: 0 }}
                            style={hovered && {}}
                            exit={{ opacity: 0, paddingLeft: 0 }}
                            transition={{ duration: .5, delay: .2 }} className=' font-bold'>{type}</motion.span></h1>
                    <h1>
                        <AnimatePresence>
                            {hovered ? <motion.span initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: -30 }}
                                exit={{ opacity: 0, x: 0 }}
                                transition={{ duration: .5, delay: .2 }} className='absolute text-primary/80 font-bold'>Year</motion.span> : null}
                        </AnimatePresence>
                        <motion.span
                            animate={hovered ? { paddingRight: 30 } : { paddingRight: 0 }}
                            style={hovered && {}}
                            exit={{ opacity: 0, paddingLeft: 0 }}
                            transition={{ duration: .5, delay: .2 }} className=' font-bold'>{year}</motion.span></h1>
                    <h1>
                        <AnimatePresence>
                            {hovered ? <motion.span initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: -40 }}
                                exit={{ opacity: 0, x: 0 }}
                                transition={{ duration: .5, delay: .2 }} className='absolute text-primary/80 font-bold'>Status</motion.span> : null}
                        </AnimatePresence>
                        <span className='font-bold'> {status}</span></h1>
                </motion.div>

                {/* Mobile View Details */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ x: parallax }}
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
            </motion.div>
        </motion.div >
    )
}

export default Project