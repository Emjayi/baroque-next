import React from 'react'
import PageWrapper from '../../components/layout/PageWrapper';
import img3 from '../../public/about/3.jpg';
import img2 from '../../public/about/2.jpg';
import img1 from '../../public/about/1.jpg';
import Contacts from '../../components/pages/about/Contacts/index';
import AboutMap from '../../components/pages/about/Map';
import AboutPic from '../../components/pages/about/AboutPic';
import AboutDesc from '../../components/pages/about/AboutDesc';
import Head from 'next/head';

const About = () => {

    return (
        <>
            <Head>
                <title>Baroque - About</title>
                <meta name="description" content="Learn more about Baroque, our mission, vision, and the history behind our construction projects." />
                <meta name="keywords" content="Baroque, construction, mission, vision, history" />
                <meta name="author" content="Baroque Team" />
                <meta property="og:title" content="About Baroque" />
                <meta property="og:description" content="Learn more about Baroque, our mission, vision, and the history behind our construction projects." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://baroquegp.com/about" />
                <meta property="og:site_name" content="Baroque" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Baroque" />
                <meta name="twitter:description" content="Learn more about Baroque, our mission, vision, and the history behind our construction projects." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://baroquegp.com/about" />
            </Head>
            <PageWrapper pageName='about'>
                <AboutPic src={img1} priority={true} />
                <AboutDesc />
                <AboutPic src={img2} priority={false} />
                <Contacts />
                <AboutPic src={img3} priority={false} />
                <AboutMap />
            </PageWrapper></>
    )
}

export default About

