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
                    slug,
                    "mainImage": mainImage.asset->url,
                    alt,
                    categories
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
    console.log(projects)

    // Find the project data based on the projectName from the URL
    const project = projects.find(project => project.slug.current === projectName);

    if (!project) {
        return <div className='flex h-screen w-screen text-center justify-center items-center text-white text-2xl'>Project not found</div>;
    }

    return (
        <PageWrapper pageName={project.title}>
            <div className='flex'>
                <div className='pro-image w-[1500px] h-screen flex'>
                    <Image src={project.mainImage} width={1500} height={1200} alt='Main Image' className='object-cover' />
                </div>
                <div className='text-white text-xl items-center justify-center w-[1500px] flex'>
                    <p>Project details</p>
                    <p>Project details</p>
                    <p>Project details</p>
                    <p>Project details</p>
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
                        {/* {
                            project.allImages.map((image, index) => (
                                <SwiperSlide key={index + 1}>
                                    <Image src={image} width={1500} height={1500} alt={`Image ${index + 1}`} className='max-h-screen min-h-screen md:object-contain '></Image>
                                </SwiperSlide>
                            ))
                        } */}
                    </Swiper>

                </div>
            </div>
        </PageWrapper>
    );
};

export default ProjectPage;
