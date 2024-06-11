import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image'

const imageComponents = [
    { src: "/background1.png", translateX: "s1", proiority: true, skew: "skew1" },
    { src: "/background.png", translateX: "sMinus1", proiority: true },
    { src: '/team/back.png', translateX: 's3', proiority: false },
    { src: '/team/middle.png', translateX: "s1", proiority: true },
    { src: "/team/top.png", translateX: 'sMinus1', proiority: false },
];

const TeamImage = () => {

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

    const translateXValues = {
        s0: useTransform(scrollXProgress, [-1, 1], [-200, 120]),
        s1: useTransform(scrollXProgress, [0, 1], [0, 80]),
        s2: useTransform(scrollXProgress, [0, 1], [0, 140]),
        s3: useTransform(scrollXProgress, [0, 1], [0, 180]),
        sMinus0: useTransform(scrollXProgress, [0, 1], [10, -30]),
        sMinus1: useTransform(scrollXProgress, [0, 1], [0, -60]),
        sMinus2: useTransform(scrollXProgress, [0, 1], [0, -90]),
        sMinus3: useTransform(scrollXProgress, [0, 1], [0, -120]),
        skew1: useTransform(scrollXProgress, [0, 1], [0, -8]),
    };

    return (
        <div className='flex w-[480vw] md:w-[140vw] h-[100dvh] mr-24' ref={ref}>
            <div className='stack object-fill'>
                {imageComponents.map(({ src, translateX, proiority, skew }, index) => (
                    <motion.div
                        key={index}
                        initial={{ translateX: translateXValues[translateX] }}
                        style={{ translateX: translateXValues[translateX], skewX: translateXValues[skew] }}
                        className='stack h-[100dvh] w-full saturate-150'
                    >
                        <Image
                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                            alt="alternative" priority={proiority} src={src} width={2500} height={1044} className='h-[100dvh] object-cover' />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default TeamImage