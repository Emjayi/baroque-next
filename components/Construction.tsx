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
        [0, 1000],
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
        <div key={id} className='text-white duration-300 w-[250px] md:w-[380px] hover:text-primary text-center' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {/* <Link href={`/projects/${url}`} className='hidden md:block'> */}
            <div className='hidden md:block md:w-[380px] h-[80vh]'>
                <motion.div
                    className='image-container hidden md:block w-[380px] h-[80vh]'
                    ref={ref}
                >
                    <motion.img
                        style={{ translateX: velocityFactor }}
                        whileHover={{ scaleX: 1.1, scaleY: 1.1 }}
                        transition={{ duration: .5, delay: .1 }}
                        src={mainImage} width={280} height={400} alt={alt} className='const-img h-screen object-cover grayscale hover:grayscale-0 duration-1000' />
                </motion.div>
            </div>
            {/* </Link > */}

            {/* Mobile View */}
            {/* <Link href={`/projects/${url}`} className='md:hidden'> */}
            <motion.div
                transition={{ duration: 1 }}
                className='w-[250px] h-[400px] md:hidden'
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <Image src={mainImage} width={250} height={400} alt={alt} className='object-cover w-[250px] h-[400px] grayscale hover:grayscale-0 duration-1000' />

            </motion.div>
            {/* </Link > */}

            <div className=''>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={hovered ? { y: -50, opacity: 1, backgroundColor: '#33333360', paddingBottom: "50px", color: "#999999" } : { opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, times: [0, 0.6, 1] }}
                    className='bg-black/20 absolute top-auto z-50 py-2 text-center md:w-[380px] w-[250px] font-bold text-white border-b-4 border-white/20'>
                    <motion.h1>{name}</motion.h1>
                </motion.div>
            </div>
        </div >
    )
}

export default Construction