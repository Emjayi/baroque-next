"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PageWrapper from '../../../components/layout/PageWrapper';
import projects from '../../../lib/projectData'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Keyboard, Navigation } from 'swiper/modules';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import { UilArrowLeft } from '@iconscout/react-unicons'
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import FirstImage from '../../../components/pages/projects/ProjectFirstImage';
import Slider from '../../../components/pages/projects/Slider';


const ProjectPage = () => {

    // Image loading effect
    const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#00000000" offset="20%" />
        <stop stop-color="#44444430" offset="50%" />
        <stop stop-color="#00000000" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#00000020" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
    const toBase64 = (str: string) =>
        typeof window === "undefined"
            ? Buffer.from(str).toString("base64")
            : window.btoa(str);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [isAtEnd, setIsAtEnd] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isEnd = window.innerWidth + window.scrollX >= document.body.offsetWidth;
            setIsAtEnd(isEnd);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const buttonVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    const buttonControls = useAnimation();

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const updateMousePosition = (e: { clientX: any; clientY: any; }) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    const router = useRouter();
    const { projectName } = router.query;

    // Find the project data based on the projectName from the URL
    const project = projects.find(project => project.url === projectName);


    // if (!project) {
    //     return
    //     <motion.div>
    //         <PageWrapper pageName='404'>
    //             <div><h1>404!</h1></div>
    //         </PageWrapper>
    //     </motion.div>
    // }
    return (
        <PageWrapper pageName={project && project.name}>
            <AnimatePresence>
                {project &&
                    <motion.div
                        exit={{ opacity: 0, transition: { duration: .5, delay: .5 } }}
                        className='flex'>
                        <ScrollLink to="info" smooth={true} duration={500} offset={1} horizontal={true} className='block md:hidden'>
                            <motion.button
                                variants={buttonVariants}
                                animate={isAtEnd ? 'visible' : 'hidden'}
                                initial='hidden'
                                transition={{ duration: 0.3 }}
                                className='fixed flex top-[8dvh] left-[18vw] px-4 py-3 bg-primary/20 text-white z-50'>
                                <p>Project info</p>
                            </motion.button>
                        </ScrollLink>

                        <div className='pro-image h-[100dvh] flex w-[1200px] md:w-[1400px]'>
                            {/* <Image
                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                            src={project.firstImage} width={1500} priority={true} height={1200} alt='Main Image' className='object-cover w-[1600px] bg-black/10' /> */}
                            <FirstImage src={project.firstImage} priority={true} />
                        </div>

                        <div id='info' className='md:px-8 text-white text-xl md:items-center flex flex-col gap-5 justify-center flex-wrap bg-black/30 h-[100dvh] w-[101dvw] md:w-[600px]'>
                            <div className='flex pl-20 flex-col md:pl-0 gap-5 md:justify-between flex-wrap md:h-[300px]'>
                                {project.area && <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: .4 }}><h1 className='text-zinc-500 font-bold'>Built area:</h1><p className='text-[16px] w-72'>{project.area}</p></motion.div>}
                                {project.location && <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: .6 }} className='my-5'><h1 className='text-zinc-500 font-bold'>Location:</h1><p className='text-[16px] w-72'>{project.location}</p></motion.div>}
                                {project.year && <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: .8 }} className=''><h1 className='text-zinc-500 font-bold'>Year:</h1><p className='text-[16px] w-72'>{project.year}</p></motion.div>}
                                {project.area && <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: 1 }}><h1 className='text-zinc-500 font-bold'>Project Manager:</h1>{(project.projectManager).map((manager, index) => (<p className='text-[16px] w-72' key={index}>{manager}</p>))}</motion.div>}
                                {project.location && <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: 1.2 }} className='my-5'><h1 className='text-zinc-500 font-bold'>Type:</h1><p className='text-[16px] w-72'>{project.type}</p></motion.div>}
                                {project.year && <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: 1.4 }} className=''><h1 className='text-zinc-500 font-bold'>Architect Group:</h1><p className='text-[16px] w-72'>{project.architect}</p></motion.div>}
                            </div>
                        </div>

                        <Slider project={project} />

                    </motion.div>}
            </AnimatePresence>
        </PageWrapper>
    );
};
export default ProjectPage;
