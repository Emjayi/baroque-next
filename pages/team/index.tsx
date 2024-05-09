"use client"
import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Image from 'next/image';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { url } from 'inspector';
import Member from '../../components/pages/team/Member';
import TeamImage from '../../components/pages/team/TeamImage';


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

const team = [
    { lastName: "Roshanaee", firstName: "Hasan", pos: "CEO", year: 2008, img: "/team/0.jpg" },
    { lastName: "Roshanaee", firstName: "Behzad", pos: "Architect", year: 2012, img: "/team/1.jpg" },
    { lastName: "Roshanaee", firstName: "Behnam", pos: "Social", year: 2015, img: "/team/3.jpg" },
    { lastName: "Bagherpour", firstName: "Amir", pos: "Architect", year: 2020, img: "/team/4.jpg" },
    { lastName: "Motevali", firstName: "Amin", pos: "Media", year: 2018, img: "/team/2.jpg" },
    { lastName: "Farid", firstName: "Amirreza", pos: "Architect", year: 2013, img: "/team/8.jpg" },
    { lastName: "Moezi", firstName: "Vesal", pos: "Architect", year: 2014, img: "/team/5.jpg" },
    { lastName: "Roshanaee", firstName: "Amir", pos: "Architect", year: 2015, img: "/team/6.jpg" },
    { lastName: "Roshanaee", firstName: "Reza", pos: "Architect", year: 2009, img: "/team/7.jpg" },
    { lastName: "Roshanaee", firstName: "Alireza", pos: "Architect", year: 2012, img: "/team/9.jpg" },
    { lastName: "Roshanaee", firstName: "Alireza", pos: "Architect", year: 2012, img: "/team/10.jpg" },
    { lastName: "Roshanaee", firstName: "Alireza", pos: "Architect", year: 2012, img: "/team/11.jpg" },
    { lastName: "Roshanaee", firstName: "Alireza", pos: "Architect", year: 2012, img: "/team/12.jpg" },
    { lastName: "Roshanaee", firstName: "Alireza", pos: "Architect", year: 2012, img: "/team/13.jpg" },
    { lastName: "Roshanaee", firstName: "Alireza", pos: "Architect", year: 2012, img: "/team/14.jpg" },
    { lastName: "Roshanaee", firstName: "Alireza", pos: "Architect", year: 2012, img: "/team/15.jpg" },
    { lastName: "Roshanaee", firstName: "Alireza", pos: "Architect", year: 2012, img: "/team/16.jpg" },
]


const Team = () => {

    const [hovered, setHovered] = useState(false)

    return (
        <PageWrapper pageName='Team'>
            <div className='flex'>
                <TeamImage />
                <div className='h-screen flex'>
                    {team.map(({ firstName, lastName, pos, img, year }, index) => (
                        <Member firstName={firstName} lastName={lastName} key={index + 1} img={img} year={year} pos={pos} />
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
};

export default Team;