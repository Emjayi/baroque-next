import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import projects from '../../lib/projectData'
import HorizontalScroll from '../../components/horizontalScroll';
import Project from '../../components/Project';


const Projects = () => {
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
