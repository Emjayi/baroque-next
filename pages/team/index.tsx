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
import { team } from '../../lib/data.js';
import Head from 'next/head';


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

const Team = () => {

    return (
        <>
            <Head>
                <title>Baroque - Team</title>
                <meta name="description" content="Meet the dedicated team behind Baroque, the experts driving our construction projects." />
                <meta name="keywords" content="Baroque, team, construction, experts" />
                <meta name="author" content="Baroque Team" />
                <meta property="og:title" content="Baroque - Team" />
                <meta property="og:description" content="Meet the dedicated team behind Baroque, the experts driving our construction projects." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Baroque" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Baroque - Team" />
                <meta name="twitter:description" content="Meet the dedicated team behind Baroque, the experts driving our construction projects." />
            </Head>
            <PageWrapper pageName='Team'>
                <TeamImage />
                <div className='flex'>
                    {team.map(({ firstName, lastName, pos, img }, index) => (
                        <Member firstName={firstName} lastName={lastName} key={index + 1} img={img} pos={pos} />
                    ))}
                </div>
            </PageWrapper>
        </>
    );

};

export default Team;