import { AnimatePresence, motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import Image from 'next/image';

// Construction component
const Construction = ({ id, name, alt, url, blur, mainImage, status, gallery, type, year }: any) => {
    // State for hover and active states
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);

    // Ref for scroll animation
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const translateX = useTransform(
        scrollXProgress,
        // Map x from these values:
        [0, 100],
        // Into these values:
        ["-15%", "15%"]
    );

    // Scroll animation
    const { scrollX } = useScroll();

    const scrollVelocity = useVelocity(scrollX);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 180,
        stiffness: 600
    });
    const velocityFactor = useTransform(
        smoothVelocity,
        [-450, 450],
        [-40, 40]);

    return (
        <div key={id} className='text-white duration-300 w-[300px] md:w-[380px] hover:text-primary text-center' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

            {/* Desktop View */}
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

            {/* Mobile View */}
            <motion.div
                transition={{ duration: 1 }}
                className='w-[300px] h-[70vh] md:hidden'
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <Image src={mainImage} width={250} height={400} alt={alt} className='object-cover w-[300px] h-[70vh] grayscale hover:grayscale-0 duration-1000' />
            </motion.div>

            <div className=''>
                {/* Animated info box */}
                <motion.div
                    initial={{ height: "40px" }}
                    animate={hovered ? { y: 0, opacity: 1, backgroundColor: '#000', height: "100px", color: "#999999" } : { height: "40px" }}
                    transition={{ duration: 0.5, times: [0, 0.6, 1] }}
                    className='bg-black/50 absolute top-0 z-50 py-2 text-center md:w-[380px] w-[300px] font-bold text-white border-b-4 border-white/20'>
                    <motion.h1 className={hovered && "text-primary"}>{name}</motion.h1>

                    {/* Show additional info on hover */}
                    {hovered &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: .2 }}
                        >
                            <motion.h1>{year}</motion.h1>
                            <motion.h1>{status}</motion.h1>
                        </motion.div>}
                </motion.div>
            </div>
        </div>
    );
};

export default Construction;
