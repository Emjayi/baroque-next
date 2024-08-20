import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import Image from 'next/image';
import background from '/public/background.jpg';
import back from '/public/team/back.avif';
import middle from '/public/team/middle.avif';
import top from '/public/team/top.avif';
import placeholder from '/public/team/placeholder.png'

const imageComponents = [
    { src: back, translateX: 's3' },
    { src: middle, translateX: 's1' },
    { src: top, translateX: 'sMinus1' },
];

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
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`;
const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const TeamImage = () => {
    const ref = useRef(null);
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
        [-10000, 9000],
        [-400, 350]);
    const translateXValues = {
        s1: useTransform(smoothVelocity, [-10000, 8000], [200, -180]),
        sMinus1: useTransform(smoothVelocity, [-10000, 8000], [400, -320]),
        s3: useTransform(smoothVelocity, [-10000, 8000], [100, -110]),
        skew1: useTransform(smoothVelocity, [-10000, 8000], [-700, 500]),
    }

    return (
        <div className="flex overflow-hidden w-[420vw] md:w-[110vw] h-[100dvh] " ref={ref}>
            <motion.div className="overflow-hidden stack w-full " style={{ translateX: velocityFactor, backgroundImage: `url(${placeholder})` }} ref={ref}>
                {/* Preload critical images */}
                <Image
                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    src={background}
                    alt="Background 1"
                    width={2200}
                    height={1600}
                    priority
                    className="h-[100dvh] w-[480vw] object-cover"
                />

                {/* Load the parallax images */}
                {imageComponents.map(({ src, translateX }, index) => (
                    <motion.div
                        key={index}
                        initial={{ translateX: translateXValues[translateX] }}
                        style={{ translateX: translateXValues[translateX] }}
                        className="stack h-[100dvh] w-full saturate-150 "
                    >
                        <Image
                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(200, 175))}`}
                            alt="alternative"
                            priority
                            src={src}
                            className="h-[100dvh] w-[480vw] z-1000 object-cover"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div >
    );
};

export default TeamImage;
