'use client'
import React, { useRef, useState } from 'react'
import HorizantalScroll from '../../components/horizontalScroll';
import Image from 'next/image';
import bg from '/public/fg-1.jpg'
import test from '/public/test.svg'
import { AnimatePresence, m, motion, useScroll, useTransform } from 'framer-motion';
import { transform } from 'next/dist/build/swc';
import PageWrapper from '../../components/PageWrapper';
import Link from 'next/link';

const team = [
    {
        id: 1,
        name: "Amir Amiri",
        nik: "Chairman",
        job: "CEO & Design Principal",
        degree: "Master of Architecture, founder of MRK office.",
        joined: "2016",
        instaID: "emjayi_",
        mainImg: "/team/1.jpg",
        smileImg: "/public/team/2.jpg"
    },
    {
        id: 2,
        name: "Reza Amiri",
        nik: "Chairman",
        job: "CEO & Design Principal",
        degree: "Master of Architecture, founder of MRK office.",
        joined: "2016",
        instaID: "emjayi_",
        mainImg: "/team/1.jpg",
        smileImg: "/public/team/2.jpg"
    },
    {
        id: 3,
        name: "Mohammad Amiri",
        nik: "Chairman",
        job: "CEO & Design Principal",
        degree: "Master of Architecture, founder of MRK office.",
        joined: "2016",
        instaID: "emjayi_",
        mainImg: "/team/1.jpg",
        smileImg: "/public/team/2.jpg"
    },
    {
        id: 4,
        name: "Saeed Amiri",
        nik: "Chairman",
        job: "CEO & Design Principal",
        degree: "Master of Architecture, founder of MRK office.",
        joined: "2016",
        instaID: "emjayi_",
        mainImg: "/public/team/1.jpg",
        smileImg: "/public/team/2.jpg"
    },
    {
        id: 5,
        name: "Vahid Amiri",
        nik: "Chairman",
        job: "CEO & Design Principal",
        degree: "Master of Architecture, founder of MRK office.",
        joined: "2016",
        instaID: "emjayi_",
        mainImg: "/public/team/1.jpg",
        smileImg: "/public/team/2.jpg"
    },
]

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
        ["10%", "-10%"]
    );


    // const opacity = useTransform(scrollXProgress, [0, 1], [0, 1]);
    // const color = useTransform(scrollXProgress, [0, 1], ["#ffffff", "#000000"]);
    // const translateX = useTransform(scrollXProgress, [0, 1], [50, -50]);
    // const translateFX = useTransform(scrollXProgress, [0, 1], [-50, 50]);
    // const translateIX = useTransform(scrollXProgress, [0, 1], [80, -80]);
    return (
        <>
            {/* Intro animation */}
            <PageWrapper pageName='Team'>
                {/* <div className='bg'></div><div className='flex h-[99vh] items-center -z-10'>
                    <div className='flex h-[90vh] items-center gap-5 border-r-0 border-l-0 text-white text-6xl'>
                        <HorizantalScroll>
                            <div className=' flex items-center justify-start'>
                                <motion.div
                                    initial={{ opacity: 0, x: 200 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 2 }}
                                >
                                    <motion.div className='image w-[100vw] -ml-32' style={{ translateX }}>
                                        <Image src={bg} alt={"team Picture"} className='h-[105vh] w-full object-fill scale-110' />
                                    </motion.div>
                                    <motion.div className='absolute left-96 bottom-20 image w-96' style={{ translateX }}>
                                        <Image src={test} alt={"team Picture"} className=' object-fill scale-105' />
                                    </motion.div>
                                    <motion.div className='absolute left-96 bottom-20 image w-96' style={{ translateX }}>
                                        <Image src={test} alt={"team Picture"} className=' object-fill scale-105' />
                                    </motion.div>
                                    <motion.div className='absolute left-[600px] bottom-20 image w-96' style={{ translateX }}>
                                        <Image src={test} alt={"team Picture"} className=' object-fill scale-105' />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </HorizantalScroll>

                        <div className='flex flex-col w-[96vw]' ref={container}>
                            <Link href="/"><motion.h1
                                className='text-4xl text-white'
                                style={{}}
                            >
                                Hello world
                            </motion.h1></Link>
                            <motion.h1
                                className='text-xl text-white'
                                style={{ x: translateX }}
                                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            >
                                we are here because we love you.
                            </motion.h1>
                        </div>


                        <div className='flex gap-32'>
                            <div className=' items-center rounded-md image-container' ref={ref}>
                                {team.map((t) => (

                                    <motion.div className='flex image w-full' style={{ translateX }} key={t.id}>
                                        <Image src={t.mainImg} width={1600} height={1600} alt={"team Picture"} className='h-[100vh] w-full object-cover scale-125' />
                                    </motion.div>

                                ))}
                            </div>
                        </div>

                    </div>
                </div > */}
            </PageWrapper></>
    )
}

export default Team