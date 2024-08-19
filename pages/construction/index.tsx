import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { projects } from '../../lib/data';
import Construction from '../../components/pages/construction/Construction';
import Head from 'next/head';


const Constructions = () => {

    return (
        <>
            <Head>
                <title>Baroque - Construction</title>
                <meta name="description" content="Discover the construction techniques and innovations employed by Baroque in our various projects." />
                <meta name="keywords" content="Baroque, construction, techniques, innovations, projects" />
                <meta name="author" content="Baroque Team" />
                <meta property="og:title" content="Baroque - Construction" />
                <meta property="og:description" content="Discover the construction techniques and innovations employed by Baroque in our various projects." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Baroque" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Baroque - Construction" />
                <meta name="twitter:description" content="Discover the construction techniques and innovations employed by Baroque in our various projects." />
            </Head>
            <PageWrapper pageName="Constructions">
                <div className='h-full flex items-center z-[10000000]'>
                    {projects.map((project, index) => (
                        <Construction key={index} {...project} />
                    ))}
                </div>
            </PageWrapper>
        </>
    );
};

export default Constructions;
