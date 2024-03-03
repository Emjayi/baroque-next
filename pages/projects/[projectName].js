// pages/projects/[projectName].js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PageWrapper from '../../components/PageWrapper';
// import projects from '../../lib/projectData'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { client } from '../../sanity/lib/client';
import 'swiper/css';
import 'swiper/css/navigation';

const ProjectPage = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const query = `
            *[_type == "project"] {
                _id,
                title,
                status,
                "gallery": gallery[].asset->url,
                "galleryBlur": gallery[].asset->metadata.lqip,
                slug,
                "mainImage": mainImage.asset->url,
                "blur": mainImage.asset->metadata.lqip,
                alt,
                type,
                client,
                area,
                location,
                team
            }
            `;
            try {
                const data = await client.fetch(query);
                setProjects(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        getPosts();
    }, []);

    const router = useRouter();
    const { projectName } = router.query;


    // Find the project data based on the projectName from the URL
    const project = projects.find(project => project.slug.current === projectName);

    if (!project) {
        return <div className='flex h-screen w-screen text-center justify-center items-center text-white text-2xl'></div>;
    }
    return (
        <PageWrapper pageName={project.title}>
            <div className='flex'>
                <div className='pro-image  h-screen flex'>
                    <Image src={project.mainImage} width={1500} height={1200} alt='Main Image' className='object-cover' />
                </div>
                <div className='text-white text-xl items-center justify-between w-[1500px] flex'>

                    <div>
                        {project.area && <><h1 className='text-zinc-500'>Built area:</h1><p>{project.area}</p></>}
                        {project.location && <div className=' my-5'><h1 className='text-zinc-500'>Location:</h1><p>{project.location}</p></div>}
                        {project.client && <><h1 className='text-zinc-500'>Client:</h1><p>{project.client}</p></>}
                    </div>
                    <div>
                        {project.team.map((t) => (
                            <div className='my-4'>
                                <h1 className='text-zinc-500 font-bold'>{t.title}</h1>
                                {t.body.map((b) => (<p>{b}</p>))}
                            </div>
                        ))}
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
                        modules={[Autoplay, Keyboard, Pagination, Navigation]} className=" cursor-default w-screen h-screen">
                        {
                            project.gallery.map((image, index) => (
                                <SwiperSlide key={index + 1}>
                                    <Image src={image} width={1500} height={1500} alt={`Image ${index + 1}`} className='max-h-screen min-h-screen md:object-contain '></Image>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
        </PageWrapper >
    );
};

export default ProjectPage;
