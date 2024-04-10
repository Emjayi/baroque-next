import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/PageWrapper';
import projects from '../../lib/projectData'
import HorizontalScroll from '../../components/horizontalScroll';
import Project from '../../components/Project';


const Projects = () => {

    return (
        <PageWrapper pageName="Projects">

            <div className='h-full'>

                <div className='grid items-end grid-flow-col gap-10 min-h-64 grid-rows-1 pr-20'>
                    {projects.map(project => (
                        <Project key={project.id} {...project} />
                    ))}
                </div>

            </div>
        </PageWrapper >
    );
};

export default Projects;
