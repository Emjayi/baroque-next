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

    return (
        <PageWrapper pageName="Projects">

            <div className=' h-full'>
                <HorizontalScroll>
                    <div className='grid grid-flow-col grid-rows-1'>
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
