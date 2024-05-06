"use client"
import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Image from 'next/image';
import PageWrapper from '../../components/PageWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { url } from 'inspector';
import Member from '../../components/layout/team/Member';


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
    { src: "/background1.png", translateX: "s0", space: null },
    { src: "/background.png", translateX: "sMinus0", space: null },
    { src: '/team/back.png', translateX: 's3', space: 'left-[20vw]' },
    { src: '/team/middle.png', translateX: "s0", space: null },
    { src: "/team/top.png", translateX: 'sMinus1', space: null },
];

const team = [
    { name: "Pedar", pos: "CEO", year: 2008, img: "/team/0.jpg" },
    { name: "Sahar", pos: "Architect", year: 2012, img: "/team/1.jpg" },
    { name: "Elham", pos: "Social", year: 2015, img: "/team/2.jpg" },
    { name: "Behnoosh", pos: "Architect", year: 2020, img: "/team/3.jpg" },
    { name: "Mehrsa", pos: "Media", year: 2018, img: "/team/4.jpg" },
    { name: "Amin", pos: "Architect", year: 2014, img: "/team/5.jpg" },
    { name: "Amir", pos: "Architect", year: 2015, img: "/team/6.jpg" },
    { name: "Reza", pos: "Architect", year: 2009, img: "/team/7.jpg" },
    { name: "Iman", pos: "Architect", year: 2013, img: "/team/8.jpg" },
    { name: "Alireza", pos: "Architect", year: 2012, img: "/team/9.jpg" },
    { name: "Alireza", pos: "Architect", year: 2012, img: "/team/10.jpg" },
    { name: "Alireza", pos: "Architect", year: 2012, img: "/team/11.jpg" },
    { name: "Alireza", pos: "Architect", year: 2012, img: "/team/12.jpg" },
    { name: "Alireza", pos: "Architect", year: 2012, img: "/team/13.jpg" },
    { name: "Alireza", pos: "Architect", year: 2012, img: "/team/14.jpg" },
    { name: "Alireza", pos: "Architect", year: 2012, img: "/team/15.jpg" },
    { name: "Alireza", pos: "Architect", year: 2012, img: "/team/16.jpg" },
]


const Team = () => {

    const [hovered, setHovered] = useState(false)

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
        <PageWrapper pageName='Team'>
            <div className='flex'>
                <div className='flex w-[480vw] md:w-[140vw] h-full mr-24' ref={ref}>
                    <div className='stack object-fill'>
                        <>
                            {imageComponents.map(({ src, translateX, space }, index) => (
                                <>
                                    <motion.div
                                        key={index}
                                        initial={{ translateX: translateXValues[translateX] }}
                                        style={{ translateX: translateXValues[translateX] }}
                                        className='stack h-full w-full saturate-150'
                                    >
                                        <Image alt="alternative" src={src} width={4500} height={1844} className='h-screen object-cover' loading='eager' />
                                    </motion.div>
                                </>
                            ))}
                            {/* {team.map(({ name, pos }) => (

                            <motion.div
                                initial={{ x: pos, y: "50vh" }}
                                whileHover={{ width: 300 }}
                                className='w-[200px] hidden uppercase bg-primary duration-700 h-[50vh] md:flex flex-col items-center z-50'>{name}</motion.div>
                        ))} */}
                        </>
                    </div>
                </div>
                <div className='h-screen flex'>
                    {team.map(({ name, pos, img, year }, index) => (
                        <Member name={name} key={index + 1} img={img} year={year} pos={pos} />
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
};

export default Team;