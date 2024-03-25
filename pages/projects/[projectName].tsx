import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PageWrapper from '../../components/PageWrapper';
import projects from '../../lib/projectData'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Keyboard, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import { UilArrowLeft } from '@iconscout/react-unicons'
import Link from 'next/link';


const ProjectPage = () => {

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

    if (!project) {
        return
        <motion.div>
            <PageWrapper pageName='404'>
                <div><h1>404!</h1></div>
            </PageWrapper>
        </motion.div>
    }
    return (
        <PageWrapper pageName={project.name}>
            <div>
                <Link href="./"><button
                    className='fixed flex bottom-10 left-0 px-4 py-6 rounded-r-md bg-primary duration-150 text-white z-50'>
                    <UilArrowLeft /><p>Back to Projects</p>
                </button></Link>
                <div className='flex'>
                    <div className='pro-image  h-screen flex'>
                        <Image src={project.firstImage} width={1500} height={1200} alt='Main Image' className='object-cover w-[6000px]' />
                    </div>
                    <div className='text-white text-xl items-center justify-between w-[1500px] flex'>

                        <div>
                            {project.area && <><h1 className='text-zinc-500 font-bold'>Built area:</h1><p>{project.area}</p></>}
                            {project.location && <div className='my-5'><h1 className='text-zinc-500 font-bold'>Location:</h1><p>{project.location}</p></div>}
                            {project.client && <><h1 className='text-zinc-500 font-bold'>Client:</h1><p>{project.client}</p></>}
                        </div>
                        <div>
                            {/* {project.team && project.team.map((t) => (
                            <div className='my-4'>
                                <h1 className='text-zinc-500 font-bold'>{t.name}</h1>
                                {t.body.map((b) => (<p>{b}</p>))}
                            </div>
                        ))} */}
                        </div>

                    </div>

                    <div className=''>
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
                            navigation={true}
                            modules={[Keyboard, Pagination]} className=" cursor-default w-screen h-screen">
                            {
                                project.allImages.map((image: any, index: number) => (
                                    <SwiperSlide key={index + 1}>
                                        <Image src={`/projects/${project.name}/${image}`} width={1500} height={1500} alt={`Image ${index + 1}`} className='max-h-screen min-h-screen md:object-contain '></Image>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                    </div>
                </div>
            </div>

        </PageWrapper>
    );
};


//Sanity Data
// useEffect(() => {
//     const getPosts = async () => {
//         const query = `
//         *[_type == "project"] {
//             _id,
//             name,
//             status,
//             "gallery": gallery[].asset->url,
//             "galleryBlur": gallery[].asset->metadata.lqip,
//             slug,
//             "mainImage": mainImage.asset->url,
//             "blur": mainImage.asset->metadata.lqip,
//             alt,
//             type,
//             client,
//             area,
//             location,
//             team
//         }
//         `;
//         try {
//             const data = await client.fetch(query);
//             setProjects(data);
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//     };

//     getPosts();
// }, []);

export default ProjectPage;
