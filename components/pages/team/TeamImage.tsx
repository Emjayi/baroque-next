import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'
import Image from 'next/image'

const imageComponents = [
    { src: "/background1.avif", translateX: "s1", skew: "skew1" },
    { src: "/background.avif", translateX: "sMinus1" },
    { src: '/team/back.png', translateX: 's3' },
    { src: '/team/middle.png', translateX: "s1" },
    { src: "/team/top.png", translateX: 'sMinus1' },
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
    <rect width="${w}" height="${h}" fill="#00000020" border-radius="8px" />
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
        s1: useTransform(scrollXProgress, [0, 1], [0, 60]),
        sMinus1: useTransform(scrollXProgress, [0, 1], [0, -50]),
        s3: useTransform(scrollXProgress, [0, 1], [0, 120]),
        skew1: useTransform(scrollXProgress, [0, 1], [0, -5]),
    };

    const [hasPlaceholder, setHasPlaceholder] = useState(true)

    return (
        <div className='flex w-[480vw] md:w-[110vw] h-[100dvh] mr-24' ref={ref}>
            <div className='stack object-fill'>
                {hasPlaceholder && (
                    <div className='h-[100dvh] w-full saturate-150'>
                        <Image
                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                            src={"/team/placeholder.png"}
                            alt="team"
                            width={800} height={500}
                            priority={true}
                            className='h-[100dvh] object-cover'
                        />
                    </div>
                )}
                {imageComponents.map(({ src, translateX, skew }, index) => (
                    <motion.div
                        key={index}
                        initial={{ translateX: translateXValues[translateX] }}
                        style={{ translateX: translateXValues[translateX], skewX: translateXValues[skew] }}
                        className='stack h-[100dvh] w-full saturate-150'
                    >
                        <Image
                            alt="alternative" priority={true} src={src} width={2200} height={1600} className='h-[100dvh] w-[480vw] z-1000 object-cover' />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default TeamImage