import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PageWrapper from '../../components/PageWrapper';
import projects from '../../lib/projectData'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { Autoplay, Keyboard, Pagination, Scrollbar } from 'swiper/modules';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import { UilArrowLeft } from '@iconscout/react-unicons'
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const ProjectPage = () => {

    const ProjectPage = async () => {

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
            const updateMousePosition = (e) => {
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

        if (!project) {
            return (
                <AnimatePresence>

                </AnimatePresence>
            );
        }

        if (project) {
            return (
                <PageWrapper pageName={project.name} >
                    <motion.div
                        exit={
                            {
                                opacity: 0,
                                transition: {
                                    duration: .3
                                }
                            }}
                    >
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
                        <motion.div className='flex'>
                            <motion.div className='pro-image h-screen flex'>
                                <Image src={project.firstImage} width={1500} height={1200} alt='Main Image' className='object-cover w-[6000px]' />
                            </motion.div>
                            <motion.div id='info' className='px-8 text-white text-xl items-center justify-between w-[1500px] flex bg-black/30'>
                                <motion.div className='w-screen md:w-auto'>
                                    {project.area &&
                                        <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: .4 }}>
                                            <h1 className='text-zinc-500 font-bold'>Built area:</h1>
                                            <p className='text-[16px] w-36'>{project.area} m2</p>
                                        </motion.div>}
                                    {project.location &&
                                        <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: .6 }} className='my-5 pl-8'>
                                            <h1 className='text-zinc-500 font-bold'>Location:</h1>
                                            <p className='text-[16px] w-36'>{project.location}</p>
                                        </motion.div>}
                                    {project.client &&
                                        <motion.div initial={{ opacity: .1, x: 0 }} whileInView={{ opacity: 1, x: 10 }} transition={{ delay: .8 }} className='pl-16'>
                                            <h1 className='text-zinc-500 font-bold'>Client:</h1>
                                            <p className='text-[16px] w-36'>{project.client}</p>
                                        </motion.div>}
                                </motion.div>
                                <motion.div>
                                    {/* {project.team && project.team.map((t) => (
                                <div className='my-4'>
                                    <h1 className='text-zinc-500 font-bold'>{t.name}</h1>
                                    {t.body.map((b) => (<p>{b}</p>))}
                                </div>
                            ))} */}
                                </motion.div>
                            </motion.div>
                            <motion.div className=''>
                                <Swiper
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                    spaceBetween={0}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Keyboard, Pagination, Autoplay, Scrollbar]} className=" cursor-default w-screen h-screen bg-black/30">
                                    {project.allImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <Image src={`/projects/${project.name}/${image}`} width={1500} height={1500} alt={`Image ${index + 1}`} className='items-center flex h-screen object-contain'></Image>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </PageWrapper >
            );
        }
    }
};

export default ProjectPage;