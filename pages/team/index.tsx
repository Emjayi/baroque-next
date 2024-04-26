import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Image from 'next/image';
import PageWrapper from '../../components/PageWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';


// Import team images
// import bg from '/background.jpg';
// import top from 'team/top.png';
// import middle from 'team/middle.png';
// import back from 'team/back.png';
// import amir from '/public/team/amir.png';
// import amin from '/public/team/amin.png';
// import pedar from '/public/team/pedar.png';
// import architecter1 from '/public/team/architecter-1.png';
// import architecter2 from '/public/team/architecter-2.png';
// import backgroundLogo from '/public/team/background-logo.png';
// import behnam from '/public/team/behnam.png';
// import behzad from '/public/team/behzad.png';
// import edari1 from '/public/team/edari-1.png';
// import edari2 from '/public/team/edari-2.png';
// import farid from '/public/team/farid.png';
// import mali from '/public/team/mali.png';
// import media1 from '/public/team/media-1.png';
// import media2 from '/public/team/media-2.png';
// import media3 from '/public/team/media-3.png';
// import refaei from '/public/team/refaei.png';
// import vesal from '/public/team/vesal.png';


// const imageComponents = [
//     { src: bg, translateX: null, space: null },
//     { src: amin, translateX: 's1', space: 'left-[20vw]' },
//     { src: farid, translateX: null, space: null },
//     { src: behnam, translateX: 's1', space: null },
//     { src: mali, translateX: 's2', space: 500 },
//     { src: architecter2, translateX: 'sMinus2', space: 500 },
//     { src: edari2, translateX: null, space: 500 },
//     { src: amir, translateX: 'sMinus1', space: 500 },
//     { src: pedar, translateX: 's2', space: 500 },
//     { src: architecter1, translateX: null, space: 500 },
//     { src: backgroundLogo, translateX: null, space: 500 },
//     { src: edari1, translateX: 's1', space: 500 },
//     { src: media3, translateX: 's2', space: 500 },
//     { src: media2, translateX: null, space: 500 },
//     { src: refaei, translateX: null, space: 500 },
//     { src: behzad, translateX: null, space: 500 },
//     { src: vesal, translateX: 'sMinus2', space: 500 },
//     { src: media1, translateX: 'sMinus1', space: 500 },
// ];
const imageComponents = [
    { src: "/background.jpg", translateX: null, space: null },
    { src: '/team/back.png', translateX: 'sMinus1', space: 'left-[20vw]' },
    { src: '/team/middle.png', translateX: 'sMinus2', space: null },
    { src: "/team/top.png", translateX: 's1', space: null },
];


const Team = () => {

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const translateXValues = {
        s1: useTransform(scrollXProgress, [0, 1], [0, 20]),
        s2: useTransform(scrollXProgress, [0, 1], [0, 40]),
        s3: useTransform(scrollXProgress, [0, 1], [0, 60]),
        sMinus1: useTransform(scrollXProgress, [0, 1], [0, -10]),
        sMinus2: useTransform(scrollXProgress, [0, 1], [0, -20]),
        sMinus3: useTransform(scrollXProgress, [0, 1], [0, -60]),
    };

    return (
        <PageWrapper pageName='Team'>
            <div className='flex w-[480vw] md:w-[120vw] h-full'>
                <div className='stack object-fill' ref={ref}>
                    {imageComponents.map(({ src, translateX, space }, index) => (
                        <>
                            <motion.div
                                key={index}
                                style={{ translateX: translateXValues[translateX] }}
                                className='stack h-full w-full '
                            >
                                <img alt="alternative" src={src} width={4500} height={1844} className='h-screen object-cover' loading='eager' />
                            </motion.div>
                        </>
                    ))}
                </div>
                <div className='w-64'>Hello world</div>
            </div>
        </PageWrapper>
    );
};

export default Team;