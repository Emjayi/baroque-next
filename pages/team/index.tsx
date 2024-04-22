'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageWrapper from '../../components/PageWrapper'

// Import team images
import bg from '/public/background.jpg'
import amir from '/public/team/amir.png'
import amin from '/public/team/amin.png'
import pedar from '/public/team/pedar.png'
import architecter1 from '/public/team/architecter-1.png'
import architecter2 from '/public/team/architecter-2.png'
import backgroundLogo from '/public/team/background-logo.png'
import behnam from '/public/team/behnam.png'
import behzad from '/public/team/behzad.png'
import edari1 from '/public/team/edari-1.png'
import edari2 from '/public/team/edari-2.png'
import farid from '/public/team/farid.png'
import mali from '/public/team/mali.png'
import media1 from '/public/team/media-1.png'
import media2 from '/public/team/media-2.png'
import media3 from '/public/team/media-3.png'
import refaei from '/public/team/refaei.png'
import vesal from '/public/team/vesal.png'

const imageComponents = [
    { src: bg, translateX: 'sMinus3' },
    { src: amin, translateX: 'sMinus1' },
    { src: farid, translateX: 's1' },
    { src: behnam, translateX: 'sMinus2' },
    { src: mali, translateX: 'sMinus1' },
    { src: architecter2, translateX: 's2' },
    { src: edari2, translateX: 's2' },
    { src: amir, translateX: 'sMinus1' },
    { src: pedar, translateX: 's1' },
    { src: architecter1, translateX: 's3' },
    { src: backgroundLogo, translateX: 'sMinus2' },
    { src: edari1, translateX: 's1' },
    { src: media3, translateX: 's1' },
    { src: media2, translateX: 's2' },
    { src: refaei, translateX: 's3' },
    { src: behzad, translateX: 's2' },
    { src: vesal, translateX: 's1' },
    { src: media1, translateX: 's3' },
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
            <motion.div className='h-full bg-black w-[1800px] flex top-0 bottom-auto'></motion.div>
            {imageComponents.map(({ src, translateX }, index) => (
                <motion.div
                    key={index}
                    className='h-screen w-[1800px] absolute -top-[50vh] bottom-auto'>
                    <Image src={src} alt='background' className='h-screen w-[1800px] object-cover' />
                </motion.div>
            ))}
        </PageWrapper>
    );
}

export default Team
