"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PageWrapper from '../../../components/layout/PageWrapper';
import projects from '../../../lib/projectData'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Keyboard, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import { UilArrowLeft } from '@iconscout/react-unicons'
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';


const ProjectPage = () => {

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
            {project &&
                <motion.div>
                    <ScrollLink to="info" smooth={true} duration={500} offset={1} horizontal={true}>
                        <motion.button
                            variants={buttonVariants}
                            animate={isAtEnd ? 'visible' : 'hidden'}
                            initial='hidden'
                            transition={{ duration: 0.3 }}
                            className='fixed flex bottom-10 left-0 px-4 py-6 bg-primary/20 duration-150 text-white z-50'>
                            <p>Project info</p>
                        </motion.button>
                    </ScrollLink>
                    <div className='flex'>
                        <div className='pro-image h-screen flex'>
                            <Image src={project.firstImage} width={1500} height={1200} alt='Main Image' className='object-cover w-[6000px]' />
                        </div>
                        <div id='info' className='px-8 text-white text-xl items-center justify-between w-[1500px] flex bg-black/30'>

                            <div className='w-screen md:w-[28vw]'>
                                {project.area && <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: .4 }}><h1 className='text-zinc-500 font-bold'>Built area:</h1><p className='text-[16px] w-36'>{project.area} m2</p></motion.div>}
                                {project.location && <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: .6 }} className='my-5'><h1 className='text-zinc-500 font-bold'>Location:</h1><p className='text-[16px] w-36'>{project.location}</p></motion.div>}
                                {project.client && <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: .8 }} className=''><h1 className='text-zinc-500 font-bold'>Client:</h1><p className='text-[16px] w-36'>{project.client}</p></motion.div>}
                            </div>
                        </div>

                        <div className=''>

                            <Swiper
                                navigation={true}
                                keyboard={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Keyboard, Navigation, Thumbs]} className="w-[68vw] flex h-full bg-black/30">
                                {
                                    project.allImages.map((image: any, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={`/projects/${project.name}/${image}`}
                                                layout='fill'
                                                alt={`Image ${index}`}
                                                className='items-center flex object-cover'
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                        </div>
                    </div>
                </motion.div>}

        </PageWrapper>
    );
};
export default ProjectPage;
