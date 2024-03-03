import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/PageWrapper';
// import projects from '../../lib/projectData'
import HorizontalScroll from '../../components/horizontalScroll';
import Project from '../../components/Project';
import { client } from '../../sanity/lib/client';


const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const query = `
                *[_type == "project"] {
                    _id,
                    title,
                    status,
                    gallery,
                    slug,
                    "mainImage": mainImage.asset->url,
                    "blur": mainImage.asset->metadata.lqip,
                    alt,
                    date,
                    type
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

    return (
        <PageWrapper pageName="Projects">

            <div className=' h-full'>
                <HorizontalScroll>
                    <div className='grid items-end grid-flow-col gap-10 min-h-64 grid-rows-1 pr-20'>
                        {projects.map(project => (
                            <Project key={project.id} {...project} />
                        ))}
                    </div>
                </HorizontalScroll>
            </div>
        </PageWrapper >
    );
};

export default Projects;
