import React from 'react'
import PageWrapper from '../../components/layout/PageWrapper';
import img3 from '../../public/about/3.jpg';
import img2 from '../../public/about/2.jpg';
import img1 from '../../public/about/1.jpg';
import Contacts from '../../components/pages/about/Contacts/index';
import AboutMap from '../../components/pages/about/Map';
import AboutPic from '../../components/pages/about/AboutPic';
import AboutDesc from '../../components/pages/about/AboutDesc';

const About = () => {

    return (
        <PageWrapper pageName='about'>
            <AboutPic src={img3} />
            <AboutDesc />
            <AboutPic src={img1} />
            <Contacts />
            <AboutPic src={img2} />
            <AboutMap />
        </PageWrapper >
    )
}

export default About

