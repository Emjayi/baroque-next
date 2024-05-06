import React, { useEffect, useRef, useState } from 'react'
import PageWrapper from '../../components/PageWrapper';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import Image from 'next/image';
import img3 from '../../public/about/3.jpg';
import img2 from '../../public/about/2.jpg';
import img1 from '../../public/about/1.jpg';
import GoogleMap from './map'
import Contact from '../../components/layout/about/Contact';
import { CircleFadingPlus, Linkedin, PhoneCall, Pin, PinIcon } from 'lucide-react';

const About = () => {
    const aboutText = "Here is the land of new opportunities and even a home where you can experience, learn, be supported, and in a word a place where you can live architecture. Doing professional and researching projects of architecture. Teaching architecture to young people, considering the lack of proper academic area in the north of Iran. Studying and providing innovative models to settle the shantytown and those who have been hurt by natural disasters. Designing fast-to-build houses for the times of emergency.Reviving and researching in architecture and local building techniques and preventing the local architecture from being faded into oblivion.".split(" ");

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
        ["14%", "-14%"]
    );
    // scroll animation
    const { scrollX } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // const scrollVelocity = useVelocity(scrollX);
    const smoothVelocity = useSpring(scrollX, {
        damping: 600,
        stiffness: 1200
    });
    const velocityFactor = useTransform(
        smoothVelocity,
        [-10000, 10000],
        [-800, 800]);
    // const revVelocityFactor = useTransform(
    //     smoothVelocity,
    //     [-1000, 1000],
    //     [4, -4]);

    const contacts = [
        {
            icon: <Pin size={60} fill='#00000020' />,
            title: "Address",
            desc: "Armitaj Tower",
        },
        {
            icon: <PhoneCall size={60} fill='#00000020' />,
            title: "Phone",
            desc: "051 - 3356 4456",
            url: "tel:+985133564456"
        },
        {
            icon: <CircleFadingPlus size={60} fill='#00000020' />,
            title: "Instagram",
            desc: "insta.baroque"
        },
        {
            icon: <Linkedin size={60} fill='#00000020' />,
            title: "LinkedIn",
            desc: "insta.baroque"
        },
        {
            icon: <Linkedin size={60} fill='#00000020' />,
            title: "LinkedIn",
            desc: "insta.baroque"
        },

    ]

    return (
        <PageWrapper pageName='about'>
            <div className='flex'>
                <div className=' w-[1000px] h-screen'>
                    <motion.div
                        className='overflow-hidden w-[1000px] h-screen'
                        ref={ref}
                    >
                        <motion.div
                            style={{ translateX: velocityFactor }}
                            className='h-screen object-cover'><Image src={img3} className='-ml-16 h-screen scale-110 min-w-[1000px] object-cover' alt='about baroque'></Image></motion.div>
                    </motion.div>
                </div>
                <div className='flex h-screen justify-center items-center w-[800px] mr-12'>
                    <motion.h1
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .25, delay: .2 }}
                        className='absolute -rotate-90 md:left-[950px] left-[1250px] text-white w-52 text-2xl '>Where is Baroque?</motion.h1>
                    <div className='md:w-[800px] w-[300px] md:ml-28 ml-32'>
                        <h1 className='text-3xl uppercase text-zinc-500'><span className='text-primary text-xl'>BELOW IS FROM MRK</span></h1>
                        {aboutText.map((el, i) => (
                            <motion.span
                                initial={{ x: -50, opacity: 0.2 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.25,
                                    delay: i / 100
                                }}
                                key={i}
                                className='text-white'
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                    </div>
                </div>
                <div className=' w-[1000px] h-screen'>
                    <motion.div
                        className='overflow-hidden w-[1000px] h-screen'
                        ref={ref}
                    >
                        <motion.div
                            style={{ translateX: velocityFactor }}
                            className='h-screen'>
                            <Image src={img1} className='-ml-16 h-screen scale-125 min-w-[1000px] object-cover' alt='about baroque'></Image>
                        </motion.div>
                    </motion.div>
                </div>
                <div className='flex text-white text-lg  flex-col w-[1000px] items-center justify-center h-screen'>
                    <motion.h1
                        initial={{ opacity: .5, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: .2 }}
                        className='text-zinc-200 mb-10 text-bold text-3xl'>Contact</motion.h1>
                    <motion.div
                        className='grid grid-cols-2 w-[500px]'
                    >
                        {
                            contacts.map(({ title, desc, url, icon, }, index) => (
                                <Contact key={index + 1} title={`${title}`} desc={`${desc}`} url={`${url}`} icon={icon} />
                            ))
                        }

                    </motion.div>
                </div>

                <div className=' w-[1000px] h-screen'>
                    <motion.div
                        className='overflow-hidden w-[1000px] h-screen'
                        ref={ref}
                    >
                        <motion.div
                            style={{ translateX: velocityFactor }}
                            className='h-screen object-cover'>
                            <Image src={img2} className='-ml-16 h-screen scale-125 min-w-[1000px] object-cover' alt='about baroque'></Image>
                        </motion.div>
                    </motion.div>
                </div>

                <div className='flex text-white text-lg w-[800px] flex-col items-center justify-center h-screen'>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        className='text-2xl'
                    >Map
                    </motion.h1>
                </div>
            </div>
        </PageWrapper>
    )
}

export default About

