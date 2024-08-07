"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PageWrapper from '../../../components/layout/PageWrapper';
import { projects } from '../../../lib/data'
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
import ProjectDesc from '../../../components/pages/projects/ProjectDesc';
import Head from 'next/head';


const ProjectPage = () => {

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


    const router = useRouter();
    const { projectName } = router.query;

    // Find the project data based on the projectName from the URL
    const project = projects.find(project => project.url === projectName);

    return (
        <>
            {project && <Head>
                <title>{project.name}</title>
                <meta name="description" content={`Discover the details of ${project.name}.`} />
                <meta name="keywords" content={`Baroque, ${project.name}, construction, project`} />
                <meta name="author" content="Baroque Team" />
                <meta property="og:title" content={`Our Projects - ${project.name}`} />
                <meta property="og:description" content={`Discover the details of ${project.name}.`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={project.firstImage} />
                <meta property="og:site_name" content="Baroque" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Our Projects - ${project.name}`} />
                <meta name="twitter:description" content={`Discover the details of ${project.name}.`} />
                <meta name="twitter:image" content={project.firstImage} />
                <link
                    rel="preload"
                    href={project.firstImage}
                    as="image"
                />
            </Head>}
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

                            <div className='overflow-hidden h-[100dvh] flex w-[1100px]'>
                                {/* <Image
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            src={project.firstImage} width={1500} priority={true} height={1200} alt='Main Image' className='object-cover w-[1600px] bg-black/10' /> */}
                                <FirstImage src={project.firstImage} priority={true} />
                            </div>

                            <ProjectDesc project={project} />
                            <Slider project={project} />
                        </motion.div>}
                </AnimatePresence>
            </PageWrapper>
        </>
    );
};
export default ProjectPage;
