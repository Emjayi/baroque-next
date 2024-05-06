"use client"
import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/PageWrapper';
import projects from '../../lib/projectData'
import HorizontalScroll from '../../components/horizontalScroll';
import Project from '../../components/Project';
import { AnimatePresence, motion } from 'framer-motion';


const Projects = () => {


    return (
        <PageWrapper pageName="Projects">

            <motion.div className='h-full flex items-center'>
                <AnimatePresence>
                    <motion.div className='flex gap-10 min-h-64 grid-rows-1 pr-20'>
                        {projects.map(project => (
                            <Project key={project.id} {...project} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </motion.div>

        </PageWrapper >
    );
};

export default Projects;
