import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const AboutPic = ({ src }: { src: StaticImport }) => {
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
        ["14%", "-14%"]
    );
    // scroll animation
    const { scrollX } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // const scrollVelocity = useVelocity(scrollX);
    const smoothVelocity = useSpring(scrollX, {
        damping: 600,
        stiffness: 1200
    });
    const velocityFactor = useTransform(
        smoothVelocity,
        [-10000, 10000],
        [-800, 800]);
    // const revVelocityFactor = useTransform(
    //     smoothVelocity,
    //     [-1000, 1000],
    //     [4, -4]);

    return (
        <div className=' w-[1000px] h-screen'>
            <motion.div
                className='overflow-hidden w-[1000px] h-screen'
                ref={ref}
            >
                <motion.div
                    style={{ translateX: velocityFactor }}
                    className='h-screen object-cover'>
                    <Image src={src} className='-ml-16 h-screen scale-125 min-w-[1000px] object-cover' alt='about baroque'></Image>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default AboutPic