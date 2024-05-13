import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image'

const imageComponents = [
    { src: "/background1.png", translateX: "s0", space: null },
    { src: "/background.png", translateX: "sMinus0", space: null },
    { src: '/team/back.png', translateX: 's3', space: 'left-[20vw]' },
    { src: '/team/middle.png', translateX: "s0", space: null },
    { src: "/team/top.png", translateX: 'sMinus1', space: null },
];

const TeamImage = () => {



    const ref = useRef(null);
    const { scrollXProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const translateXValues = {
        s0: useTransform(scrollXProgress, [0, 1], [-30, 40]),
        s1: useTransform(scrollXProgress, [0, 1], [0, 80]),
        s2: useTransform(scrollXProgress, [0, 1], [0, 140]),
        s3: useTransform(scrollXProgress, [0, 1], [0, 180]),
        sMinus0: useTransform(scrollXProgress, [0, 1], [10, -30]),
        sMinus1: useTransform(scrollXProgress, [0, 1], [0, -60]),
        sMinus2: useTransform(scrollXProgress, [0, 1], [0, -90]),
        sMinus3: useTransform(scrollXProgress, [0, 1], [0, -120]),
    };

    return (
        <div className='flex w-[480vw] md:w-[140vw] h-full mr-24' ref={ref}>
            <div className='stack object-fill'>
                {imageComponents.map(({ src, translateX }, index) => (
                    <motion.div
                        key={index}
                        initial={{ translateX: translateXValues[translateX] }}
                        style={{ translateX: translateXValues[translateX] }}
                        className='stack h-full w-full saturate-150'
                    >
                        <Image alt="alternative" src={src} width={2500} height={1044} className='h-screen object-cover' loading='eager' />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default TeamImage