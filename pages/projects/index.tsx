"use client"
import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { projects } from '../../lib/data'
import HorizontalScroll from '../../components/layout/HorizontalScroll';
import Project from '../../components/pages/projects/Project';
import { AnimatePresence, motion } from 'framer-motion';
import type { Metadata } from 'next/types';
import Head from 'next/head';

const Projects = () => {
    return (
        <>
            <Head>
                <title>Baroque - Projects</title>
                <meta name="description" content="Explore the projects Constructed by Baroque." />
                <meta name="keywords" content="Baroque, projects, construction, Baroque 5, Baroque 6, Baroque 7, Baroque 8, Baroque 9, Baroque 10, Baroque 11, Baroque 12, Baroque 13, Baroque 14" />
                <meta name="author" content="Baroque Team" />
                <meta property="og:title" content="Baroque - Projects" />
                <meta property="og:description" content="Explore the projects Constructed by Baroque." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Baroque" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Baroque - Projects" />
                <meta name="twitter:description" content="Explore the projects Constructed by Baroque." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://baroquegp.com/projects" />
            </Head>
            <PageWrapper pageName="Projects">
                <motion.div className='h-full flex items-center'>
                    <motion.div
                        className='flex gap-10 min-h-64 grid-rows-1 pr-20'>
                        {projects.map(project => (
                            <Project key={project.id} {...project} />
                        ))}
                    </motion.div>
                </motion.div>
            </PageWrapper>
        </>
    );
};

export default Projects;
