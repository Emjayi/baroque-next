import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const FirstImage = ({ src, priority }: { src: string, priority: boolean }) => {

    // Image loading effect
    const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#00000000" offset="20%" />
        <stop stop-color="#44444430" offset="50%" />
        <stop stop-color="#00000000" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#00000020" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
    const toBase64 = (str: string) =>
        typeof window === "undefined"
            ? Buffer.from(str).toString("base64")
            : window.btoa(str);


    const ref = useRef(null);
    const { scrollXProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
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
        <div className='w-[1200px] md:w-[1400px]'>
            <motion.div
                className='overflow-hidden md:w-[1400px] h-[100dvh]'
                ref={ref}
            >
                <motion.div
                    style={{ translateX: velocityFactor }}
                    className=' h-[100dvh]'>
                    <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                        width={3600}
                        height={2400}
                        src={src} priority={priority} className='-ml-16 scale scale-125 object-cover ' alt='about baroque'></Image>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default FirstImage