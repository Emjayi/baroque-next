import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import Image from 'next/image';
import background1 from '/public/background1.avif';
import background from '/public/background.avif';
import back from '/public/team/back.avif';
import middle from '/public/team/middle.avif';
import top from '/public/team/top.avif';

const imageComponents = [
    { src: background1, translateX: 's1', skew: 'skew1' },
    { src: background },
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
    const { scrollXProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const translateXValues = {
        s1: useTransform(scrollXProgress, [0, 1], [0, 60]),
        sMinus1: useTransform(scrollXProgress, [0, 1], [0, -50]),
        s3: useTransform(scrollXProgress, [0, 1], [0, 120]),
        skew1: useTransform(scrollXProgress, [0, 1], [0, -5]),
    };

    return (
        <div className="flex w-[480vw] md:w-[110vw] h-[100dvh] mr-24" ref={ref}>
            <div className="stack object-fill">
                {/* Preload critical images */}
                <Image
                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    src={background1}
                    alt="Background 1"
                    width={2200}
                    height={1600}
                    priority
                    className="h-[100dvh] w-[480vw] object-cover"
                />

                {/* Load the parallax images */}
                {imageComponents.map(({ src, translateX, skew }, index) => (
                    <motion.div
                        key={index}
                        initial={{ translateX: translateXValues[translateX] }}
                        style={{ translateX: translateXValues[translateX], skewX: translateXValues[skew] }}
                        className="stack h-[100dvh] w-full saturate-150"
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
            </div>
        </div>
    );
};

export default TeamImage;
