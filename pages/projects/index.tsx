"use client"
import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import projects from '../../lib/projectData'
import HorizontalScroll from '../../components/layout/HorizontalScroll';
import Project from '../../components/pages/projects/Project';
import { AnimatePresence, motion } from 'framer-motion';


const Projects = () => {
    return (
        <PageWrapper pageName="Projects">
            <motion.div className='h-full flex items-center'>
                <motion.div
                    className='flex gap-10 min-h-64 grid-rows-1 pr-20'>
                    {projects.map(project => (
                        <Project key={project.id} {...project} />
                    ))}
                </motion.div>
            </motion.div>
        </PageWrapper >
    );
};

export default Projects;
