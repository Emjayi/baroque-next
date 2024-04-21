'use client'
import React, { useRef, useState } from 'react'
import HorizantalScroll from '../../components/horizontalScroll';
import Image from 'next/image';
import bg from '/public/background.jpg'
import test from '/public/team/amir.png'
import test2 from '/public/team/pedar.png'
import test4 from '/public/team/pedarAlone.png'
import test3 from '/public/team/amin.png'
import { AnimatePresence, m, motion, useScroll, useTransform } from 'framer-motion';
import { transform } from 'next/dist/build/swc';
import PageWrapper from '../../components/PageWrapper';
import Link from 'next/link';


const Team = () => {
    const container = useRef()
    // const { scrollXProgress } = useScroll();

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const translateX = useTransform(
        scrollXProgress,
        // Map x from these values:
        [0, 1],
        // Into these values:
        ["2%", "-2%"]
    );


    const opacity = useTransform(scrollXProgress, [0, 1], [0, 1]);
    const color = useTransform(scrollXProgress, [0, 1], ["#ffffff", "#000000"]);
    const s1 = useTransform(scrollXProgress, [0, 1], [0, 10]);
    const s2 = useTransform(scrollXProgress, [0, 1], [0, 20]);
    const s3 = useTransform(scrollXProgress, [0, 1], [0, 30]);
    const sMinus1 = useTransform(scrollXProgress, [0, 1], [0, -5]);
    const sMinus2 = useTransform(scrollXProgress, [0, 1], [0, -10]);
    return (
        <PageWrapper pageName='Team'>
            <motion.div

                className='h-[100vh] w-screen absolute top-0'>
                <Image src={bg} alt='background' className='h-[100vh] w-screen object-cover' />
            </motion.div>
            <motion.div
                style={{ translateX: sMinus1 }}
                className='h-[100vh] w-screen absolute top-0'>
                <Image src={test3} alt='background' className='h-[100vh] w-screen object-cover' />
            </motion.div>
            <motion.div
                style={{ translateX: s1 }}
                className='h-[100vh] w-screen absolute top-0'>
                <Image src={test} alt='background' className='h-[100vh] w-screen object-cover' />
            </motion.div>
            <div className='relative h-[100vh] w-screen'>
                <div className='relative'>
                    {/* Main image */}
                    <Image src={test2} alt='pedar' className='h-[100vh] w-screen object-cover' />
                    {/* Image overlay for hover effect */}
                    <div className='absolute top-0 left-12 w-full h-full flex items-center justify-center'>
                        <div className='absolute w-[200px] h-1/3 bg-transparent hover:bg-opacity-20' style={{ top: '60%', left: '0' }}>
                            {/* Hover effect */}
                            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100'>
                                <div className='bg-white p-4 rounded-md'>
                                    {/* Description of the man */}
                                    {/* Replace this with your actual description content */}
                                    <h2 className='text-lg font-bold'>Man Description</h2>
                                    <p>Additional details about the man...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </PageWrapper>
    )
}

export default Team