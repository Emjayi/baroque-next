'use client'
import React, { useRef, useState } from 'react'
import HorizantalScroll from '../../components/horizontalScroll';
import Image from 'next/image';
import bg from '/public/fg-1.jpg'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { transform } from 'next/dist/build/swc';
import PageWrapper from '../../components/PageWrapper';
import Link from 'next/link';

const Team = () => {
    const container = useRef()
    const { scrollXProgress } = useScroll();

    const opacity = useTransform(scrollXProgress, [0, 1], [0, 1]);
    const color = useTransform(scrollXProgress, [0, 1], ["#ffffff", "#000000"]);
    const transformX = useTransform(scrollXProgress, [0, 1], [200, -200]);
    return (
        <>
            {/* Intro animation */}
            <PageWrapper pageName='Team'>
                <div className='bg'></div><div className='flex h-[99vh] items-center -z-10'>
                    <div className='flex h-[90vh] items-center gap-5 border-r-0 border-l-0 text-white text-6xl'>
                        <HorizantalScroll>
                            <div className=' flex items-center rounded-md '>
                                <motion.div
                                    initial={{ opacity: 0, x: 200 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 2 }}
                                >
                                    <div className='h-screen object-fill w-[26em]'><Image src={bg} alt={"team Picture"} className='h-[105vh] w-full object-fill ' /></div>
                                </motion.div>
                            </div>
                        </HorizantalScroll>

                        <div className='flex flex-col w-[96vw]' ref={container}>
                            <Link href="/"><motion.h1
                                className='text-4xl text-white'
                                style={{ opacity }}
                            >
                                Hello world
                            </motion.h1></Link>
                            <motion.h1
                                className='text-xl text-white'
                                style={{ x: transformX }}
                                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            >
                                we are here because we love you.
                            </motion.h1>
                        </div>
                    </div>
                </div >
            </PageWrapper></>
    )
}

export default Team